import Link from 'next/link';
import blog from '../../images/blog.png';
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
            <header className="bg-white border-gray-200 dark:bg-gray-900 dark:text-white">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
                    <button className="flex items-center" onClick={handleAllClick}>
                        <img src={blog.src} className="h-7 w-7 mr-1" alt="サイトのアイコン画像" />
                        <Link href="/" className="self-center text-2xl font-semibold whitespace-nowrap">
                            Tukky Tech Blog
                        </Link>
                    </button>
                    <Link
                        href="/devlinks"
                        className="hidden pt-2 pb-2 flex items-center text-xs sm:text-sm text-gray-900 dark:text-white hover:text-cyan-600"
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
