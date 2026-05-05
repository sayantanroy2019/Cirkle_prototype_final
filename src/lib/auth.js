import { supabase } from './supabaseClient';

export async function requestMagicLink({ name, email }) {
  if (!supabase) {
    throw new Error('Supabase not configured.');
  }

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      data: { name },
      emailRedirectTo: window.location.origin,
    },
  });

  if (error) {
    throw new Error(error.message || 'Could not send the link. Please try again.');
  }
}

export async function signOut() {
  if (!supabase) return;
  await supabase.auth.signOut();
}
