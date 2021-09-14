import 'tailwindcss/tailwind.css';
import Navigator from '../components/Navigator';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>self introducint blog</title>
      <meta charSet="utf-8" />
    </Head>
    <div>
      <Navigator />
    </div>
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
