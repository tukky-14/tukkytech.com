/* eslint @typescript-eslint/no-explicit-any: off */

import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import Link from 'next/link';

import useCommonInitialization from '@/hooks/use-common-initialization';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import tukky from '../../images/tukky.jpeg';

export default function Profile() {
    useCommonInitialization();

    return (
        <Container>
            <Header isTop={false} />
            <div className="mx-auto max-w-screen-xl">
                <main className="w-screen bg-white px-4 py-5 sm:max-w-screen-md">
                    <div className="mb-20 flex flex-col items-center">
                        <div className="text-2xl font-bold">プロフィール</div>
                        <div className="my-2">Webエンジニア</div>
                        <img alt="プロフィールアイコン" className="h-40 rounded-full" src={tukky.src} />
                        <div className="my-2 flex flex-col items-center">
                            <p className="font-bold">つっきー</p>
                            <p>tukky</p>
                        </div>
                        <div className="mb-6 w-full sm:w-80">
                            30歳未経験からエンジニアになりました。好きな技術はAWS、Reactです。日々の学びを記事にしています。
                        </div>
                        <div className="flex gap-8">
                            <Link
                                className="text-gray-500 grayscale hover:text-gray-900 dark:hover:text-white"
                                href="https://github.com/tukky-14"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <GitHubIcon />
                            </Link>
                            <Link
                                className="text-gray-500 grayscale hover:text-gray-900 dark:hover:text-white"
                                href="https://twitter.com/tukkyhistory"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <XIcon />
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </Container>
    );
}
