import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import { Observer } from '../src/components/Observer';
import { RootState } from '../src/store/modules';

import About from './about';
import Skill from './skill';
import * as mainActions from '../src/store/modules/mainStore';

const Main = () => {
    const dispatch = useDispatch();
    const navNumber = useSelector(
        (state: RootState) => state?.mainStore?.navNumber,
    );
    const [aboutRef] = Observer(mainActions?.setNaviNumber, 1);
    const [skillRef] = Observer(mainActions?.setNaviNumber, 2);

    return (
        <>
            <div className={'mainTopContent'}>
                <Image
                    src="/images/coding-or-hacker-background-vector.jpg"
                    fill
                    alt={'mokoko'}
                />
            </div>

            {/* Pages */}
            <div className={'pageContent'}>
                <About isRef={aboutRef} position={navNumber} />
            </div>
            <div className={'pageContent'}>
                <Skill isRef={skillRef} position={navNumber} />
            </div>
        </>
    );
};

export default Main;
