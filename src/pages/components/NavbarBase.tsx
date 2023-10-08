import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SeachForm from './SeachForm';

type NavbarProps = {
    allTags?: string[];
    handleAllClick?: () => void;
    handleTagClick?: (e: any) => void;
    handleSearchChange?: (e: any) => void;
    isTop?: boolean;
};

const Navbar = (props: NavbarProps) => {
    const { allTags, handleAllClick, handleTagClick, handleSearchChange, isTop } = props;

    return (
        <nav className="bg-gray-200 dark:bg-gray-700">
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
                                <li className="pb-3" key={tag}>
                                    <button
                                        name={tag}
                                        onClick={handleTagClick}
                                        className="text-gray-900 dark:text-white hover:underline"
                                    >
                                        {tag}
                                    </button>
                                </li>
                            ))}
                            <li className="pb-3">
                                <button
                                    name="その他"
                                    onClick={handleTagClick}
                                    className="w-12 text-gray-900 dark:text-white hover:underline"
                                >
                                    その他
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
                {isTop && <SeachForm handleSearchChange={handleSearchChange} />}
            </div>
        </nav>
    );
};

export default Navbar;
