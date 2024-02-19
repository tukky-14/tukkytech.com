type GridCellEditModalProps = {
    showEditModal: boolean;
    setShowEditModal: (show: boolean) => void;
    editModalContent: { title: string; description: string };
    setEditModalContent: (content: { title: string; description: string }) => void;
};

const GridCellEditModal = (props: GridCellEditModalProps) => {
    const { setShowEditModal, editModalContent, setEditModalContent } = props;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="mx-4 w-full rounded-lg bg-white p-4 sm:w-3/4" onClick={(event) => event.stopPropagation()}>
                <div className="h-96 w-full overflow-scroll sm:h-[30rem]">
                    <div className="px-4">
                        <div className="mb-4">
                            <label className="mb-2 block text-sm font-bold" htmlFor="title">
                                用語
                            </label>
                            <input
                                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                                disabled
                                id="title"
                                onChange={(e) => setEditModalContent({ ...editModalContent, title: e.target.value })}
                                type="text"
                                value={editModalContent.title}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 block text-sm font-bold" htmlFor="description">
                                説明
                            </label>
                            <textarea
                                className="focus:shadow-outline h-40 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none sm:h-60"
                                id="description"
                                onChange={(e) =>
                                    setEditModalContent({ ...editModalContent, description: e.target.value })
                                }
                                value={editModalContent.description}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                                onClick={() => setShowEditModal(false)}
                            >
                                キャンセル
                            </button>
                            <button
                                className="focus:shadow-outline ml-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                                onClick={() => setShowEditModal(false)}
                            >
                                保存
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridCellEditModal;
