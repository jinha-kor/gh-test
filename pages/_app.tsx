import type { AppProps } from 'next/app';
import React from 'react';
import moment from 'moment';
import { Provider } from 'react-redux';

import wrapper from '../src/store/index';
import '../styles/globals.css';

moment.locale('ko');

const App = ({ Component, ...rest }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <Component {...props.pageProps} />;
        </Provider>
    );
};

export default App;
