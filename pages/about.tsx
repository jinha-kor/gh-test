import React from 'react';
import HeaderItem from '../src/components/HeaderItem';
import * as Icons from '@heroicons/react/24/solid';
import * as Icon from '@heroicons/react/24/outline';

const About: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        isRef: '',
        position: 1,
    };
    
    return (
        <div id={'aboutRef'} ref={props.isRef} className={'pageLayout'}>
            <div className={'pageTitle'}>
                <HeaderItem
                    id={'aboutPage'}
                    flag="sectionTitle"
                    title={'ABOUT ME'}
                    Icon={Icons.IdentificationIcon}
                    itemOn={false}
                />
                <hr />
                <p className={'subTitle'}></p>
            </div>

            <div className={'pageContent'} style={{ paddingTop: '0px' }}>
                <div className={'about-context'}>
                    <span>
                        <HeaderItem
                            id={'about-birth'}
                            flag="onlyIcon"
                            Icon={Icon.CakeIcon}
                        />
                        1988.03.11
                    </span>
                    <span>
                        <HeaderItem
                            id={'about-birth'}
                            flag="onlyIcon"
                            Icon={Icon.CakeIcon}
                        />
                        1988.03.11
                    </span>
                    <span>
                        <HeaderItem
                            id={'about-birth'}
                            flag="onlyIcon"
                            Icon={Icon.CakeIcon}
                        />
                        1988.03.11
                    </span>
                </div>

                <div className={'about-context'}>
                    <span>
                        <HeaderItem
                            id={'about-birth'}
                            flag="onlyIcon"
                            Icon={Icon.CakeIcon}
                        />
                        1988.03.11
                    </span>
                    <span>
                        <HeaderItem
                            id={'about-birth'}
                            flag="onlyIcon"
                            Icon={Icon.CakeIcon}
                        />
                        1988.03.11
                    </span>
                    <span>
                        <HeaderItem
                            id={'about-birth'}
                            flag="onlyIcon"
                            Icon={Icon.CakeIcon}
                        />
                        1988.03.11
                    </span>
                </div>
            </div>
        </div>
    );
};

export interface Props {
    isRef: any;
    position: number;
}

export default About;
