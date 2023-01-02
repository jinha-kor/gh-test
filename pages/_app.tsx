import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../src/layout/Header";
import moment from 'moment';

moment.locale('ko');

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Header/>
            <Component {...pageProps} />
        </>
    )
}

export default App;