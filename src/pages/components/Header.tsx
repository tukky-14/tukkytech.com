import Link from 'next/link';
import blog from '../../images/blog.png';
import NavbarBase from './NavbarBase';

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
            <header className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <button className="flex items-center" onClick={handleAllClick}>
                        <img src={blog.src} className="h-7 w-7 mr-1" alt="サイトのアイコン画像" />
                        <Link href="/" className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Tukky Tech Blog
                        </Link>
                    </button>
                </div>
            </header>
            <NavbarBase
                allTags={allTags}
                handleAllClick={handleAllClick}
                handleTagClick={handleTagClick}
                handleSearchChange={handleSearchChange}
                isTop
            />
        </>
    );
};

export default Header;
