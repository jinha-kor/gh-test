import React, { useCallback } from 'react';
import Image from 'next/image';

const HeaderItem: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        id: '',
        Icon: null,
        title: '',
        flag: 'sub',
        onClick: undefined,
        itemOn: false,
    };

    const itemClickHandler = useCallback((e: any) => {
        if (e) e.preventDefault();
        if (props.onClick) props.onClick(e);
    }, []);

    const mainItemClickHandler = useCallback((e: any) => {
        if (e) e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <>
            {props.flag === 'main' ? (
                <div
                    id={props.id}
                    className={`flex cursor-pointer transform scale-105 hover:text-orange-500`}
                    style={{ float: 'left' }}
                    onClick={mainItemClickHandler}
                >
                    <div className="box">
                        <Image
                            className="profile"
                            src="/images/MOKOKO_2022_02.png"
                            width={'70'}
                            height={'70'}
                            alt={'mokoko'}
                        />
                    </div>
                    <p
                        id={props.id}
                        className="text-5xl font-extrabold"
                        style={{ paddingTop: '10px', paddingLeft: '10px' }}
                    >
                        {props.title}
                    </p>
                </div>
            ) : null}
            {props.flag === 'sub' ? (
                <div
                    id={props.id}
                    className={`flex flex-col items-center cursor-pointer group w-12 sm:w-20 font-bold ${
                        props.itemOn
                            ? 'text-orange-500'
                            : 'hover:text-orange-500'
                    }`}
                    style={{ marginLeft: '30px' }}
                    onClick={itemClickHandler}
                >
                    <props.Icon
                        id={props.id}
                        className={`h-8 mb-1 group-hover:text-orange-500`}
                    />
                    <p
                        id={props.id}
                        className={`opacity-0 opacity-100 font-bold group-hover:text-orange-500 tracking-widest`}
                    >
                        {props.title}
                    </p>
                </div>
            ) : null}
            {props.flag === 'sectionTitle' ? (
                <div id={props.id} className={`flex sectionTitle`}>
                    <props.Icon
                        id={props.id}
                        className={`h-14 group-hover:animate-bounce`}
                    />
                    <p
                        id={props.id}
                        className="text-5xl font-extrabold sectionTitle"
                    >
                        {props.title}
                    </p>
                </div>
            ) : null}
        </>
    );
};

export interface Props {
    id?: string;
    Icon: any;
    title: string;
    flag?: string;
    onClick?: Function;
    itemOn?: boolean;
}

export default HeaderItem;
