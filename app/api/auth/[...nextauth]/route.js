import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { SignInGoogle } from "@/components/useAPI/Auth";


export const authOptions  = {
  
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
  session:{
strategy:"jwt",
maxAge:10,
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('====================================');
      return true
    },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  },
  
}
const handler =NextAuth(authOptions)
export {handler as GET ,handler as POST}