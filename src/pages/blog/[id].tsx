import dayjs from 'dayjs';
import Header from '../components/Header';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';
import { load } from 'cheerio';
import { client, getAllBlogs } from '../../libs/client';
import { renderToc } from '../../libs/render-toc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import Container from '../components/Container';
import TableOfContents from '../components/TableOfContents';

export default function BlogId({ blog }: any) {
    const toc = renderToc(blog.body);

    return (
        <Container>
            <Header isTop={false} isBlogPage={true} />
            <div className="max-w-screen-xl mx-auto">
                <main className="bg-white max-w-screen-md py-5 px-4">
                    <h1 className="text-xl sm:text-2xl font-bold mb-2">{blog.title}</h1>
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
                    {!!toc.length && <TableOfContents toc={toc} />}
                    <div
                        className="mt-5"
                        dangerouslySetInnerHTML={{
                            __html: `${blog.body}`,
                        }}
                    />
                </main>
            </div>
            <Footer />
        </Container>
    );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const contents = await getAllBlogs();

    const paths = contents.map((content: { id: string }) => `/blog/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: 'blog', contentId: id });

    // シンタックスハイライト
    const $ = load(data.body);
    $('pre code').each((_, elm) => {
        const result = hljs.highlightAuto($(elm).text());
        $(elm).html(result.value);
        $(elm).addClass('hljs');
    });
    data.body = $.html();

    return {
        props: {
            blog: data,
        },
    };
};
