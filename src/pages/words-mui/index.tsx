/* eslint @typescript-eslint/no-explicit-any: off */

// https://mui.com/x/react-data-grid/

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DataGrid, GridColDef, jaJP, GridCellParams } from '@mui/x-data-grid';
import axios from 'axios';

import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import GridCustomToolbar from '../../components/GridCustomToolbar';

const columns: GridColDef[] = [
    {
        field: 'icon',
        headerName: '',
        width: 60,
        align: 'center',
        renderCell: (params) => (
            <button className="text-blue-600 hover:cursor-pointer" onClick={() => handleClickIcon(params)}>
                <AccountCircleIcon />
            </button>
        ),
    },
    {
        field: 'title',
        headerName: '用語',
        width: 150,
        editable: true,
    },
    {
        field: 'description',
        headerName: '説明',
        width: 150,
        flex: 1,
        editable: true,
    },
];

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
            backgroundColor: '#e0f2fe',
        },
    },
};

const handleClickIcon = (params: GridCellParams) => {
    const row = params.row;
    const values = Object.keys(row).map((key) => `${key}: ${row[key]}`);
    alert(values.join('\n'));
};

export default function DataGridCustom({ words }: any) {
    const rows = words;

    return (
        <Container>
            <Header />
            <div className="mx-auto h-[450px] w-full max-w-screen-xl overflow-scroll p-4">
                <DataGrid
                    checkboxSelection
                    columns={columns}
                    disableRowSelectionOnClick
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 50,
                            },
                        },
                    }}
                    localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
                    pageSizeOptions={[20, 50, 100]}
                    rows={rows}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                        },
                    }}
                    slots={{ toolbar: () => <GridCustomToolbar /> }}
                    sx={styles.grid}
                />
            </div>
            <div>
                <Footer />
            </div>
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
