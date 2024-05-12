import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

import { signOut, useAuth } from '@/hooks/use-auth';

import blog from '../images/blog.png';

import NavbarBase from './NavbarBase';

type HeaderProps = {
    allTags?: string[];
    handleAllClick?: () => void;
    handleTagClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isTop?: boolean;
};

const Header = (props: HeaderProps) => {
    const { allTags, handleAllClick, handleTagClick, handleSearchChange, isTop } = props;
    const { isAuthenticated } = useAuth();

    /**
     * ログアウト処理
     */
    const handleLogoutClick = async () => {
        await signOut();
        location.reload();
    };

    return (
        <>
            <header className="realative border-gray-200 bg-white dark:bg-gray-900 dark:text-white">
                <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
                    <button className="flex items-center" onClick={handleAllClick}>
                        <img alt="サイトのアイコン画像" className="mr-1 h-7 w-7" src={blog.src} />
                        <Link className="self-center whitespace-nowrap text-2xl font-semibold" href="/">
                            Tukky Tech Blog
                        </Link>
                    </button>
                    <div className="flex text-sm">
                        <div className="flex gap-4">
                            <Link
                                className="flex items-center gap-0.5 text-gray-500 grayscale hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                href="/profile"
                            >
                                <AccountCircleIcon />
                                <p>プロフィール</p>
                            </Link>
                            <Link
                                className="flex items-center gap-0.5 text-gray-500 grayscale hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                href="/contact"
                            >
                                <EmailIcon />
                                <p>お問い合わせ</p>
                            </Link>
                        </div>

                        {/* ログアウト */}
                        {isAuthenticated && (
                            <button className="ml-2" onClick={handleLogoutClick}>
                                <FontAwesomeIcon className="text-cyan-600" icon={faArrowRightFromBracket} />
                            </button>
                        )}
                    </div>
                </div>
            </header>
            <NavbarBase
                allTags={allTags}
                handleAllClick={handleAllClick}
                handleSearchChange={handleSearchChange}
                handleTagClick={handleTagClick}
                isTop={isTop}
            />
        </>
    );
};

export default Header;
