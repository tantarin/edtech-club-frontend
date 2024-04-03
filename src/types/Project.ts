interface Project {
    id: number;
    title: string;
    description: string;
    img: string;
    ProjectHeader?: {
        title: string;
        publishDate: string;
        tags: string;
    };
}

export default Project;
