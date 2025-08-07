// app/dashboard/[[...slug]]/page.tsx
'use client'

import ConnectGoogleSheetsButton from '@/app/components/ConnectGoogleSheetsButton'
import { useParams } from 'next/navigation'

export default function BusinessInfo() {
  const params = useParams()
  const { slug } = params
  const userId = '3430d213-6a81-46fa-98a5-689120fd9dee'
  const businessId = slug

  return (
    <div>
      <h1>Welcome to your business page</h1>
      <ConnectGoogleSheetsButton />
      {/* {slug && slug.length > 0 && (
        <p>
          You have navigated to a sub-route: <strong>/{slug}</strong>
        </p>
      )}
      <p>This page handles all requests to /dashboard and any nested paths.</p> */}
    </div>
  )
}
