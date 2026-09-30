'use server';

import { z } from 'zod';
import { getRelatedPosts } from '@/lib/linking';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

type State = {
  message?: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
};

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    };
  }

  // Transparent delivery integrity: Avoid reporting false delivery when no SMTP/backend service is attached
  return { 
    message: 'To ensure your request is answered immediately, please email support@tryiptv.com or message our team on WhatsApp.', 
    errors: {
      message: ['Direct email or WhatsApp is required for active support routing.']
    }
  };
}

export async function getRelatedPostsAction(currentId: string) {
    try {
        const posts = await getRelatedPosts(currentId);
        return posts;
    } catch (error) {
        console.error("Error fetching related posts:", error);
        return [];
    }
}
