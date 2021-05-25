// import React from "react";
// import { getCsrfToken } from "next-auth/client";

// export default function SignIn({ csrfToken }) {
//   return (
//     <form
//       className="flex flex-col justify-center items-center h-screen"
//       method="post"
//       action="/api/auth/signin/email"
//     >
//       <input
//         className="w-80 border-4 m-2"
//         name="csrfToken"
//         type="hidden"
//         defaultValue={csrfToken}
//       />
//       <label>
//         Email address
//         <input
//           className=" border-4 m-2 py-1 px-4 rounded-lg transform duration-300 ease-in-out hover:bg-red-300"
//           type="email"
//           id="email"
//           name="email"
//         />
//       </label>
//       <button type="submit">Sign in with Email</button>
//     </form>
//   );
// }

// export async function getServerSideProps(context) {
//   const csrfToken = await getCsrfToken(context);
//   return {
//     props: { csrfToken },
//   };
// }
