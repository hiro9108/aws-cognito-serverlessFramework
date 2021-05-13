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
    const { data } = await axios.get(
      "https://1lvrln5vkb.execute-api.ca-central-1.amazonaws.com/dev/hello",
      {
        headers: {
          Authorization: `Bearer eyJraWQiOiJ3eGFWSXlyVXdKaU9VeXZxaHRUWW92QTRLS1hNZ0VRSkNCaDhJcTRvcWhnPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiand2cWV6R3R6cWlNenU2S2hrT0R5USIsInN1YiI6IjU2M2ZjNzU3LWQ0ZjctNGI5ZS1hMmQ1LTYzMDhiMzI4ZmQ2NyIsImF1ZCI6IjNpZDg1amppZzEwMGUwMGNxZzNldmszOTgyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjIwODU1NTkyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuY2EtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2NhLWNlbnRyYWwtMV85RHdiRzJiUmkiLCJjb2duaXRvOnVzZXJuYW1lIjoiNTYzZmM3NTctZDRmNy00YjllLWEyZDUtNjMwOGIzMjhmZDY3IiwiZXhwIjoxNjIwODU5MTkyLCJpYXQiOjE2MjA4NTU1OTIsImVtYWlsIjoiaGlyb3NoaS44LmVnYXdhQGdtYWlsLmNvbSJ9.GrSbs9E_T3fHwqF4gxDVtz7BwtRAwb5pDIK08XkrRUaeAymsaBfxxr80SD_otgDiJQMogim5E8ZY236YE5cqqu-EIeynn6YxEnCCkqRXDdlrEGcHyhD6WXQ6wNvLsj6TFGpkSDpgK4NwCgAlbohCKyo62Eei2wfQhHvsQFZrgRAqbYAOOVYV1H2ayP8erfg7C3Mert0pUZgn73nOAhan4QD51Yze-Lbn8rknXPvyhJdT0iZhtfNmV1IlkGuhA_Ye2wwMnYJmIrYMMpFVr1GL-iKWsa5DJMkasa4SA_CFc4m-5OeTVfFYzlGzqXr_1Smd8UVcsfnQu2MOllEalhPAlg`,
        },
      }
    );
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
