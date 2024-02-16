/* eslint @typescript-eslint/no-explicit-any: off */

import { useState } from 'react';

import { faCalendarPlus, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import Link from 'next/link';

import useCommonInitialization from '@/hooks/use-common-initialization';

import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getAllBlogs } from '../libs/client';

export default function Home({ blog }: any) {
    useCommonInitialization();

    const allBlog = blog;
    const allTags: any = [
        ...new Set(
            blog
                .map((blog: any) => blog.tag)
                .join(',')
                .split(',')
                .filter((tag: string) => tag !== 'その他')
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
        <Container>
            <Header
                allTags={allTags}
                handleAllClick={handleAllClick}
                handleSearchChange={handleSearchChange}
                handleTagClick={handleTagClick}
                isTop={true}
            />
            <div className="mx-auto max-w-screen-xl py-5 lg:px-0" id="articles">
                <ul className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filterBlog.map((blog: any) => (
                        <li key={blog.id}>
                            <Link
                                className="relative block h-[22rem] max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                href={`/blog/${blog.id}`}
                            >
                                <img
                                    alt="記事のイメージ画像"
                                    className="mb-4 h-[150px] w-full"
                                    src={blog.image?.url || 'https://picsum.photos/id/24/4855/1803'}
                                />
                                <h5 className="text-md mb-2 font-bold tracking-tight text-gray-900 lg:text-xl dark:text-white">
                                    {blog.title}
                                </h5>
                                <div className="absolute bottom-4">
                                    <div className="mb-1 flex">
                                        {blog.tag.map((tag: string) => (
                                            <div className="flex items-center text-cyan-600" key={tag}>
                                                <FontAwesomeIcon className="mb-1 block" icon={faTag} />
                                                <span className="mb-1 ml-0.5 mr-2 inline-block text-sm">{tag}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 leading-6">
                                        <p className="flex items-center text-sm text-gray-600">
                                            <FontAwesomeIcon className="mr-0.5" icon={faCalendarPlus} />
                                            <span>{dayjs(blog.createdAt).format('YYYY/MM/DD')}</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </Container>
    );
}

// データをテンプレートに受け渡す処理
export const getStaticProps = async () => {
    const contents = await getAllBlogs();

    return {
        props: {
            blog: contents,
        },
    };
};
