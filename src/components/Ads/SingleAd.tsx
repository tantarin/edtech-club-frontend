import React, { useState } from "react";
import clsx from "clsx";
import Comments from "./Comments/Comments";
import OpenCommentsButton from "./Comments/OpenCommentsButton";
import { CommentsProvider } from "./Comments/context";
import OpenChatButton from "./Chat/OpenChatButton";

interface AdData {
    id: number;
    header: string;
    content: string;
    tags: string[];
    handleDelete: (id: number) => Promise<void>;
}


const SingleAd: React.FC<AdData> = ({ id, header, content, tags, handleDelete }) => {
    const [showComments, setShowComments] = useState(false);

    return (
        <article className={clsx("root", "rounded-[10px] pb-1")}>
            <CommentsProvider>
                <div id="dismiss-card" className="flex flex-col bg-white rounded-lg dark:shadow-slate-700/[.9]">
                    <div className="inline-flex justify-between items-center rounded-t-xl py-1 px-4 md:py-1 md:px-2 dark:bg-gray-800">
                        <a href="#dismiss-card" className="ml-auto">
                            <button
                                type="button"
                                className="inline-flex justify-center items-center size-4 rounded-lg text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                                data-hs-remove-element="#dismiss-card"
                                onClick={() => handleDelete(id)}
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </a>
                    </div>
    
                    <div className="relative block px-6 py-2 overflow-hidden bg-white border-slate-100 rounded-lg">
                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                        <div className="justify-between sm:flex">
                            <header>
                                <h5 className="text-xl font-bold text-slate-900">{header}</h5>
                                <p className="mt-1 text-xs font-medium text-slate-600">
                                    By Ana Doe
                                </p>
                            </header>
                            <figure className="flex-shrink-0 hidden ml-3 sm:block">
                                <img
                                    className="object-cover w-16 h-16 rounded-lg shadow-sm"
                                    src={`https://github.com/creativetimofficial/argon-design-system/blob/master/assets/img/faces/team-${id}.jpg?raw=true`}
                                    alt=""
                                />
                                <figcaption className="sr-only">By Ana Doe</figcaption>
                            </figure>
                        </div>
                        <section className="mt-4 sm:pr-8">
                            <p className="text-sm text-slate-500">{content}</p>
                        </section>
                        <dl className="flex mt-6">
                            <div className="flex flex-col-reverse">
                                <dd className="text-xs text-slate-500">31st June, 2022</dd>
                            </div>
                        </dl>
                        <div className="col-span-3 row-span-1">
                            <ul className="flex flex-row pl-0 text-gray-600">
                                {tags && tags.length > 0 && tags.map((tag: string, index: number) => (
                                    <li key={index} className="py-1">
                                        <div className="bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-green-200">
                                            <a className="" href="#">{tag}</a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <footer className="mb-2 mt-1">
                            <div className="flex place-content-between">
                                <OpenCommentsButton isOpen={showComments} onClick={() => setShowComments((prev) => !prev)} />
                                <OpenChatButton adInfo={{}} />
                            </div>
                        </footer>
                    </div>
                    <Comments isOpen={showComments} />
                </div>
            </CommentsProvider>
        </article>
    );
};

export default SingleAd;
