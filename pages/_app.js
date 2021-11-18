import React from "react";
import 'rsuite/dist/rsuite.min.css';
import { Provider } from 'react-redux';
import { useStore } from '../state';
import Head from "next/head";


function CodingApp({ Component, pageProps }) {
  const store = useStore();
  return (
      <div>
      <Head>
          <title>Coding Interview</title>
      </Head>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
      </div>
  );
}

export default CodingApp;
