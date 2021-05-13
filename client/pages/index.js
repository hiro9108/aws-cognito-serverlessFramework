import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/client";
import axios from "axios";
import styles from "../styles/Home.module.css";

// import jwt from "next-auth/jwt";

export default function Home() {
  const [session, loading] = useSession();
  // const secret = process.env.NEXT_PUBLIC_JWT_SECRET;

  // const onClickHandler = async () => {
  //   const token = await jwt.getToken({ req, secret });
  //   console.log("JSON Web Token", token);
  //   res.end();
  // };

  const onClickGetDataHandler = async () => {
    const { data } = await axios.get("https://xxx", {
      headers: {
        Authorization: `Bearer `,
      },
    });
    console.log(data);
  };

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <br />
        <button onClick={onClickGetDataHandler}>Get API Data</button>
      </>
    );
  }
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <button
            type="button"
            className="rounded-lg px-4 py-2 text-white bg-gray-400"
            onClick={null}
          >
            Sign In
          </button>
          <br />
          <button onClick={() => signIn()}>NextAuth</button>
        </main>
      </div>
    </>
  );
}
