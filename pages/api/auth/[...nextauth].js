import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions  = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider({
        clientId: '293882723959-qfcr11nqpe3mlimhl8m43vu88c8fbhg8.apps.googleusercontent.com',
        clientSecret: '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'
      }),
  ],
  secret
}

export default NextAuth(authOptions)