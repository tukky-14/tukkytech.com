import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SearchFormProps = {
    handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SeachForm = (props: SearchFormProps) => {
    const { handleSearchChange } = props;

    return (
        <div className="flex sm:order-2">
            <div className="relative hidden sm:block">
                <div className="pointer-events-none absolute inset-y-0 -top-2 left-0 flex items-center pl-3">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input
                    className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    id="search-navbar"
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    type="text"
                />
            </div>
        </div>
    );
};

export default SeachForm;
