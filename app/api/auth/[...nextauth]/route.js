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
maxAge:60*60*24*365,
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('====================================');
      SignInGoogle(account.access_token)
      

      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('====================================');
      console.log('JWT',{ token, user, account, profile, isNewUser });
      console.log('====================================');
      return token
    }
  }
}
const handler =NextAuth(authOptions)
export {handler as GET ,handler as POST}