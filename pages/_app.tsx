import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '../src/data/context/AppContext'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <AppProvider tema={' '}>
      <Component {...pageProps} />

    </AppProvider>
  ) 
}
