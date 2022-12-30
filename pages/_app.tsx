import '../styles/globals.css'
import type { AppProps } from 'next/app'
import moment from 'moment';
import NavBar from "../src/layout/NavBar";

moment.locale('ko');

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <NavBar/>
        <Component {...pageProps} />
      </>
  )
}
