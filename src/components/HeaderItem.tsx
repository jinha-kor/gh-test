import React from 'react';
import Image from 'next/image';

const HeaderItem: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        id: '',
        Icon: null,
        title: '',
        flag: 'sub',
        onClick: undefined,
        itemOn: false
    };

    const itemClickHandler = (e:any) => {
        if (e) e.preventDefault();
        if (props.onClick) props.onClick(e);
    }

    return (
        <>
            {props.flag === 'main' ? (
                <div id={props.id} className={`flex cursor-pointer transform scale-105`} onClick={itemClickHandler}>
                    <div className="box">
                        <Image className="profile" src="/images/MOKOKO_2022_02.png" width={'70'} height={'70'} alt={'mokoko'}/>
                    </div>
                    <p id={props.id} className="text-7xl font-extrabold" >{props.title}</p>
                </div>
            ) : (
                <div id={props.id} className={`flex flex-col items-center cursor-pointer group w-12 sm:w-20 ${props.itemOn ? 'text-white' : 'hover:text-white'}`} onClick={itemClickHandler} >
                    <props.Icon id={props.id} className={`h-8 mb-1 ${props.itemOn ? 'animate-bounce' : 'group-hover:animate-bounce'}`}/>
                    <p id={props.id} className={`opacity-0 ${props.itemOn ? 'opacity-100' : 'group-hover:opacity-100'} tracking-widest`}>{props.title}</p>
                </div>
            )}
        </>
    )
};

export interface Props {
    id?: string,
    Icon: any,
    title: string,
    flag?: string,
    onClick?: Function,
    itemOn?: boolean
}

export default HeaderItem;