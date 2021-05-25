import "../styles/globals.css";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
    // <Provider session={pageProps.session}>
    //   <Component {...pageProps} />
    // </Provider>
  );
}

export default MyApp;
