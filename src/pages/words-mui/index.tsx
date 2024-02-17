/* eslint @typescript-eslint/no-explicit-any: off */

// https://mui.com/x/react-data-grid/

// import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridColDef, jaJP, GridRenderCellParams } from '@mui/x-data-grid';
import axios from 'axios';

import Footer from '@/components/Footer';
import GridCellExpand from '@/components/GridCellExpand';
import Header from '@/components/Header';

import GridCustomToolbar from '../../components/GridCustomToolbar';
import itgirl from '../../images/itgirl.png';

function renderCellExpand(params: GridRenderCellParams<any, string>) {
    return <GridCellExpand value={params.value || ''} width={params.colDef.computedWidth} />;
}

const columns: GridColDef[] = [
    // {
    //     field: 'icon',
    //     headerName: '',
    //     width: 60,
    //     align: 'center',
    //     renderCell: (params) => (
    //         <button className="text-blue-600 hover:cursor-pointer" onClick={() => handleClickIcon(params)}>
    //             <EditIcon />
    //         </button>
    //     ),
    // },
    {
        field: 'title',
        headerName: '用語',
        width: 150,
        editable: true,
        renderCell: renderCellExpand,
    },
    {
        field: 'description',
        headerName: '説明',
        flex: 1,
        editable: true,
        renderCell: renderCellExpand,
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
            // backgroundColor: '#A5F3FC',
            backgroundColor: '#CFFAFE',
        },
    },
};

// const handleClickIcon = (params: GridCellParams) => {
//     const row = params.row;
//     const values = Object.keys(row).map((key) => `${key}: ${row[key]}`);
//     alert(values.join('\n'));
// };

export default function DataGridCustom({ words }: any) {
    const rows = words;

    return (
        <div className="h-screen">
            <Header />
            <div className="mx-auto w-full max-w-screen-xl flex-1 overflow-scroll p-4">
                <div className="mb-2 flex items-center gap-1 text-xl font-bold">
                    <img alt="ITガールのアイコン" className="h-10" src={itgirl.src} />
                    <span>ITアシスタントの用語解説</span>
                </div>
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
        </div>
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
