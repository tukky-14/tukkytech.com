import { data } from 'cheerio/lib/api/attributes';
import { table } from 'console';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';

import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';

export type TestInfo = {
    description: string;
    id: string;
    title: string;
};

export default function Words2({ words }: any) {
    const allWords = words;
    console.log('allWords:', allWords);

    const [data, setData] = useState(() => [...allWords]);
    const [selectRowData, setSelectRowData] = useState<TestInfo | null>(null);

    const columnHelper = createColumnHelper<TestInfo>();

    const columns = [
        columnHelper.accessor('id', {
            cell: (info) => <div className="text-right">{info.getValue()}</div>,
            header: 'ID',
        }),
        columnHelper.accessor('title', {
            cell: (info) => <div className="">{info.getValue()}</div>,
            header: '用語',
        }),
        columnHelper.display({
            cell: (info) => {
                const description = info.row.original.description;
                return (
                    <div className="inline-block">
                        {description.length > 50 ? description.substring(0, 50) + '...' : description}
                    </div>
                );
            },
            header: '概要',
            id: 'description',
        }),
    ];

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Container>
            <Header />
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="my-4 text-xl font-bold">IT用語解説</div>
                <div className="flex-col gap-8">
                    <table className="mb-4">
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th className="border bg-blue-50 px-2" key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td className="border px-1 py-2" key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />
        </Container>
    );
}
export const getStaticProps = async () => {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_ITWORDS_APIENDPOINT || '');

    return {
        props: {
            words: JSON.parse(data.body),
        },
    };
};
