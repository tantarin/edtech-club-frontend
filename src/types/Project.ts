interface Project {
    id: number;
    title: string;
    category: string;
    img: string;
    ProjectHeader?: {
        title: string;
        publishDate: string;
        tags: string;
    };
}

export default Project;
