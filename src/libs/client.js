import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

export const getAllContents = async (limit = 10, offset = 0) => {
    const data = await client.get({
        endpoint: 'blog',
        queries: {
            offset,
            limit,
        },
    });

    if (data.offset + data.limit < data.totalCount) {
        const contents = await getAllContents(data.limit, data.offset + data.limit);
        return [...data.contents, ...contents];
    }

    return data.contents;
};
