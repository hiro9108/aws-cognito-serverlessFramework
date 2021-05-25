import axios from "axios";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

export default function AmplifyAuth() {
  const onClickGetDataHandler = async () => {};

  const onSignInHandler = async () => {
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  // return (
  //   <>
  //     <div className="flex justify-center items-center h-screen">
  //       <h3>Signed in as {session.user.email} </h3>
  //       <div>
  //         <button
  //           type="button"
  //           className="rounded-lg px-4 py-2 text-white bg-gray-400 mx-10"
  //           onClick={null}
  //         >
  //           Sign out
  //         </button>
  //         <button
  //           type="button"
  //           className="rounded-lg px-4 py-2 text-white bg-gray-400"
  //           onClick={onClickGetDataHandler}
  //         >
  //           Get API Data
  //         </button>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <br />
        <button
          type="button"
          className="rounded-lg px-4 py-2 text-white bg-gray-400"
          onClick={onSignInHandler}
        >
          Amplify Login
        </button>
      </main>
    </>
  );
}
