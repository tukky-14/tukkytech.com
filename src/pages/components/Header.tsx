import Link from 'next/link';
import blog from '../../images/blog.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
            <nav className="bg-gray-100 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 pt-2 mx-auto flex justify-between">
                    {!isTop ? (
                        <Link href="/" className="pb-2 flex items-center text-gray-900 dark:text-white hover:underline">
                            <FontAwesomeIcon className="mr-2" icon={faArrowLeft} />
                            記事一覧に戻る
                        </Link>
                    ) : (
                        <div className="flex items-center overflow-scroll">
                            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                                <li className="pb-3">
                                    <button
                                        onClick={handleAllClick}
                                        className="w-12 text-gray-900 dark:text-white hover:underline"
                                    >
                                        すべて
                                    </button>
                                </li>
                                {allTags?.map((tag: string) => (
                                    <li key={tag}>
                                        <button
                                            name={tag}
                                            onClick={handleTagClick}
                                            className="text-gray-900 dark:text-white hover:underline"
                                        >
                                            {tag}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {isTop && (
                        <div className="flex sm:order-2">
                            <div className="relative hidden sm:block">
                                <div className="absolute inset-y-0 -top-2 left-0 flex items-center pl-3 pointer-events-none">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                                <input
                                    type="text"
                                    id="search-navbar"
                                    className="mb-2 block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search..."
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Header;
