// import React from "react";
// import {
//   providers,
//   signIn,
//   getSession,
//   getCsrfToken,
//   csrfToken,
// } from "next-auth/client";

// const LoginPage = ({ providers, csrfToken }) => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>
//         <form
//           className="mt-8 space-y-6"
//           action="/api/auth/signin/email"
//           method="POST"
//           defaultValue={csrfToken}
//         >
//           <input type="hidden" name="remember" defaultValue="true" />
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Sign In
//             </button>
//             <div className="text-sm">
//               <a
//                 href="#"
//                 className="font-medium text-indigo-600 hover:text-indigo-500"
//               >
//                 Forget Password?
//               </a>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// // export async function getServerSideProps(context) {
// //   const { req, res } = context;
// //   const session = await getSession({ req });

// //   if (session && res && session.accessToken) {
// //     res.witeHead(302, {
// //       Location: "/",
// //     });
// //     res.end();
// //     return;
// //   }
// //   return {
// //     props: {
// //       session: null,
// //       providers: await providers(context),
// //       csrfToken: await csrfToken(context),
// //     },
// //   };
// //   // const csrfToken = await getCsrfToken(context);
// //   // return {
// //   //   props: { csrfToken },
// //   // };
// // }
