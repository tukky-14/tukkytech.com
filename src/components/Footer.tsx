import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
                    </span>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Link
                            className="text-gray-500 grayscale hover:text-gray-900 dark:hover:text-white"
                            href="/words-mui"
                        >
                            <LibraryBooksIcon />
                        </Link>

                        <Link
                            className="text-gray-500 grayscale hover:text-gray-900 dark:hover:text-white"
                            href="/profile"
                        >
                            <AccountCircleIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
