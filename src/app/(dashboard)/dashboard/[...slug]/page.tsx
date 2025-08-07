// app/dashboard/[[...slug]]/page.tsx
'use client'

import { useParams } from 'next/navigation'

export default function BusinessInfo() {
  const params = useParams()
  const { slug } = params

  // `slug` will be an array like ['Remos'] for the /dashboard/Remos route.
  // For the /dashboard route, `slug` will be undefined or an empty array.

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {slug && slug.length > 0 && (
        <p>
          You have navigated to a sub-route: <strong>/{slug}</strong>
        </p>
      )}
      <p>This page handles all requests to /dashboard and any nested paths.</p>
    </div>
  )
}
