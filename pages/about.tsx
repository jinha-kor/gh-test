import React from 'react';
import Image from 'next/image';
import HeaderItem from '../src/components/HeaderItem';
import * as Icons from '@heroicons/react/24/solid';

const About: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        isRef: '',
        position: 0,
    };

    return (
        <div ref={props.isRef} className={'pageLayout'}>
            <HeaderItem
                id={'aboutPage'}
                flag="sectionTitle"
                title={'ABOUT ME'}
                Icon={Icons.IdentificationIcon}
                itemOn={false}
            />
            <div className={'imgBox'}>
                <Image src="/images/MOKOKO_2022_01.png" fill alt={'mokoko'} />
            </div>
        </div>
    );
};

export interface Props {
    isRef: any;
    position: number;
}

export default About;
