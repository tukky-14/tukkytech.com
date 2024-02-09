import React from 'react';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import SeachForm from './SeachForm';

type NavbarProps = {
    allTags?: string[];
    handleAllClick?: () => void;
    handleTagClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isTop?: boolean;
};

const Navbar = (props: NavbarProps) => {
    const { allTags, handleAllClick, handleTagClick, handleSearchChange, isTop } = props;

    return (
        <nav className="bg-gray-200 dark:bg-gray-700">
            <div className="mx-auto flex max-w-screen-xl justify-between px-4 pt-2">
                {!isTop ? (
                    <Link className="flex items-center pb-2 text-gray-900 hover:underline dark:text-white" href="/">
                        <FontAwesomeIcon className="mr-2" icon={faArrowLeft} />
                        記事一覧に戻る
                    </Link>
                ) : (
                    <div className="flex items-center overflow-scroll">
                        <ul className="mr-6 mt-0 flex flex-row space-x-8 text-sm font-medium">
                            <li className="pb-3">
                                <button
                                    className="w-12 text-gray-900 hover:underline dark:text-white"
                                    onClick={handleAllClick}
                                >
                                    すべて
                                </button>
                            </li>
                            {allTags?.map((tag: string) => (
                                <li className="pb-3" key={tag}>
                                    <button
                                        className="text-gray-900 hover:underline dark:text-white"
                                        name={tag}
                                        onClick={handleTagClick}
                                    >
                                        {tag}
                                    </button>
                                </li>
                            ))}
                            <li className="pb-3">
                                <button
                                    className="w-12 text-gray-900 hover:underline dark:text-white"
                                    name="その他"
                                    onClick={handleTagClick}
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
