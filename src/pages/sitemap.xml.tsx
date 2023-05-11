import dayjs from 'dayjs';
import { getAllContents } from '@/libs/client';
import { GetServerSidePropsContext } from 'next';

export const getStaticProps = async ({ res }: GetServerSidePropsContext) => {
    const xml = await generateSitemapXml();

    res.statusCode = 200;
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 24時間のキャッシュ
    res.setHeader('Content-Type', 'text/xml');
    res.end(xml);

    return {
        props: {},
    };
};

const generateSitemapXml = async () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    const contents = await getAllContents();
    contents.forEach((content: any) => {
        xml += `
         <url>
         <loc>https://tukkytech/blog${content.id}</loc>
         <lastmod>${dayjs(content.updatedAt).format('YYYY-MM-DD')}</lastmod>
         <changefreq>monthly</changefreq>
         </url>
      `;
    });

    xml += `</urlset>`;
    return xml;
};

const Page = () => null;
export default Page;
