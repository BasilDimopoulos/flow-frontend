// components/ConnectGoogleSheetsButton.tsx
'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function ConnectGoogleSheetsButton() {
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);

    // Initiates the OAuth flow with the 'google' provider
    await signIn('google', {
      callbackUrl: `${window.location.origin}/dashboard/integrations`,
      // You may need to add extra parameters for custom scopes
    });

    setLoading(false);
  };

  return (
    <button
      onClick={handleConnect}
      disabled={loading}
      className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-blue-400"
    >
      {loading ? 'Connecting...' : 'Connect Google Sheets'}
    </button>
  );
}