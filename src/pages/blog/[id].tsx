// pages/blog/[id].js
import { client } from '../../libs/client';
import Navbar from '../components/Navbar';

export default function BlogId({ blog }: any) {
    return (
        <>
            <Navbar />
            <div className="max-w-screen-xl mx-auto pt-5">
                <main className="max-w-screen-md">
                    <h1 className="text-2xl font-bold">{blog.title}</h1>
                    <p className="text-sm text-gray-600">作成日：{blog.publishedAt}</p>
                    <div
                        className="mt-5"
                        dangerouslySetInnerHTML={{
                            __html: `${blog.body}`,
                        }}
                    />
                </main>
            </div>
        </>
    );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: 'blog' });

    const paths = data.contents.map((content: { id: string }) => `/blog/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: 'blog', contentId: id });

    return {
        props: {
            blog: data,
        },
    };
};
