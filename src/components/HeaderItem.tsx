import React from 'react';

const HeaderItem: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        Icon: null,
        title: '',
        flag: 'sub',
        onClick: undefined
    };

    const itemClickHandler = (e:any) => {
        if (e) e.preventDefault();
        if (props.onClick) props.onClick(e);
    }

    return (
        <>
            {props.flag === 'main' ? (
                <span className="headerSpan" onClick={itemClickHandler} >
                    <props.Icon className="h-20" />
                    <p className="text-7xl font-extrabold" >{props.title}</p>
                </span>
            ) : (
                <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
                    <props.Icon className="h-8 mb-1 group-hover:animate-bounce"/>
                    <p className="opacity-0 group-hover:opacity-100 tracking-widest">{props.title}</p>
                </div>
            )}
        </>
    )
};

export interface Props {
    Icon: any,
    title: string,
    flag?: string,
    onClick?: Function
}

export default HeaderItem;