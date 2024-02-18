type GridCellModalProps = {
    modalContent: string;
    handleCloseModal: () => void;
};

const GridCellModal = (props: GridCellModalProps) => {
    const { modalContent, handleCloseModal } = props;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleCloseModal}
        >
            <div className="mx-4 w-full rounded-lg bg-white p-4 sm:w-3/4" onClick={(event) => event.stopPropagation()}>
                <div className="max-h-96 w-full overflow-scroll sm:flex sm:h-auto">
                    <div className="px-4" dangerouslySetInnerHTML={{ __html: modalContent }} />
                </div>
            </div>
        </div>
    );
};

export default GridCellModal;
