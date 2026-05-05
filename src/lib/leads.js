import { supabase } from './supabaseClient';

export async function saveLead({ name, email }) {
  if (!supabase) {
    console.warn('Supabase not configured — skipping lead save.');
    return;
  }

  const { error } = await supabase
    .from('leads')
    .insert({ name, email });

  if (error && error.code !== '23505') {
    throw new Error(error.message || 'Could not save your details.');
  }
}
