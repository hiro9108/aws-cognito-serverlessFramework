import { useSession, signIn, signOut, getProviders } from "next-auth/client";
import axios from "axios";

export default function Home({ providers }) {
  const [session, loading] = useSession();

  const onClickGetDataHandler = async () => {
    const { data } = await axios.get("https://xxx/dev/hello", {
      headers: {
        Authorization: session.idToken,
      },
    });
    console.log(data);
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
      <main className="flex flex-col items-center justify-center h-screen">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="my-4">
            <button
              className="rounded-lg px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white"
              onClick={() => signIn(provider.id)}
            >
              {provider.name === "Cognito"
                ? "Create a New Account"
                : `Sign in with ${provider.name}`}
            </button>
          </div>
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
