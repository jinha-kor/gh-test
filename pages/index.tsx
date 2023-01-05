import { useCallback, useState } from 'react';
import Head from 'next/head';

import Header from '../src/layout/Header';
import About from '../pages/about';
import Skill from '../pages/skill';
import { Observer } from '../src/components/Observer';
import { webpack } from 'next/dist/compiled/webpack/webpack';
import javascript = webpack.javascript;

const Home = () => {
    const [navNumber, setNavNumber] = useState(0);
    const [aboutRef] = Observer(setNavNumber, 0);
    const [skillRef] = Observer(setNavNumber, 1);

    const headerIconClickHandler = useCallback((e: any, data: javascript) => {
        const { id, ordered } = data;
        if (ordered > -1) {
            setNavNumber(ordered);
            let el = aboutRef.current;
            if (ordered === 1) el = skillRef.current;
            const headerOffset = 105;
            const elPosition = el?.getBoundingClientRect().top;
            const offsetPosition =
                (elPosition || 0) + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    }, []);

    return (
        <div className="">
            <Head>
                <title>Park-Jinha Test</title>
                <meta name="description" content="Port-Folio Test" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            {/* Header Nav */}
            <Header position={navNumber} onClick={headerIconClickHandler} />

            {/* Pages */}
            <div className={'pageContent'}>
                <About isRef={aboutRef} position={navNumber} />
            </div>
            <div className={'pageContent'}>
                <Skill isRef={skillRef} position={navNumber} />
            </div>
        </div>
    );
};

export default Home;
