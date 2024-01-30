// 画像サイズ → 640x400

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getAllLinks } from '../../libs/client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

type LinkProps = {
    image?: any;
    title?: string;
    url?: string;
    description?: string;
    tag?: string[];
};

export default function Links({ links }: any) {
    const allLinks = links;
    const allTags: any = [
        ...new Set(
            links
                .map((link: any) => link.tag)
                .join(',')
                .split(',')
                .filter((tag: string) => tag !== 'その他')
                .sort()
        ),
    ];
    const [filterLinks, setFilterLinks] = useState(allLinks);

    const handleAllClick = () => {
        setFilterLinks(allLinks);
    };

    const handleTagClick = (e: any) => {
        setFilterLinks(allLinks.filter((link: any) => link.tag.includes(e.target.name)));
    };

    const handleSearchChange = (e: any) => {
        const searchWord = e.target.value;

        // タイトルと説明文の両方で検索
        const searchResultTitle = allLinks.filter((link: any) => link.title.includes(searchWord));
        const searchResultDescription = allLinks.filter((link: any) => link.description.includes(searchWord));
        const serchResult = [...searchResultTitle, ...searchResultDescription];

        // 重複を削除してセット
        setFilterLinks([...new Set(serchResult)]);
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
            <div id="links" className="mx-auto max-w-screen-xl py-5 lg:px-0">
                <ul className="grid grid-cols-1 gap-4 px-4 dark:text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filterLinks.map((link: LinkProps) => (
                        <li key={link.title} className="duration-300 hover:scale-105">
                            <a
                                className="relative block h-[20rem] max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 sm:h-[18rem]"
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="mb-1.5 w-full rounded-t-lg border-b border-gray-200"
                                    src={link.image?.url}
                                    alt={link.title}
                                />
                                <div className="px-2">
                                    <div className="text-md mb-0.5 font-bold">{link.title}</div>
                                    <div className="mb-0.5 text-xs text-gray-600 dark:text-gray-300">
                                        {link.description}
                                    </div>
                                    <div className="absolute bottom-0 right-0 mb-1 flex">
                                        {link.tag?.map((tag: string) => (
                                            <div className="flex items-center text-xs text-cyan-600" key={tag}>
                                                <FontAwesomeIcon className="mb-1 block" icon={faTag} />
                                                <span className="mb-1 ml-0.5 mr-2 inline-block">{tag}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </Container>
    );
}

export const getStaticProps = async () => {
    const contents = await getAllLinks();

    // アルファベット順に並び替え（大文字小文字を区別しない）
    const sortedContents = contents.sort((a: any, b: any) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
    });

    return {
        props: {
            links: sortedContents,
        },
    };
};
