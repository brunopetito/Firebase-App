import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppProvider } from '../src/data/context/AppContext';
import { AuthProvider } from '../src/data/context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider tema={' '}>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}
