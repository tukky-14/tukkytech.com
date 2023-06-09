import dayjs from 'dayjs';
import Footer from './components/Footer';
import Link from 'next/link';
import Header from './components/Header';
import { getAllContents } from '../libs/client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import Container from './components/Container';

export default function Home({ blog }: any) {
    console.log('blog:', blog);
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
                isTop={true}
                handleAllClick={handleAllClick}
                handleTagClick={handleTagClick}
                handleSearchChange={handleSearchChange}
                allTags={allTags}
            />
            <div id="articles" className="mx-auto max-w-screen-xl pt-5 px-2 lg:px-0">
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
                                <h5 className="mb-2 text-md lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {blog.title}
                                </h5>
                                <div className="absolute bottom-4">
                                    <div className="flex mb-1">
                                        {blog.tag.map((tag: string) => (
                                            <div className="flex items-center text-cyan-600" key={tag}>
                                                <FontAwesomeIcon className="block mb-1" icon={faTag} />
                                                <span className="inline-block mb-1 ml-0.5 mr-2 text-sm">{tag}</span>
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

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
    const contents = await getAllContents();

    return {
        props: {
            blog: contents,
        },
    };
};
