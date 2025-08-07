'use server'
import supabase from "@/lib/supabase"

export async function getUserGoogleSheets(userId: string, businessId: string) {
  // Use a Supabase client to fetch the user's access token
  const { data: tokenData, error } = await supabase
    .from('oauth_accounts')
    .select('access_token')
    .eq('user_id', userId)
    .single()

  if (error || !tokenData) {
    console.error('Error fetching access token:', error)
    return { error: 'Access token not found.', sheets: null }
  }

  const accessToken = tokenData.access_token

  // Call the Google Drive API to list all spreadsheets
  const response = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=mimeType='application/vnd.google-apps.spreadsheet'&fields=files(id,name,webViewLink)`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  if (!response.ok) {
    console.error(`Google API Error: ${response.statusText}`)
    const errorDetails = await response.text()
    console.error('Error details:', errorDetails)
    return { error: 'Failed to fetch Google Sheets.', sheets: null }
  }

  const data = await response.json()
  return { sheets: data.files, error: null }
}