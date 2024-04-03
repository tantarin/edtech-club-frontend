import React, { useState, createContext, ReactNode } from 'react';
import { projectsData } from '../data/projects';
import Project from '../types/Project'; // Замените 'Project' на ваш тип данных проекта

// Создайте интерфейс для контекста проектов
interface ProjectsContextType {
    projects: Project[];
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
    searchProject: string;
    setSearchProject: React.Dispatch<React.SetStateAction<string>>;
    selectProject: string;
    setSelectProject: React.Dispatch<React.SetStateAction<string>>;
    searchProjectsByTitle: Project[];
    selectProjectsByCategory: Project[];
}

// Создайте контекст проектов
export const ProjectsContext = createContext<ProjectsContextType>({} as ProjectsContextType);

// Создайте провайдер контекста проектов
export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
    const [projects, setProjects] = useState<Project[]>(projectsData);
    const [searchProject, setSearchProject] = useState<string>('');
    const [selectProject, setSelectProject] = useState<string>('');

    // Поиск проектов по названию проекта
    const searchProjectsByTitle = projects.filter((item) => {
        const result = item.title
            .toLowerCase()
            .includes(searchProject.toLowerCase())
            ? item
            : searchProject === ''
                ? item
                : undefined;
        return result;
    });

    // Выбор проектов по категории проекта
    const selectProjectsByCategory = projects.filter((item) => {
        let category =
            item.description.charAt(0).toUpperCase() + item.description.slice(1);
        return category.includes(selectProject);
    });

    return (
        <ProjectsContext.Provider
            value={{
                projects,
                setProjects,
                searchProject,
                setSearchProject,
                searchProjectsByTitle,
                selectProject,
                setSelectProject,
                selectProjectsByCategory,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
};
