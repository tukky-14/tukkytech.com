/* eslint @typescript-eslint/no-explicit-any: off */

// https://mui.com/x/react-data-grid/

import { useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { DataGrid, GridColDef, jaJP, GridCellParams } from '@mui/x-data-grid';
import axios from 'axios';

import Footer from '@/components/Footer';
import GridCellEditModal from '@/components/GridCellEditModal';
import GridCellModal from '@/components/GridCellModal';
import Header from '@/components/Header';
import { useAuth } from '@/hooks/use-auth';

import GridCustomToolbar from '../../components/GridCustomToolbar';
import itgirl from '../../images/itgirl.png';

const styles = {
    grid: {
        '.MuiDataGrid-toolbarContainer': {
            borderBottom: 'solid 1px rgba(224, 224, 224, 1)',
        },
        '.MuiDataGrid-row .MuiDataGrid-cell:not(:last-child)': {
            borderRight: 'solid 1px rgba(224, 224, 224, 1) !important',
        },
        '.MuiDataGrid-columnHeader': {
            borderRight: 'solid 1px rgba(224, 224, 224, 1)',
            // backgroundColor: '#A5F3FC',
            backgroundColor: '#CFFAFE',
        },
    },
};

export default function DataGridCustom({ words }: any) {
    const rows = words;

    const { isAuthenticated } = useAuth();

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [editModalContent, setEditModalContent] = useState({ title: '', description: '' });

    const columns: GridColDef[] = [
        {
            field: 'icon',
            headerName: '',
            width: 60,
            align: 'center',
            hideable: false,
            renderCell: (params) => (
                <button className="text-blue-600 hover:cursor-pointer" onClick={() => handleEditClick(params)}>
                    <EditIcon />
                </button>
            ),
        },
        {
            field: 'id',
            headerName: 'No',
            width: 10,
        },
        {
            field: 'title',
            headerName: '用語',
            width: 220,
        },
        {
            field: 'description',
            headerName: '説明',
            flex: 1,
            renderCell: (params: any) => (
                <>
                    <button className="hidden py-4 sm:inline" onClick={() => handleWordClick(params.value)}>
                        {params.value}
                    </button>
                    <button className="text-blue-600 sm:hidden" onClick={() => handleWordClick(params.value)}>
                        <LibraryBooksIcon />
                    </button>
                </>
            ),
        },
    ];

    const handleWordClick = (description: string) => {
        setModalContent(description.replaceAll('\n', '<br>'));
        setShowModal(true);
    };
    // モーダルを閉じるときのハンドラ
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleEditClick = (params: GridCellParams) => {
        setShowEditModal(true);
        setEditModalContent({ title: params.row.title, description: params.row.description });
    };

    return (
        <div className="h-screen">
            <Header />
            <div className="mx-auto w-full max-w-screen-xl flex-1 overflow-scroll p-4">
                <div className="mb-2 flex items-center gap-1 text-xl font-bold">
                    <img alt="ITガールのアイコン" className="h-10" src={itgirl.src} />
                    <span>ITアシスタントの用語解説</span>
                </div>
                <DataGrid
                    checkboxSelection={isAuthenticated}
                    columns={columns}
                    disableRowSelectionOnClick
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 50,
                            },
                        },
                        columns: {
                            columnVisibilityModel: {
                                icon: isAuthenticated,
                            },
                        },
                    }}
                    localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
                    pageSizeOptions={[20, 50, 100]}
                    rows={rows}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}
                    slots={{ toolbar: () => <GridCustomToolbar /> }}
                    sx={styles.grid}
                />
            </div>
            {showModal && <GridCellModal handleCloseModal={handleCloseModal} modalContent={modalContent} />}
            {showEditModal && (
                <GridCellEditModal {...{ showEditModal, setShowEditModal, editModalContent, setEditModalContent }} />
            )}
            <Footer />
        </div>
    );
}

export const getStaticProps = async () => {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_ITWORDS_APIENDPOINT || '');

    const wordsData = JSON.parse(data.body);

    return {
        props: {
            words: wordsData.map((word: any, index: number) => {
                return { ...word, id: index + 1 };
            }),
        },
    };
};
