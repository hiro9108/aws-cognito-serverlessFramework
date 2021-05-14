import { useSession, signIn, signOut } from "next-auth/client";
import axios from "axios";

export default function Home() {
  const [session, loading] = useSession();

  const onClickGetDataHandler = async () => {
    const { data } = await axios.get("https://xxx", {
      headers: {
        Authorization: `Bearer xxx`,
      },
    });
  };

  if (session) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <h3>Signed in as {session.user.email} </h3>
          <div>
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-white bg-gray-400 mx-10"
              onClick={() => signOut()}
            >
              Sign out
            </button>
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-white bg-gray-400"
              onClick={onClickGetDataHandler}
            >
              Get API Data
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <br />
        <button
          type="button"
          className="rounded-lg px-4 py-2 text-white bg-gray-400"
          onClick={() => signIn()}
        >
          NextAuth Login
        </button>
      </main>
    </>
  );
}
