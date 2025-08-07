// app/api/auth/[...nextauth]/route.ts (for App Router)
import supabase from '@/lib/supabase'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
          scope:
            'https://www.googleapis.com/auth/spreadsheets ' +
            'https://www.googleapis.com/auth/drive.file ' +
            'https://www.googleapis.com/auth/script.projects ' +
            'https://www.googleapis.com/auth/script.external_request ' +
            'openid',
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // 1. Initial sign-in or linking an account
      console.log('Received account: ', account)
      if (account && user) {
        // Find or create the user in your 'users' table
        let { data: dbUser, error: userError } = await supabase
          .from('users')
          .select('id')
          .eq('email', user.email)
          .single()

        console.log('User found is: ', dbUser?.id)
        let userId = process.env.DEFAULT_USER

        // Store the OAuth tokens in the 'oauth_accounts' table
        const { data, error } = await supabase.from('oauth_accounts').upsert({
          user_id: userId,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          access_token: account.access_token,
          refresh_token: account?.refresh_token,
          expires_at: account.expires_at,
        })

        if (error) {
          console.error('Error storing OAuth tokens:', error)
        }

        // Pass the user ID to the token for later use
        token.userId = userId

        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
        }
      }

      // 2. Subsequent sessions, token is already available
      return token
    },
    async session({ session, token }) {
      // Add the tokens to the session for server-side access
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
