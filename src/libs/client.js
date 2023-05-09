import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

export const getAllContents = async (limit = 100, offset = 0) => {
    const data = await client.get({
        endpoint: 'blog',
        queries: {
            offset,
            limit,
        },
    });

    return data.contents;
};
