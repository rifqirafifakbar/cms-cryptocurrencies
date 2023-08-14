/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.css";
import "../src/styles/main.scss";
import Head from "next/head";
import "primereact/resources/primereact.min.css";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
