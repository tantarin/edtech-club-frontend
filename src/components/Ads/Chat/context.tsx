import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { useAsync } from "../../../common/useAsync";

export interface IChatMessage {
    id: number,
    message: string,
    from: string,
    datetime: string,
    delivered?: boolean,
    wasRead?: boolean,
}

const messagesMock: IChatMessage[] = [
    {
        id: 1,
        message: 'Привет, хочу в команду к вам!',
        from: 'tanya',
        datetime: '',
        delivered: false,
        wasRead: false,
    },
];


export interface IChatContext {
    msgList: IChatMessage[] | null;
    addMessage: (v: IChatMessage) => Promise<unknown>;
    error: Error | null | undefined;
    status: string;
}

export const ChatContext = createContext<IChatContext>((null as unknown) as IChatContext);


export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) throw new Error("You can't use chat context outside ChatProvider!");
    return context;
}

const getMessageList = () =>
    new Promise<IChatMessage[]>(resolve => setTimeout(resolve, 1000, messagesMock.map((v, idx) => { v.id = idx + Date.now(); return v })))


export const ChatProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const { run, status, data: msgList, error, setData } = useAsync<IChatMessage[]>();

    useEffect(() => {
        run(getMessageList())
    }, [run])

    const addMessage = async (value: IChatMessage) => {
        const array = msgList === null ? [] : msgList;
        return new Promise(resolve => setTimeout(resolve, 300, setData([...array, { delivered: false, wasRead: false, ...value }])))
    }


    return (
        <ChatContext.Provider value={{
            msgList,
            error,
            status,
            addMessage,
        }}>
            {children}
        </ChatContext.Provider>
    )
}


