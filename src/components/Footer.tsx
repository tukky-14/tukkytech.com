import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
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
                            className="text-gray-500 grayscale hover:text-gray-900 dark:hover:text-white"
                            href="/words-mui"
                        >
                            <LibraryBooksIcon />
                        </Link>
                        <Link
                            className="text-gray-500 grayscale hover:text-gray-900 dark:hover:text-white"
                            href="/contact"
                        >
                            <EmailIcon />
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
