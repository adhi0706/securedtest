"use client";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="author" content="SecureDapp" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="X-Frame-Options" content="deny" />
          <link
            rel="icon"
            type="image/x-icon"
            href="https://securedapp.io/assets/images/logo.png"
          />
          <link
            rel="apple-touch-icon"
            href="https://securedapp.io/assets/images/logo.png"
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
