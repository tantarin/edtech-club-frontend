import React from "react";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Newsletter() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-8 sm:py-12 lg:py-16"> {/* Уменьшенный внутренний отступ py */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8"> {/* Уменьшенный внутренний отступ py */}
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2"> {/* Уменьшенный внутренний отступ gap-y */}
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Подписывайтесь на рассылку</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:pt-2"> {/* Уменьшенный внутренний отступ gap-y */}
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">Статьи еженедельно</dt>
                            <dd className="mt-2 leading-7 text-gray-400">

                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">Никакого спама</dt>
                            <dd className="mt-2 leading-7 text-gray-400">

                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-4">
                <div
                    className="aspect-[973/578] w-[60rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}
