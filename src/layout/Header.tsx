import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import HeaderItem from '../components/HeaderItem';
import * as Icons from '@heroicons/react/24/outline';
import { webpack } from 'next/dist/compiled/webpack/webpack';
import javascript = webpack.javascript;

const Header: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        position: 0,
        onClick: undefined,
    };

    const headerItemArr = [
        { id: 'about', title: 'ABOUT', icon: Icons.UserIcon, ordered: 0 },
        {
            id: 'skill',
            title: 'SKILL',
            icon: Icons.CodeBracketIcon,
            ordered: 1,
        },
    ];

    const router = useRouter();

    const iconClickHandler = useCallback((e: any, data: javascript) => {
        if (e) e.preventDefault();
        if (props.onClick) props.onClick(e, data);
    }, []);

    return (
        <header className="flex flex-col sm:flex-row justify-between items-center">
            <HeaderItem
                id="main"
                flag="main"
                title="TEST"
                Icon={Icons.HomeIcon}
                onClick={iconClickHandler}
            />
            <div className="flex flex-grow justify-evenly max-w-sm">
                {headerItemArr?.map((data) => {
                    return (
                        <div key={data.ordered}>
                            <HeaderItem
                                id={data.id}
                                flag="sub"
                                title={data.title}
                                Icon={data.icon}
                                onClick={(e: any) => iconClickHandler(e, data)}
                                itemOn={props.position === data.ordered}
                            />
                        </div>
                    );
                })}
            </div>
        </header>
    );
};

export interface Props {
    position: number;
    onClick?: Function;
}

export default Header;
