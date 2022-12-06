import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '400', '700'],
  style: ['normal'],
});

const App = ({ Component, pageProps }: AppProps) => (
  <main className={`${inter.variable} antialiased font-sans`}>
    <Component {...pageProps} />
  </main>
);

export default App;
