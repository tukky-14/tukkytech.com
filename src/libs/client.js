import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

export const getAllBlogs = async (limit = 100, offset = 0) => {
    const data = await client.get({
        endpoint: 'blog',
        queries: {
            offset,
            limit,
        },
    });

    return data.contents;
};

export const getAllLinks = async (limit = 100, offset = 0) => {
    const data = await client.get({
        endpoint: 'links',
        queries: {
            offset,
            limit,
        },
    });

    return data.contents;
};
