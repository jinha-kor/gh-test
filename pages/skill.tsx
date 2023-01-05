import React from 'react';
import Image from 'next/image';
import HeaderItem from '../src/components/HeaderItem';
import * as Icons from '@heroicons/react/24/outline';

const Skill: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        isRef: '',
        position: 1,
    };

    return (
        <div ref={props.isRef} className={'pageLayout'}>
            <HeaderItem
                id={'skillPage'}
                flag="sectionTitle"
                title={'기술스택'}
                Icon={Icons.LinkIcon}
                itemOn={props.position === 1}
            />
            <div className={'imgBox'}>
                <Image src="/images/MOKOKO_2022_09.png" fill alt={'mokoko'} />
            </div>
        </div>
    );
};

export interface Props {
    isRef: any;
    position: number;
}

export default Skill;