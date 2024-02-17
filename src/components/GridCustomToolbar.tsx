import {
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector,
    GridToolbarExport,
    GridToolbarFilterButton,
} from '@mui/x-data-grid';

const GridCustomToolbar = () => {
    return (
        <GridToolbarContainer>
            <div className="flex w-full">
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
            </div>
        </GridToolbarContainer>
    );
};

export default GridCustomToolbar;
