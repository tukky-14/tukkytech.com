import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';
import itgirl from '../../images/itgirl.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';

export type TestInfo = {
    description: string;
    id: string;
    title: string;
};

export default function Words2({ words }: any) {
    const allWords = words;
    const [data, setData] = useState(() => [...allWords]);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const columnHelper = createColumnHelper<TestInfo>();

    const columns = [
        columnHelper.accessor('id', {
            cell: (info) => (
                <button className="" onClick={() => handleWordClick(info.row.original.description)}>
                    <FontAwesomeIcon className="text-blue-600" icon={faCircleInfo} />
                </button>
            ),
            header: '',
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
                        {description.length > 60 ? description.substring(0, 60) : description}
                        {description.length > 60 && (
                            <button
                                className="font-bold text-blue-600"
                                onClick={() => handleWordClick(info.row.original.description)}
                            >
                                ...
                            </button>
                        )}
                    </div>
                );
            },
            header: '解説',
            id: 'description',
        }),
    ];

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    });

    // wordをクリックしたときのハンドラ
    const handleWordClick = (description: string) => {
        setModalContent(description.replaceAll('\n', '<br>'));
        setShowModal(true);
    };

    // モーダルを閉じるときのハンドラ
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container>
            <Header />
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="my-4 flex items-center gap-1 text-xl font-bold">
                    <img className="h-10" src={itgirl.src} alt="ITガールのアイコン" />
                    <span>ITアシスタントガールのIT用語解説</span>
                </div>
                <div className="flex-col gap-8">
                    <table className="mb-4">
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            className="border bg-cyan-600 px-2 py-2 text-lg font-bold text-white"
                                            key={header.id}
                                        >
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

            {showModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={handleCloseModal}
                >
                    <div
                        className="mx-4 w-full rounded-lg bg-white p-4 sm:w-3/4"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="max-h-96 w-full overflow-scroll sm:flex sm:h-auto">
                            <div className="px-4" dangerouslySetInnerHTML={{ __html: modalContent }} />
                        </div>
                    </div>
                </div>
            )}
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
