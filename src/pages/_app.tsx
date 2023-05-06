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
                <title>Jam Stack Blog</title>
                <meta name="description" content="Jam Stackで作成したBlogです。" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
