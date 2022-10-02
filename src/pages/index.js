import Home from "./home";
import Head from 'next/head'

export default function Index() {
  return (
    <>
       <Head>
        <title>Portfolio | Dharmendra Awasthi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Home />
    </>
  );
}
