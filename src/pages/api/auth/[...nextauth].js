import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      domain: process.env.COGNITO_DOMAIN,
    }),

    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    /*
      Same as Google
    */
    // Providers.Facebook({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),

    // Providers.LINE({
    //   clientId: process.env.LINE_CLIENT_ID,
    //   clientSecret: process.env.LINE_CLIENT_SECRET,
    // }),

    // Providers.Kakao({
    //   clientId: process.env.KAKAO_CLIENT_ID,
    //   clientSecret: process.env.KAKAO_CLIENT_SECRET,
    // }),
  ],

  callbacks: {
    jwt: async (token, _user, account, _profile, _isNewUser) => {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
        token.idToken = account.idToken;
      }
      return token;
    },

    async session(session, token) {
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;

      return session;
    },
  },

  // pages: {
  //   signIn: "/login",
  // },
});
