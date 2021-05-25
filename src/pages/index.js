import { useState, useEffect } from "react";
import axios from "axios";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";

export default function Home() {
  const [email01, setEmail01] = useState("");
  const [password01, setPassword01] = useState("");

  const [email02, setEmail02] = useState("");
  const [password02, setPassword02] = useState("");

  const poolData = {
    UserPoolId: "xxx",
    ClientId: "xxx",
  };

  const UserPool = new CognitoUserPool(poolData);

  const onSingUp = (e) => {
    e.preventDefault();

    UserPool.signUp(email01, password01, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  const onSingIn = (e) => {
    e.preventDefault();

    const user = new CognitoUser({
      Username: email02,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email02,
      Password: password02,
    });

    user.authenticateUser(authDetails, {
      onSuccess: async (result) => {
        console.log("onSuccess:", result);
        const { data } = await axios.get("https://xxx", {
          headers: {
            Authorization: result.getIdToken().getJwtToken(),
          },
        });
        console.log(data);
      },
      onFailure: (err) => {
        console.log("onFailure:", err);
      },

      newPasswordRequired: (data) => {
        console.log("newPasswordRequired", data);
      },
    });
  };

  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <form onSubmit={onSingUp} className="m-4">
          <input
            type="email"
            placeholder="email"
            value={email01}
            onChange={(e) => setEmail01(e.target.value)}
            className="bg-gray-300"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password01}
            onChange={(e) => setPassword01(e.target.value)}
            className="bg-gray-300"
          />
          <br />
          <br />
          <button
            type="submit"
            className="rounded-lg px-4 py-2 text-white bg-gray-400"
          >
            signup
          </button>
        </form>
        <form onSubmit={onSingIn}>
          <input
            type="email"
            placeholder="email"
            value={email02}
            onChange={(e) => setEmail02(e.target.value)}
            className="bg-gray-300"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password02}
            onChange={(e) => setPassword02(e.target.value)}
            className="bg-gray-300"
          />
          <br />
          <br />
          <button
            type="submit"
            className="rounded-lg px-4 py-2 text-white bg-gray-400"
          >
            signin
          </button>
        </form>
      </main>
    </>
  );
}
