import WikiNav from "../features/wiki/components/WikiNav";

export default function Sidebar() {
    return (
        <div className="space-y-3">
            <div className="flex items-center">
                <h2 className="text-xl font-bold">База знаний</h2>
            </div>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center py-4">
                    <button
                        type="submit"
                        className="p-2 focus:outline-none focus:ring"
                    >
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
                    </button>
                </span>
                <input
                    type="search"
                    name="Search"
                    placeholder="Search..."
                    className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                />
            </div>
            <div className="flex-1">
                <WikiNav />
            </div>
        </div>
    );
}