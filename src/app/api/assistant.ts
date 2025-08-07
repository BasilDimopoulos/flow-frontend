'use server'

import supabase from '@/lib/supabase'
import type { Assistant } from '@/models/models'

export async function createNewAssistant(
  assistantData: Assistant,
  businessId: string,
) {
  assistantData.business_id = businessId
  console.log("Creating Assistant with: ", assistantData)
  const { data, error } = await supabase
    .from('assistant')
    .insert([assistantData])
    .select()

  if (error) {
    console.error('Error inserting new assistant:', error)
  } else {
    console.log('Successfully inserted new assistant:', data)
  }
}
