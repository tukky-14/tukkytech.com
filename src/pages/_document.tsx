import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ja">
            <Head />
            <title>Tukky Tech Blog</title>
            <meta name="description" content="Jam Stackで作成したBlogです。" />
            <meta property="og:title" content="Tukky Tech Blog" />
            <meta property="og:description" content="Jam Stackで作成したBlogです。" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="" />
            <meta property="og:image" content="" />
            <meta property="og:locale" content="ja_JP" />
            <meta property="og:site_name" content="Tukky Tech Blog" />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
