"use client";

import Document, { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

// Functional Component
const MyDocument = () => {
  const path = usePathname();
  const url = "https://securedapp.io/" + path;

  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="SecureDapp" />
        <meta name="theme-color" content="#000000" />
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
};

export default MyDocument;
