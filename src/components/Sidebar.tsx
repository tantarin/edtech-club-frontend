import React from "react";

export default function Sidebar() {
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">База знаний</h2>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-3 space-x-4 rounded-md"
                                >
                                    <span>Юридические аспекты</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-3 space-x-4 rounded-md"
                                >
                                    <span>Истории успеха</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-3 space-x-4 rounded-md"
                                >
                                    <span>Маркетинг и продвижение</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-3 space-x-4 rounded-md"
                                >
                                    <span>Финансы</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-3 space-x-4 rounded-md"
                                >
                                    <span>Полезные книги</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-12">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                </div>
                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
                    <div className="bg-cover bg-center text-center overflow-hidden"
                         style={{ minHeight: '500px', backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1')" }}
                         title="Woman holding a mug">
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div
                            className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                                <h1 className="text-gray-900 font-bold text-3xl mb-2">Revenge of the Never
                                    Trumpers</h1>
                                <p className="text-gray-700 text-xs mt-2">Written By:
                                    <a href="#"
                                       className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                        Ahmad Sultani
                                    </a> In
                                    <a href="#"
                                       className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                        Election
                                    </a>,
                                    <a href="#"
                                       className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                        Politics
                                    </a>
                                </p>

                                <p className="text-base leading-8 my-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type
                                    and scrambled it to make a type specimen book. It has survived not only five
                                    centuries, but also the
                                    leap into electronic typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                    recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>

                                <h3 className="text-2xl font-bold my-5">#1. What is Lorem Ipsum?</h3>

                                <p className="text-base leading-8 my-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type
                                    and scrambled it to make a type specimen book. It has survived not only five
                                    centuries, but also the
                                    leap into electronic typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                    recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>

                                <blockquote
                                    className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">Lorem
                                    Ipsum is simply
                                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard
                                    dummy text ever since the 1500s
                                </blockquote>

                                <p className="text-base leading-8 my-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type
                                    and scrambled it to make a type specimen book. It has survived not only five
                                    centuries, but also the
                                    leap into electronic typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                    recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>

                                <a href="#"
                                   className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    #Election
                                </a>,
                                <a href="#"
                                   className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    #people
                                </a>,
                                <a href="#"
                                   className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    #Election2020
                                </a>,
                                <a href="#"
                                   className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    #trump
                                </a>,<a href="#"
                                        className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                #Joe
                            </a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}