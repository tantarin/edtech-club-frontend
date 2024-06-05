import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { useAsync } from "../../../common/useAsync";

const commentsMock: Comment[] = [
    {
        author: 'Дмитрий',
        text: 'классный стартап! удачи',
        time: new Date(Date.now()).toISOString(),
        id: 'id',
    },
]


interface Comment {
    author: string;
    text: string;
    time: string;
    id: string | number;
}

interface ICommentsContext {
    commentsCount?: number;
    comments: Comment[] | null;
    addComment: (v: Comment) => Promise<unknown>;
    error: Error | null | undefined;
    status: string;
}

export const CommentsContext = createContext<ICommentsContext>((null as unknown) as ICommentsContext)


export const useComments = () => {
    const context = useContext(CommentsContext)
    if (!context) throw new Error("You can't use comments context outside Provider!")
    return context;
}

const getCommentsList = () =>
    new Promise<Comment[]>(resolve => setTimeout(resolve, 1000, commentsMock.map((v, idx) => { v.id = idx + Date.now(); return v })))


export const CommentsProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const { run, status, data: comments, error, setData } = useAsync<Comment[]>();

    useEffect(() => {
        run(getCommentsList())
    }, [run])

    const addComment = async (value: Comment) => {
        const array = comments === null ? [] : comments;
        return new Promise(resolve => setTimeout(resolve, 300, setData([...array, value])))
    }

    const commentsCount = comments?.length;

    return (
        <CommentsContext.Provider value={{
            commentsCount,
            comments,
            error,
            status,
            addComment
        }}>
            {children}
        </CommentsContext.Provider>
    )
}


