// 画像サイズ → 640x400

import Footer from '../components/Footer';
import Header from '../components/Header';
import { getAllLinks } from '../../libs/client';
import Container from '../components/Container';

type LinkProps = {
    image?: any;
    title?: string;
    url?: string;
    description?: string;
    tag?: string;
};

export default function Links({ links }: any) {
    const allLinks = links;

    return (
        <Container>
            <Header isBlogPage={false} />
            <div id="links" className="mx-auto max-w-screen-xl py-5 px-4 lg:px-0">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 dark:text-white">
                    {allLinks.map((link: LinkProps) => (
                        <li key={link.title} className="hover:scale-105 duration-300">
                            <a
                                className="relative block h-[18rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
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
                                    <div className="mb-0.5 text-md font-bold">{link.title}</div>
                                    <div className="mb-0.5 text-xs text-gray-500 dark:text-gray-300">
                                        {link.description}
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

    return {
        props: {
            links: contents,
        },
    };
};
