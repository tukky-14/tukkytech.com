import dayjs from 'dayjs';
import Footer from './components/Footer';
import Link from 'next/link';
import Navbar from './components/Header';
import Header from './components/Header';
import { client } from '../libs/client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function Home({ blog }: any) {
    console.log('blog:', blog);
    const allBlog = blog;
    const allTags: any = [
        ...new Set(
            blog
                .map((blog: any) => blog.tag)
                .join(',')
                .split(',')
                .sort()
        ),
    ];
    const [filterBlog, setFilterBlog] = useState(allBlog);

    const handleAllClick = () => {
        setFilterBlog(allBlog);
    };

    const handleTagClick = (e: any) => {
        setFilterBlog(allBlog.filter((blog: any) => blog.tag.includes(e.target.name)));
    };

    const handleSearchChange = (e: any) => {
        const searchWord = e.target.value;
        const searchResult = allBlog.filter((blog: any) => blog.title.includes(searchWord));
        setFilterBlog(searchResult);
    };

    return (
        <div>
            <Navbar
                isTop={true}
                handleAllClick={handleAllClick}
                handleTagClick={handleTagClick}
                handleSearchChange={handleSearchChange}
                allTags={allTags}
            />
            <div className="mx-auto max-w-screen-xl pt-5 px-2 lg:px-0">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filterBlog.map((blog: any) => (
                        <li key={blog.id}>
                            <Link
                                className="relative block h-[22rem] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                                href={`/blog/${blog.id}`}
                            >
                                <img
                                    className="mb-4 w-full h-[150px]"
                                    src={blog.image?.url || 'https://picsum.photos/id/24/4855/1803'}
                                    alt="記事のイメージ画像"
                                />
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {blog.title}
                                </h5>
                                <div className="absolute bottom-4">
                                    {blog.tag.map((tag: string) => (
                                        <span
                                            className="inline-block mb-1 mr-2 py-0.5 px-1.5 text-sm bg-gray-200 rounded"
                                            key={tag}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    <div className="flex gap-4 leading-6">
                                        <p className="flex items-center text-sm text-gray-600">
                                            <FontAwesomeIcon className="mr-0.5" icon={faCalendarPlus} />
                                            <span>{dayjs(blog.createdAt).format('YYYY/MM/DD')}</span>
                                        </p>
                                        <p className="flex items-center text-sm text-gray-600">
                                            <FontAwesomeIcon className="mr-0.5" icon={faPenToSquare} />
                                            <span>{dayjs(blog.updatedAt).format('YYYY/MM/DD')}</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
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
