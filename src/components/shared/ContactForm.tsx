
'use client';

import { useEffect, useActionState, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const initialState = { success: false, message: null, errors: null };
  const [state, dispatch] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message && !state.errors) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={dispatch} className="space-y-4">
      {state.message && !state.errors && (
        <div className="rounded-lg border border-primary/20 bg-primary/10 p-3 text-sm text-primary">
          {state.message}
        </div>
      )}
      {state.errors?.form && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
          {state.errors.form[0]}
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="name-form">Name</Label>
        <Input id="name-form" name="name" placeholder="Your Name" />
        {state.errors?.name && (
          <p className="text-sm text-destructive">{state.errors.name[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-form">Email</Label>
        <Input
          id="email-form"
          name="email"
          type="email"
          placeholder="your@email.com"
        />
        {state.errors?.email && (
          <p className="text-sm text-destructive">{state.errors.email[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message-form">Message</Label>
        <Textarea id="message-form" name="message" placeholder="How can we help you?" />
        {state.errors?.message && (
          <p className="text-sm text-destructive">{state.errors.message[0]}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
