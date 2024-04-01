import React from "react";

interface TagProps {
    tag: string;
}

const Tag: React.FC<TagProps> = ({ tag }) => {
    return (
        <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
            <a href={`#${tag}`}>{`#${tag}`}</a>
        </div>
    );
};

export default Tag;
