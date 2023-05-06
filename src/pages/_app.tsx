import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Tukky Tech Blog</title>
                <meta name="description" content="Jam Stackで作成したBlogです。" />
                <meta property="og:title" content="Tukky Tech Blog" />
                <meta property="og:description" content="Jam Stackで作成したBlogです。" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="" />
                <meta property="og:image" content="" />
                <meta property="og:locale" content="ja_JP" />
                <meta property="og:site_name" content="Tukky Tech Blog" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
