import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      domain: process.env.COGNITO_DOMAIN,
    }),
  ],
  // session: {
  //   jwt: true,
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  //   // updateAge: 24 * 60 * 60, // 24 hours
  // },
  // jwt: {
  // A secret to use for key generation - you should set this explicitly
  // Defaults to NextAuth.js secret if not explicitly specified.
  // This is used to generate the actual signingKey and produces a warning
  // message if not defined explicitly.
  // secret: "INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw",
  // You can generate a signing key using `jose newkey -s 512 -t oct -a HS512`
  // This gives you direct knowledge of the key used to sign the token so you can use it
  // to authenticate indirectly (eg. to a database driver)
  // signingKey: {"kty":"oct","kid":"Dl893BEV-iVE-x9EC52TDmlJUgGm9oZ99_ZL025Hc5Q","alg":"HS512","k":"K7QqRmJOKRK2qcCKV_pi9PSBv3XP0fpTu30TP8xn4w01xR3ZMZM38yL2DnTVPVw6e4yhdh0jtoah-i4c_pZagA"},
  // If you chose something other than the default algorithm for the signingKey (HS512)
  // you also need to configure the algorithm
  // verificationOptions: {
  //   algorithms: ["HS256"],
  // },
  // Set to true to use encryption. Defaults to false (signing only).
  // encryption: true,
  // encryptionKey: "",
  // decryptionKey = encryptionKey,
  // decryptionOptions = {
  //   algorithms: ['A256GCM']
  // },
  // You can define your own encode/decode functions for signing and encryption
  // if you want to override the default behaviour.
  // async encode({ secret, token, maxAge }) {},
  // async decode({ secret, token, maxAge }) {},
  callbacks: {
    /**
     * @param  {object} user     User object
     * @param  {object} account  Provider account
     * @param  {object} profile  Provider profile
     * @return {boolean|string}  Return `true` to allow sign in
     *                           Return `false` to deny access
     *                           Return `string` to redirect to (eg.: "/unauthorized")
     */
    // async signIn(_user, _account, _profile) {
    //   console.log("signIn!");
    //   return true;
    // },
    /**
     * @param  {string} url      URL provided as callback URL by the client
     * @param  {string} baseUrl  Default base URL of site (can be used as fallback)
     * @return {string}          URL the client will be redirect to
     */
    // async redirect(url, baseUrl) {
    //   console.log("redirect!");
    //   return url.startsWith(baseUrl) ? url : baseUrl;
    // },
    /**
     * @param  {object}  token     Decrypted JSON Web Token
     * @param  {object}  user      User object      (only available on sign in)
     * @param  {object}  account   Provider account (only available on sign in)
     * @param  {object}  profile   Provider profile (only available on sign in)
     * @param  {boolean} isNewUser True if new user (only available on sign in)
     * @return {object}            JSON Web Token that will be saved
     */
    async jwt(token, _user, account, _profile, _isNewUser) {
      console.log("jwt!");
      // Add access_token to the token right after signin
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    /**
     * @param  {object} session      Session object
     * @param  {object} token        User object    (if using database sessions)
     *                               JSON Web Token (if not using database sessions)
     * @return {object}              Session that will be returned to the client
     */
    async session(session, token) {
      console.log("session!");
      // Add property to session, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
