import Link from 'next/link';
import { client } from '../libs/client';
import Navbar from './components/Navbar';

export default function Home({ blog }: any) {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-screen-xl">
                <ul>
                    {blog.map((blog: any) => (
                        <li key={blog.id}>
                            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
    const data = await client.get({ endpoint: 'blog' });

    return {
        props: {
            blog: data.contents,
        },
    };
};
