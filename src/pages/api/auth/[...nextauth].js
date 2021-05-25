// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// export default NextAuth({
//   providers: [
//     Providers.Cognito({
//       clientId: process.env.COGNITO_CLIENT_ID,
//       clientSecret: process.env.COGNITO_CLIENT_SECRET,
//       domain: process.env.COGNITO_DOMAIN,
//     }),
//   ],

//   pages: {
//     signIn: "/auth/signin",
//     signOut: "/auth/signout",
//     error: "/auth/error", // Error code passed in query string as ?error=
//     verifyRequest: "/auth/verify-request", // (used for check email message)
//     newUser: null, // If set, new users will be directed here on first sign in
//   },

//   callbacks: {
//     async jwt(token, _user, account, _profile, _isNewUser) {
//       if (account?.accessToken) {
//         token.accessToken = account.accessToken;
//       }
//       return token;
//     },

//     async session(session, token) {
//       session.accessToken = token.accessToken;
//       return session;
//     },
//   },
// });
