import Footer from '../components/Footer';
import Navbar from '../components/Header';
import { client } from '../../libs/client';

export default function About() {
    return (
        <div>
            <Navbar isTop={false} />
            <div className="mx-auto max-w-screen-xl px-4 xl:px-0">
                <h3>管理者</h3>
                <p>こんにちは。</p>
                <p>ご覧いただきありがとうございます。</p>
                <p>
                    このブログを管理している<strong>つっきー</strong>と申します。
                </p>
                <p>学習している内容をアウトプットするべく、この技術ブログを作成しました。</p>
                <br />

                <h3>このブログについて</h3>
                <p>このブログは、Next.js + microCMS で作成しています。</p>
            </div>
            <Footer />
        </div>
    );
}

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: 'blog' });

    return {
        props: {
            blog: data.contents,
        },
    };
};
