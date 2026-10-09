'use server';

import { getRelatedPosts } from '@/lib/linking';
import { processContactSubmission, type ContactResult } from '@/lib/server/contact';

export type State = ContactResult;

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  const rawInput = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  return await processContactSubmission(rawInput);
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
