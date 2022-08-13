import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { MobileMenuContextProvider } from '../contexts/MobileMenuContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileMenuContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MobileMenuContextProvider>
  )
}

export default MyApp
