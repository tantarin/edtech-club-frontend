import React, { useContext } from 'react';
import ProjectsFilter from './ProjectsFilter';
import { ProjectsContext } from "./ProjectContext";
import StartupCard from './StartupCard/StartupCard';

const ProjectsGrid: React.FC = () => {
    const {
        projects,
        searchProject,
        setSearchProject,
        searchProjectsByTitle,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
    } = useContext(ProjectsContext);

    const projectsList = selectProject ?
        selectProjectsByCategory : searchProject ?
            searchProjectsByTitle : projects;

    return (
        <section className="py-5 sm:py-5 mt-5 sm:mt-10">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Стартапы наших участников
                </p>
            </div>

            <div className="mt-5 sm:mt-10">
                <h3 className="font-general-regular
        text-center text-secondary-dark
        dark:text-ternary-light
        text-md
        sm:text-xl
        mb-3
    ">
                    Поиск проектов по названию или фильтрация по категориям
                </h3>

                <div
                    className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
                >
                    <div className="flex justify-between gap-2">
                        <input
                            onChange={(e) => {
                                setSearchProject(e.target.value);
                            }}
                            className="font-general-medium
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
                            id="name"
                            name="name"
                            type="search"
                            placeholder="Search Projects"
                            aria-label="Name"
                        />
                        <button type="submit"
                            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>

                    <ProjectsFilter setSelectProject={setSelectProject} />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
                {projectsList.map((project) => (
                    <StartupCard key={project.id}>
                        <>
                            <div>
                                <img
                                    src={project.img}
                                    className="rounded-t-xl border-none w-full h-40 object-cover object-center"
                                    alt="Single Project"
                                />
                            </div>
                            <div className="h-full text-center px-4 py-6">
                                <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                                    {project.title}
                                </p>
                                <p className="mb-4 text-base text-slate-500">
                                    {project.description}
                                </p>
                            </div>
                        </>
                    </StartupCard>
                ))}
            </div>
        </section>
    );
};

export default ProjectsGrid;