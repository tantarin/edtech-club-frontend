"use client";
import React from "react";
import ProjectsGrid from "../components/ProjectsGrid";
import {ProjectsProvider} from "../components/ProjectContext";

const Startups: React.FC = () => {
    return (
        <ProjectsProvider>
            <div className="container mx-auto">
                <ProjectsGrid />
            </div>
        </ProjectsProvider>
    );
}

export default Startups;