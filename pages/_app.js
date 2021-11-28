import "../styles/index.scss";

import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hector Lopez</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
