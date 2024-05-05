import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ja">
            <Head>
                <meta content="Jam Stackで作成した技術ブログです。" name="description" />
                <meta content="Tukky Tech Blog" property="og:title" />
                <meta content="website" property="og:type" />
                <meta content="https://tukkytech.com/" property="og:url" />
                <meta content="/tukkytech-top.png" property="og:image" />
                <meta content="Tukky Tech Blog" property="og:site_name" />
                <meta content="ja_JP" property="og:locale" />
                <meta content="Jam Stackで作成した技術ブログです。" property="og:description" />
                <meta content="yes" name="apple-mobile-web-app-capable" />
                <meta content="yes" name="mobile-web-app-capable" />
                <link href="/icon_16.png" rel="icon" />
                <link href="/icon_192.png" rel="apple-touch-icon" sizes="192x192" />
                <script
                    async
                    crossOrigin="anonymous"
                    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
                ></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
