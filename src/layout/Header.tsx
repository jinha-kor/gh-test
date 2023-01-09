import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import HeaderItem from '../components/HeaderItem';
import * as Icons from '@heroicons/react/24/outline';
import { webpack } from 'next/dist/compiled/webpack/webpack';
import * as mainActions from '../store/modules/mainStore';
import { RootState } from '../store/modules';
import javascript = webpack.javascript;

const Header = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const navNumber = useSelector(
        (state: RootState) => state?.mainStore?.navNumber,
    );

    const [isScrolling, setIsScrolling] = useState(false);

    const headerItemArr = [
        { id: 'about', title: 'ABOUT', icon: Icons.UserIcon, ordered: 1 },
        {
            id: 'skill',
            title: 'SKILL',
            icon: Icons.CodeBracketIcon,
            ordered: 2,
        },
    ];

    const iconClickHandler = useCallback(
        (e: any, data: javascript) => {
            if (e) e.preventDefault();

            const { id, ordered } = data;
            if (ordered > -1) {
                dispatch(mainActions?.setNaviNumber(ordered));
                let el = window.document.getElementById('aboutRef');
                if (ordered === 2)
                    el = window.document.getElementById('skillRef');
                const headerOffset = 110;
                const elPosition = el?.getBoundingClientRect().top;
                const offsetPosition =
                    (elPosition || 0) + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        },
        [dispatch],
    );

    const onScroll = () => {
        if (window.scrollY > 0) setIsScrolling(true);
        else setIsScrolling(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <header className={`headerLayout ${isScrolling ? 'headerColor' : ''}`}>
            <div className={'headerContent'}>
                <HeaderItem
                    id="main"
                    flag="main"
                    title="Protfolio Test"
                    Icon={Icons.HomeIcon}
                />
                <div
                    className="flex flex-grow max-w-sm"
                    style={{ float: 'right' }}
                >
                    {headerItemArr?.map((data) => {
                        return (
                            <div key={data.ordered}>
                                <HeaderItem
                                    id={data.id}
                                    flag="sub"
                                    title={data.title}
                                    Icon={data.icon}
                                    onClick={(e: any) =>
                                        iconClickHandler(e, data)
                                    }
                                    itemOn={navNumber === data.ordered}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </header>
    );
};

export interface Props {
    position: number;
    onClick?: Function;
}

export default Header;
