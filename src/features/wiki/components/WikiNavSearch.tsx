import { useFilter } from "../context/FIlterContext";

const WikiNavSearch = () => {
    const {filter, setFilter} = useFilter()

    return (
        <div className="flex px-3 py-1 space-between">
            <label htmlFor='search' className="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </label>
            <input
                id="search"
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-full py-2 px-1 pl-10 text-sm rounded-md focus:outline-none"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </div>
    );
}

export default WikiNavSearch;