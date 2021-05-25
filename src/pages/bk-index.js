// import { useSession, signIn, signOut } from "next-auth/client";
// import axios from "axios";

// export default function Home() {
//   const [session, loading] = useSession();

//   const onClickGetDataHandler = async () => {
//     const { data } = await axios.get(
//       "https://rokchbq1r6.execute-api.ca-central-1.amazonaws.com/dev/second",
//       {
//         headers: {
//           Authorization: `Bearer eyJraWQiOiJZc0JCTEd6RGlKY0kyWWNkWXRzWTFDb3dBN21ibmdBcGc5QzJhVkJiTFwvWT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiRVd0QTNMZHhhUDlURXQyV3BmYzM3QSIsInN1YiI6ImU2NTA4NjkzLWM0MmQtNDQ2YS04YjdiLTA3OWNhMGEyYjViNiIsImF1ZCI6InVyaHJwZm83azVkNjRxN3J1c3VzcjVrazAiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MjEzMDc2OTYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5jYS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvY2EtY2VudHJhbC0xX0Y0bUprTEk5RiIsImNvZ25pdG86dXNlcm5hbWUiOiJlNjUwODY5My1jNDJkLTQ0NmEtOGI3Yi0wNzljYTBhMmI1YjYiLCJleHAiOjE2MjEzMTEyOTYsImlhdCI6MTYyMTMwNzY5NiwiZW1haWwiOiJoaXJvc2hpLjguZWdhd2FAZ21haWwuY29tIn0.EE3RYf6LWh8R7LLMxWfJ0VKUgH_2QyL2bBrDQx-yhemb0zaUhtP2ygKRJrVWstfiH4RrY2fPQQGiG4NfpzR9UIoMnYqjQddZhE8ONkyMsMLe0NthuabTTCR9-9IgNoGhtN76KunF5YqQ_jwL44iNcpEOWaMen_ClQxaoSB9QewjbP1Kd2SuoXWDJFpTsqK5XIhEMZnfnmvmbDz2sm63mHol9-w836FpKR3O9RyfkvRL46cQZmZm3OBmSz21HXuqIEP6dPb1kJ42jTgRgqB9kLtAperBLSh1xgihU0enZsLkPJBmKK13ZpngksJKf4aJP804FfXBY222o8INk-eFCbg`,
//         },
//       }
//     );
//     console.log(data);
//   };

//   if (session) {
//     return (
//       <>
//         <div className="flex justify-center items-center h-screen">
//           <h3>Signed in as {session.user.email} </h3>
//           <div>
//             <button
//               type="button"
//               className="rounded-lg px-4 py-2 text-white bg-gray-400 mx-10"
//               onClick={() => signOut()}
//             >
//               Sign out
//             </button>
//             <button
//               type="button"
//               className="rounded-lg px-4 py-2 text-white bg-gray-400"
//               onClick={onClickGetDataHandler}
//             >
//               Get API Data
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }
//   return (
//     <>
//       <main className="flex justify-center items-center h-screen">
//         <br />
//         <button
//           type="button"
//           className="rounded-lg px-4 py-2 text-white bg-gray-400"
//           onClick={() => signIn()}
//         >
//           NextAuth Login
//         </button>
//       </main>
//     </>
//   );
// }
