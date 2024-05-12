import React from 'react';

import Link from 'next/link';

type Props = {
    toc: { id: string; text: string }[];
};

const TableOfContents = (props: Props) => {
    const { toc } = props;

    if (!toc?.length) {
        return <></>;
    }

    return (
        <div className="mt-4 rounded border p-2 text-sm">
            <div className="mb-2 font-bold">目次</div>
            <ul className="flex flex-col gap-1.5">
                {toc.map((data) => (
                    <li key={data.id}>
                        <Link className="text-blue-600 hover:underline" href={`#${data.id}`}>
                            {data.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TableOfContents;
