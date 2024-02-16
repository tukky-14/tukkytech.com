import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{' '}
                        <a
                            className="hover:underline"
                            href="https://tukky-14.github.io/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            tukky
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <Link
                            className="grayscale text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            href="/words"
                        >
                            <EnergySavingsLeafIcon />
                        </Link>
                        <a
                            className="grayscale text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            href="https://twitter.com/tukkyhistory"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            className="grayscale text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            href="https://github.com/tukky-14"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <GitHubIcon />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;