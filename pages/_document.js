import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Hector Lopez Portfolio" />
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i"
            type="text/css"
            media="all"
          />
          <link
            href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/aos@next/dist/aos.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
