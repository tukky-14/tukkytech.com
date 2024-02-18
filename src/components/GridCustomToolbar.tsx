import {
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector,
    GridToolbarExport,
    GridToolbarFilterButton,
} from '@mui/x-data-grid';

import { useAuth } from '@/hooks/use-auth';

const GridCustomToolbar = () => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated === false) {
        return <></>;
    }

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
