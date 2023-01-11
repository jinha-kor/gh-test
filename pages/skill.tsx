import React from 'react';
import HeaderItem from '../src/components/HeaderItem';
import SkillItemList from '../src/components/SkillItemList';
import * as Icons from '@heroicons/react/24/solid';

const Skill: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        isRef: '',
        position: 2,
    };

    const frontImgList = [
        [
            { url: '/images/skills/javascript.jpg', alt: 'javascript', idx: 0 },
            { url: '/images/skills/jquery.png', alt: 'jquery', idx: 1 },
            { url: '/images/skills/react.png', alt: 'react', idx: 2 },
            { url: '/images/skills/nextjs.png', alt: 'nextjs', idx: 3 },
            { url: '/images/skills/redux.png', alt: 'redux', idx: 4 },
        ],
        [
            { url: '/images/skills/bootstrap.png', alt: 'bootstrap', idx: 5 },
            { url: '/images/skills/typescript.png', alt: 'typescript', idx: 6 },
            {
                url: '/images/skills/tailwindcss.png',
                alt: 'tailwindcss',
                idx: 7,
            },
        ],
    ];

    const backImgList = [
        [
            { url: '/images/skills/spring.png', alt: 'spring', idx: 1 },
            { url: '/images/skills/gradle.png', alt: 'gradle', idx: 2 },
            { url: '/images/skills/kotlin.png', alt: 'kotlin', idx: 3 },
        ],
    ];

    const dbImgList = [
        [
            { url: '/images/skills/oracle.png', alt: 'oracle', idx: 0 },
            { url: '/images/skills/postgrssql.png', alt: 'postgrssql', idx: 1 },
            { url: '/images/skills/tibero.jpg', alt: 'tibero', idx: 2 },
        ],
    ];

    const vccImgList = [
        [
            { url: '/images/skills/jira.png', alt: 'jira', idx: 0 },
            { url: '/images/skills/confluence.jpg', alt: 'confluence', idx: 1 },
            { url: '/images/skills/git.png', alt: 'git', idx: 2 },
            { url: '/images/skills/github.png', alt: 'github', idx: 3 },
        ],
    ];

    const toolImgList = [
        [
            { url: '/images/skills/vscode.png', alt: 'vscode', idx: 0 },
            { url: '/images/skills/eclipse.jpg', alt: 'eclipse', idx: 1 },
            { url: '/images/skills/intellij.png', alt: 'intellij', idx: 2 },
            { url: '/images/skills/nexacro.jpg', alt: 'nexacro', idx: 3 },
        ],
    ];

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
                <SkillItemList title={'Front-End'} imgInfo={frontImgList} />
                <br />
                <SkillItemList title={'Back-End'} imgInfo={backImgList} />
                <br />
                <SkillItemList title={'DataBase'} imgInfo={dbImgList} />
                <br />
                <SkillItemList
                    title={'VC & Cooperation'}
                    imgInfo={vccImgList}
                />
                <br />
                <SkillItemList title={'Tool'} imgInfo={toolImgList} />
            </div>
        </div>
    );
};

export interface Props {
    isRef: any;
    position: number;
}

export default Skill;
