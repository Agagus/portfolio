import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Trocchi&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Glass+Antiqua&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Glass+Antiqua&family=Nunito:wght@300;400&display=swap"
        rel="stylesheet"
      ></link>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
