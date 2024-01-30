import Link from 'next/link';
import blog from '../images/blog.png';
import NavbarBase from './NavbarBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = {
    allTags?: string[];
    handleAllClick?: () => void;
    handleTagClick?: (e: any) => void;
    handleSearchChange?: (e: any) => void;
    isTop?: boolean;
};

const Header = (props: HeaderProps) => {
    const { allTags, handleAllClick, handleTagClick, handleSearchChange, isTop } = props;

    return (
        <>
            <header className="border-gray-200 bg-white dark:bg-gray-900 dark:text-white">
                <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
                    <button className="flex items-center" onClick={handleAllClick}>
                        <img src={blog.src} className="mr-1 h-7 w-7" alt="サイトのアイコン画像" />
                        <Link href="/" className="self-center whitespace-nowrap text-2xl font-semibold">
                            Tukky Tech Blog
                        </Link>
                    </button>
                    <Link
                        href="/links"
                        className="flex items-center pb-2 pt-2 text-xs text-gray-900 hover:text-cyan-600 dark:text-white sm:text-sm"
                    >
                        <FontAwesomeIcon className="mr-1" icon={faPaperclip} />
                        <p>開発リンク集</p>
                    </Link>
                </div>
            </header>
            <NavbarBase
                allTags={allTags}
                handleAllClick={handleAllClick}
                handleTagClick={handleTagClick}
                handleSearchChange={handleSearchChange}
                isTop={isTop}
            />
        </>
    );
};

export default Header;
