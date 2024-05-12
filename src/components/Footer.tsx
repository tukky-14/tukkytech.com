import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="gap-4 text-sm text-gray-500 sm:flex sm:text-center dark:text-gray-400">
                        <div className="mb-4 sm:mb-0">
                            © 2023{' '}
                            <Link
                                className="hover:underline"
                                href="https://tukky-14.github.io/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                tukky
                            </Link>
                            . All Rights Reserved.
                        </div>
                        <Link className="hover:underline" href="/privacy-policy">
                            プライバシーポリシー
                        </Link>
                    </div>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Link
                            className="flex items-center pb-2 pt-2 text-xs text-gray-500 hover:text-cyan-600 sm:text-sm dark:text-gray-400"
                            href="/words-mui"
                        >
                            <LibraryBooksIcon className="mr-1" fontSize="small" />
                            <p>IT用語解説</p>
                        </Link>
                        <Link
                            className="flex items-center pb-2 pt-2 text-xs text-gray-500 hover:text-cyan-600 sm:text-sm dark:text-gray-400"
                            href="/links"
                        >
                            <FontAwesomeIcon className="mr-1" icon={faPaperclip} />
                            <p>開発リンク集</p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
