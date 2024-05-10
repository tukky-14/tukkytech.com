/* eslint @typescript-eslint/no-explicit-any: off */

import Link from 'next/link';

import useCommonInitialization from '@/hooks/use-common-initialization';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Profile() {
    useCommonInitialization();

    return (
        <Container>
            <Header isTop={false} />
            <div className="mx-auto max-w-screen-xl">
                <main className="w-screen bg-white px-4 py-5 sm:max-w-screen-md">
                    <div className="mb-20 flex flex-col items-center">
                        <div className="mb-2 text-xl font-bold">プライバシーポリシー</div>
                        <h4 className="mb-2 mt-4 font-bold">個人情報の利用目的</h4>
                        <p>
                            当ブログでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
                            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
                        </p>
                        <h4 className="mb-2 mt-4 font-bold">広告について</h4>
                        <p>
                            当ブログでは、第三者配信の広告サービス（Googleアドセンス）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
                            クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
                            Cookieを無効にする方法やGoogleアドセンスに関する詳細は
                            <Link href="https://policies.google.com/technologies/ads?gl=jp" target="_blank">
                                「広告 – ポリシーと規約 – Google」
                            </Link>{' '}
                            をご確認ください。
                        </p>
                        <h4 className="mb-2 mt-4 font-bold">アクセス解析ツールについて</h4>
                        <p>
                            当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
                        </p>
                    </div>
                    <div className="mb-10 flex flex-col items-center">
                        <div className="mb-2 text-xl font-bold">免責事項</div>
                        <p>
                            当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
                            また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
                            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
                        </p>
                    </div>
                </main>
            </div>
            <Footer />
        </Container>
    );
}
