import Link from 'next/link';
import blog from '../../images/blog.png';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

type NavbarProps = {
    handleAllClick?: () => void;
    handleDevClick?: () => void;
    handleLifeClick?: () => void;
    handleSearchChange?: (e: any) => void;
    isDetail: boolean;
};

const Navbar = (props: NavbarProps) => {
    const { handleAllClick, handleDevClick, handleLifeClick, handleSearchChange, isDetail } = props;

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="flex items-center">
                        <img src={blog.src} className="h-7 w-7 mr-1" alt="サイトのアイコン画像" />
                        <Link
                            href="/"
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                        >
                            Jam Stack Blog
                        </Link>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-between">
                    {isDetail ? (
                        <Link
                            href="/"
                            className="flex items-center text-gray-900 dark:text-white hover:underline"
                        >
                            <FontAwesomeIcon className="mr-2" icon={faArrowLeft} />
                            記事一覧に戻る
                        </Link>
                    ) : (
                        <div className="flex items-center">
                            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                                <li>
                                    <button
                                        onClick={handleAllClick}
                                        className="text-gray-900 dark:text-white hover:underline"
                                        aria-current="page"
                                    >
                                        すべて
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={handleDevClick}
                                        className="text-gray-900 dark:text-white hover:underline"
                                    >
                                        開発
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLifeClick}
                                        className="text-gray-900 dark:text-white hover:underline"
                                    >
                                        生活
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            data-collapse-toggle="navbar-search"
                            aria-controls="navbar-search"
                            aria-expanded="false"
                            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <span className="sr-only">Search</span>
                        </button>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <input
                                type="text"
                                id="search-navbar"
                                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..."
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-search"
                    >
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <input
                                type="text"
                                id="search-navbar"
                                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..."
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
