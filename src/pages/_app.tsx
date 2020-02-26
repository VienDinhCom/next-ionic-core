import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ion-app>
      <Head>
        <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
        <script noModule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
      </Head>
      <Component {...pageProps} />
    </ion-app>
  );
}

export default MyApp;
