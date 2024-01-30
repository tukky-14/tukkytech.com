import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ja">
            <Head>
                <meta name="description" content="Jam Stackで作成した技術ブログです。" />
                <meta property="og:title" content="Tukky Tech Blog" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tukkytech.com/" />
                <meta property="og:image" content="/tukkytech-top.png" />
                <meta property="og:site_name" content="Tukky Tech Blog" />
                <meta property="og:locale" content="ja_JP" />
                <meta property="og:description" content="Jam Stackで作成した技術ブログです。" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <link rel="icon" href="/icon_16.png" />
                <link rel="apple-touch-icon" sizes="192x192" href="/icon_192.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
