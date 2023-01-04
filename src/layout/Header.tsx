import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import HeaderItem from '../components/HeaderItem'
import * as Icons from '@heroicons/react/24/outline'

const Header: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        position: 0
    };

    const headerItemArr = [
        { id: 'about', title: 'ABOUT', icon: Icons.UserIcon, ordered: 0 },
        { id: 'skill', title: 'SKILL', icon: Icons.CodeBracketIcon, ordered: 1 }
    ]

    const router = useRouter();

    const iconClickHandler = useCallback((e:any) => {
        const { id } = e.target.parentNode;

        if (id) {
            let url = '/';
            if (id !== 'main') url += `${id}`;
            router.push(url);
        }
    }, [router]);

    return (
            <header className="flex flex-col sm:flex-row justify-between items-center">
                <HeaderItem id="main" flag="main" title='TEST' Icon={Icons.HomeIcon} onClick={iconClickHandler} />
                <div className="flex flex-grow justify-evenly max-w-sm">
                    {headerItemArr?.map((hd) => {
                        return (
                            <div key={hd.ordered}>
                                <HeaderItem id={hd.id} flag="sub" title={hd.title} Icon={hd.icon} onClick={iconClickHandler} itemOn={props.position === hd.ordered}/>
                            </div>
                        )
                    })}
                </div>
            </header>
    )
}

export interface Props {
    position: number
}

export default Header;