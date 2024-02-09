import Link from 'next/link';

export default function Custom404() {
    return (
        <main className="main">
            <p>ページがありません。</p>
            <Link className="text-cyan-600 hover:underline" href="/">
                ホームに戻る
            </Link>
        </main>
    );
}
