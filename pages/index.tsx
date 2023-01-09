import React from 'react';
import Head from 'next/head';
import Main from './main';
import Header from '../src/layout/Header';

const Home = () => {
    return (
        <>
            <Head>
                <title>Protfolio Test</title>
                <meta name="description" content="Port-Folio Test" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            <div className="root">
                {/* Header Nav */}
                <Header />
                <Main />
            </div>
        </>
    );
};

export default Home;
