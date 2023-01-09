import type { AppProps } from 'next/app';
import moment from 'moment';
import React from 'react';
import { wrapper } from '../src/store';
import '../styles/globals.css';
import { createStore } from 'redux';
import rootReducer from '../src/store/modules';
import { Provider } from 'react-redux';

moment.locale('ko');

const store = createStore(rootReducer);
const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />;
        </Provider>
    );
};

export default wrapper.withRedux(App);
