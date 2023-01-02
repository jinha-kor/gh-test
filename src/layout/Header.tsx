import { useCallback } from 'react';
import { useRouter } from 'next/router';
import HeaderItem from '../components/HeaderItem'
import * as Icons from '@heroicons/react/24/outline'

const Header = () => {
    const router = useRouter();

    const iconClickHandler = useCallback((e:any) => {
        const { id } = e.target;
        let url = '/';
        if (id && id !== 'main') url += `${id}`;

        router.push(url);
    }, [router]);

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex cursor-pointer transform hover:scale-105">
                <HeaderItem id="main" flag="main" title='TEST' Icon={Icons.CodeBracketIcon} onClick={iconClickHandler} />
            </div>
            <div className="flex flex-grow justify-evenly max-w-sm">
                <HeaderItem id="cube" flag="sub" title='CUBE' Icon={Icons.CubeIcon} onClick={iconClickHandler} />
                <HeaderItem id="account" flag="sub" title='ACCOUNT' Icon={Icons.UserIcon} onClick={iconClickHandler} />
            </div>
        </header>
    )
}

export default Header;