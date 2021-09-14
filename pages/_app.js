import 'tailwindcss/tailwind.css';
import Navigator from '../components/Navigator';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-red-100">
      <Head>
        <title>self introducint blog</title>
        <meta charSet="utf-8" />
      </Head>
      <div>
        <Navigator />
      </div>
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp
