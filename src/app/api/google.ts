'use server'

import supabase from "@/lib/supabase";

/**
 * Checks if a user has connected a Google account by querying the oauth_accounts table.
 * @param {string} userId - The unique ID of the user.
 * @returns {Promise<boolean>} - True if a matching account is found, false otherwise.
 */
export async function hasConnectedGoogleAccount(userId: string) {
  if (!userId) {
    return false;
  }

  // Query the oauth_accounts table for a record with the given user_id
  const { data, error } = await supabase
    .from('oauth_accounts')
    .select('id')
    .eq('user_id', userId)
    .limit(1)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 is the code for "no rows found"
    console.error('Error checking for connected account:', error);
    // You might want to handle other errors differently, e.g., throw a new error
    return false; 
  }

  // If data exists, it means a matching record was found
  return !!data;
}