import React from 'react';
import HeaderItem from '../src/components/HeaderItem';
import * as Icons from '@heroicons/react/24/solid';

const Skill: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        isRef: '',
        position: 2,
    };

    return (
        <div id={'skillRef'} ref={props.isRef} className={'pageLayout'}>
            <div className={'layoutContent'}>
                <HeaderItem
                    id={'skillPage'}
                    flag="sectionTitle"
                    title={'기술스택'}
                    Icon={Icons.WrenchIcon}
                    itemOn={false}
                />
                <p style={{ textAlign: 'center', fontSize: '30px' }}>
                    현재까지 배우고 사용 해봤던 기술목록 입니다.
                </p>
                <div className={'imageContent'}>
                    <div
                        style={{
                            borderColor: 'black',
                            border: 'solid 1px',
                            borderRadius: '10%',
                        }}
                    >
                        Front-End
                    </div>
                    {/*<div className={'skillImg'}>*/}
                    {/*    <Image src="/images/skills.png" fill alt={'skills'} />*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export interface Props {
    isRef: any;
    position: number;
}

export default Skill;
