// actions.ts
'use server'

import supabase from '@/lib/supabase'
import type { Business } from '@/models/models'

export async function getUserBusinesses(userId: string) {
  if (!userId) {
    return { error: 'User ID is required', businesses: null }
  }

  try {
    // Fetch all business_id's associated with a specific user_id
    const { data: usersBusinesses, error: usersBusinessesError } =
      await supabase
        .from('UsersBusiness')
        .select('business_id')
        .eq('user_id', userId)

    if (usersBusinessesError) {
      console.error('Error fetching business IDs:', usersBusinessesError)
      return { error: 'Failed to fetch business IDs', businesses: null }
    }

    const businessIds = usersBusinesses?.map((row) => row.business_id)

    if (!businessIds || businessIds.length === 0) {
      return { businesses: [] }
    }

    // Fetch the full business objects using the collected IDs
    const { data: businesses, error: businessesError } = await supabase
      .from('business')
      .select('*')
      .in('id', businessIds)

    if (businessesError) {
      console.error('Error fetching business details:', businessesError)
      return { error: 'Failed to fetch business details', businesses: null }
    }

    return { businesses }
  } catch (err) {
    console.error('Unexpected error:', err)
    return { error: 'An unexpected error occurred', businesses: null }
  }
}

export async function createNewBusiness(businessData: Partial<Business>) {
  const { data, error } = await supabase
    .from('business')
    .insert([businessData])
    .select()

  if (error) {
    console.error('Error inserting new business:', error)
  } else {
    console.log('Successfully inserted new business:', data)
    return data?.[0]
  }
}

export async function createNewBusinessUser(
  userId: string,
  businessID: string,
) {
  const { data, error } = await supabase
    .from('UsersBusiness')
    .insert([
      {
        user_id: userId,
        business_id: businessID,
      },
    ])
    .select()

  if (error) {
    console.error('Error inserting new UsersBusiness:', error)
  } else {
    console.log('Successfully inserted new UsersBusiness:', data)
    return data?.[0]
  }
}
