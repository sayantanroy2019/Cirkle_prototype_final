import { supabase } from './supabaseClient';

export async function saveLead({ name, email }) {
  if (!supabase) {
    throw new Error(
      'Access requests are temporarily unavailable. Please try again later.',
    );
  }

  const { error } = await supabase
    .from('leads')
    .insert({ name, email });

  if (!error) return;

  if (error.code === '23505') return;

  if (error.code === '42501' || /row-level security/i.test(error.message || '')) {
    console.error('[leads] RLS blocked insert:', error);
    throw new Error("We couldn't save your request. Please try again in a moment.");
  }

  console.error('[leads] insert failed:', error);
  throw new Error(error.message || 'Could not save your details.');
}
