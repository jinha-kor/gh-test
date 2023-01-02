import { useCallback } from 'react';
import { useRouter } from 'next/router';
import HeaderItem from '../components/HeaderItem'
import * as Icons from '@heroicons/react/24/outline'

const Header = () => {
    const router = useRouter();

    const iconClickHandler = useCallback((e:any) => {
        console.log(e);
    }, []);

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex cursor-pointer transform hover:scale-105">
                <HeaderItem flag="main" title='TEST' Icon={Icons.CodeBracketIcon} />
            </div>
            <div className="flex flex-grow justify-evenly max-w-sm">
                <HeaderItem flag="sub" title='CUBE' Icon={Icons.CubeIcon} onClick={iconClickHandler} />
                <HeaderItem flag="sub" title='ACCOUNT' Icon={Icons.UserIcon} onClick={iconClickHandler} />
            </div>
        </header>
    )
}

export default Header;