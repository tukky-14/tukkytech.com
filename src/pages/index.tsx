import Link from 'next/link';
import { client } from '../libs/client';
import Navbar from './components/Navbar';
import dayjs from 'dayjs';

export default function Home({ blog }: any) {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-screen-xl pt-5 px-2 lg:px-0">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {blog.map((blog: any) => (
                        <li key={blog.id}>
                            <Link
                                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                                href={`/blog/${blog.id}`}
                            >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {blog.title}
                                </h5>
                                <p className="font-normal text-sm text-gray-600 dark:text-gray-400">
                                    更新日：{dayjs(blog.updatedAt).format('YYYY年MM月DD日')}
                                </p>
                            </Link>
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
