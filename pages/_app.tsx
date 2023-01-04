import '../styles/globals.css';
import type { AppProps } from 'next/app';
import moment from 'moment';

moment.locale('ko');

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default App;