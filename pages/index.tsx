import { useState } from 'react';
import Head from 'next/head';

import Header from '../src/layout/Header';
import About from '../pages/about';
import Skill from '../pages/skill';
import { Observer } from '../src/components/Observer';

const Home = () => {
    const [navNumber, setNavNumber] = useState(0);
    const [aboutRef] = Observer(setNavNumber, 0);
    const [skillRef] = Observer(setNavNumber, 1);

    return (
        <div className=''>
            <Head>
                <title>Park-Jinha Test</title>
                <meta name="description" content="Port-Folio Test" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            {/* Header Nav */}
            <Header position={navNumber} />

            {/* Pages */}
            <About isRef={aboutRef} />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Skill isRef={skillRef} />
        </div>
    )
}

export default Home;