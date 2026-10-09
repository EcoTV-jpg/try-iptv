import { z } from 'zod';
import { Resend } from 'resend';

export const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name cannot be blank.', invalid_type_error: 'Name cannot be blank.' })
    .trim()
    .min(1, 'Name cannot be blank.')
    .max(100, 'Name cannot exceed 100 characters.'),
  email: z
    .string({ required_error: 'Email is required.', invalid_type_error: 'Email is required.' })
    .trim()
    .min(1, 'Email is required.')
    .email('Invalid email address.')
    .max(255, 'Email cannot exceed 255 characters.'),
  message: z
    .string({ required_error: 'Message cannot be empty.', invalid_type_error: 'Message cannot be empty.' })
    .trim()
    .min(1, 'Message cannot be empty.')
    .max(5000, 'Message cannot exceed 5000 characters.'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactResult = {
  success?: boolean;
  message?: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    form?: string[];
  } | null;
};

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function processContactSubmission(rawInput: {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}): Promise<ContactResult> {
  const validation = contactSchema.safeParse(rawInput);

  if (!validation.success) {
    return {
      success: false,
      message: 'Please correct the errors below.',
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validation.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('RESEND_API_KEY is not defined in the environment.');
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
      errors: {
        form: ['Something went wrong. Please try again.'],
      },
    };
  }

  try {
    const resend = new Resend(apiKey);
    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');
    const timestamp = new Date().toUTCString();

    const subject = name
      ? `TryIPTV Support — ${name}`
      : 'New TryIPTV Support Request';

    const html = `<h2>New TryIPTV Support Request</h2>

<p>
A new message was submitted through the TryIPTV contact page.
</p>

<table style="border-collapse: collapse; margin-bottom: 20px;">
  <tr>
    <td style="padding: 6px 16px 6px 0; vertical-align: top;"><strong>Name</strong></td>
    <td style="padding: 6px 0; vertical-align: top;">${escapedName}</td>
  </tr>
  <tr>
    <td style="padding: 6px 16px 6px 0; vertical-align: top;"><strong>Email</strong></td>
    <td style="padding: 6px 0; vertical-align: top;">${escapedEmail}</td>
  </tr>
</table>

<h3>Customer Message</h3>

<div style="margin-bottom: 20px; line-height: 1.5;">
${escapedMessage}
</div>

<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">

<p style="font-size: 13px; color: #4b5563; line-height: 1.5;">
<strong>Source:</strong> TryIPTV Contact Page<br>
<strong>Page:</strong> https://www.tryiptv.com/contact-us<br>
<strong>Submitted:</strong> ${timestamp}
</p>`;

    const text = `New TryIPTV Support Request

Name: ${name}
Email: ${email}

Message:
${message}

Source: TryIPTV Contact Page
Page: https://www.tryiptv.com/contact-us
Submitted: ${timestamp}`;


    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'anouaraissaoui.pro+@gmail.com',
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error('Resend delivery failure:', error);
      return {
        success: false,
        message: 'Something went wrong. Please try again.',
        errors: {
          form: ['Something went wrong. Please try again.'],
        },
      };
    }

    return {
      success: true,
      message: "Message sent successfully. We'll get back to you as soon as possible.",
      errors: null,
    };
  } catch (err) {
    console.error('Unexpected error while sending contact email:', err);
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
      errors: {
        form: ['Something went wrong. Please try again.'],
      },
    };
  }
}
