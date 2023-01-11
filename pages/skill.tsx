import React, { useState } from 'react';
import HeaderItem from '../src/components/HeaderItem';
import SkillItemList from '../src/components/SkillItemList';
import * as Icons from '@heroicons/react/24/solid';
import * as ImgList from '../public/skillMockup';

const Skill: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        isRef: '',
        position: 2,
    };

    const [formData, setFormData] = useState([
        { title: 'Front-End', data: ImgList.frontImgList },
        { title: 'Back-End', data: ImgList.backImgList },
        { title: 'DataBase', data: ImgList.dbImgList },
        { title: 'VC & Cooperation', data: ImgList.vccImgList },
        { title: 'Tool', data: ImgList.toolImgList },
    ]);

    return (
        <div
            id={'skillRef'}
            ref={props.isRef}
            className={'pageLayout'}
            style={{ backgroundColor: '#f7d794' }}
        >
            <div className={'pageTitle'}>
                <HeaderItem
                    id={'skillPage'}
                    flag="sectionTitle"
                    title={'SKILL'}
                    Icon={Icons.WrenchIcon}
                    itemOn={false}
                />
                <hr style={{ width: '230px' }} />
                <p className={'subTitle'}>
                    현재까지 배우고 사용 해봤던 기술목록 입니다.
                </p>
            </div>

            <div className={'pageContent'}>
                {formData.map((obj, idx) => {
                    const lastData = formData.length - 1 === idx;
                    return (
                        <div
                            key={idx}
                            style={{ marginBottom: !lastData ? '30px' : '0px' }}
                        >
                            <SkillItemList
                                title={obj.title}
                                imgInfo={obj.data}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export interface Props {
    isRef: any;
    position: number;
}

export default Skill;
