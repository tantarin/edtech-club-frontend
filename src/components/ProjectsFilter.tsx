import React, { Dispatch, SetStateAction } from 'react';

interface ProjectsFilterProps {
    setSelectProject: Dispatch<SetStateAction<string>>;
}

const ProjectsFilter = ({ setSelectProject }: ProjectsFilterProps) => {
    const selectOptions = [
        'Web Application',
        'Mobile Application',
        'UI/UX Design',
        'Branding',
    ];

    return (
        <select
            onChange={(e) => {
                setSelectProject(e.target.value);
            }}
            className="font-general-medium
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
        >
            <option value="">All Projects</option>

            {selectOptions.map((option) => (
                <option className="text-normal sm:text-md" key={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default ProjectsFilter;
