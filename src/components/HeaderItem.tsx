import React from 'react';

const HeaderItem: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        id: '',
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
                <div id={props.id} className="flex cursor-pointer transform hover:scale-105" onClick={itemClickHandler}>
                    {/*<span id={props.id} className="headerSpan" onClick={itemClickHandler} >*/}
                        <props.Icon id={props.id} className="h-20" />
                        <p id={props.id} className="text-7xl font-extrabold" >{props.title}</p>
                    {/*</span>*/}
                </div>
            ) : (
                <div id={props.id} className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white" onClick={itemClickHandler} >
                    <props.Icon id={props.id} className="h-8 mb-1 group-hover:animate-bounce"/>
                    <p id={props.id} className="opacity-0 group-hover:opacity-100 tracking-widest">{props.title}</p>
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
    onClick?: Function
}

export default HeaderItem;