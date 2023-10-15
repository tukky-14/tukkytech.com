import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

const Footer = () => {
    return (
        <footer className="dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{' '}
                        <a
                            href="https://tukky-14.github.io/"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            tukky
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <Link
                            href="/words"
                            className="grayscale text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <EnergySavingsLeafIcon />
                        </Link>
                        <a
                            href="https://twitter.com/tukkyhistory"
                            className="grayscale text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            href="https://github.com/tukky-14"
                            className="grayscale text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            target="_blank"
                            rel="noreferrer"
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
