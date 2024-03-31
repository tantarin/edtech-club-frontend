import React from "react";
import clsx from "clsx";

interface AdData {
    id: bigint;
    header: string;
    content: string;
}

const SingleAd: React.FC<AdData> = ({ id, header, content }) => {
    return (
        <div className={clsx("root", "rounded-[10px]")}>
            <div id="dismiss-card" className="flex flex-col bg-white rounded-lg dark:shadow-slate-700/[.9]">
                <div className="inline-flex justify-between items-center rounded-t-xl py-1 px-4 md:py-1 md:px-2 dark:bg-gray-800">
                    <a href="#dismiss-card" className="ml-auto">
                        <button
                            type="button"
                            className="inline-flex justify-center items-center size-4 rounded-lg text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                            data-hs-remove-element="#dismiss-card"
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
            <a className="relative block px-6 py-2 overflow-hidden bg-white border-slate-100 rounded-lg" href="">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                <div className="justify-between sm:flex">
                    <div>
                        <h5 className="text-xl font-bold text-slate-900">{header}</h5>
                        <p className="mt-1 text-xs font-medium text-slate-600">
                            By Ana Doe
                        </p>
                    </div>

                    <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <img
                            className="object-cover w-16 h-16 rounded-lg shadow-sm"
                            src={`https://github.com/creativetimofficial/argon-design-system/blob/master/assets/img/faces/team-${id}.jpg?raw=true`}
                            alt=""
                        />
                    </div>
                </div>

                <div className="mt-4 sm:pr-8">
                    <p className="text-sm text-slate-500">{content}</p>
                </div>

                <dl className="flex mt-6">
                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-slate-600">Опубликовано</dt>
                        <dd className="text-xs text-slate-500">31st June, 2022</dd>
                    </div>
                </dl>
            </a>
            </div>
        </div>
    );
};

export default SingleAd;
