import React, { useState } from 'react';

interface SearchFormProps {
    searchText: (text: string) => void;
}

function SearchForm({ searchText }: SearchFormProps) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchText(text);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    className="py-1 px-2 rounded-l-lg"
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" className="bg-blue-400 py-1 px-2 rounded-r-lg text-white">
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchForm;
