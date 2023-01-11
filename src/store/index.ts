import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import reducer from './modules';

const makeStore = (context: any) =>
    configureStore({
        reducer,
        devTools: process.env.NODE_ENV !== 'production',
    });

const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== 'production',
});

export default wrapper;
