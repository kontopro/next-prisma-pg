import { SessionProvider } from "next-auth/react"
import Layout from "../components/Layout"
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
   )
}

export default MyApp