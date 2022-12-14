import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => (
    <div >
      <Head>
          <title>Head</title>
      </Head>
      <Component {...pageProps} />
    </div>
)

export default MyApp
