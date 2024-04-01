import React from "react";
import Background from '../../assets/img/art.jpg';

export default function Article() {
    return (
        <div className="flex">
            <div className="container mx-auto mt-12">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                </div>
                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
                    <div className="bg-cover bg-center text-center overflow-hidden"
                         style={{ minHeight: '500px', backgroundImage: `url(${Background})` }}
                         title="Woman holding a mug">
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div
                            className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                                <h1 className="text-gray-900 font-bold text-3xl mb-2">Клуб образовательных стартапов</h1>
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
                                    Первая встреча сообщества по исследованию рынка образовательных технологий EdTech. Будут обсуждаться идеи для образовательных инноваций и стартапов, планируются встречи с представителями рынка, подготовка, презентация, питчинг проектов, поиск наставников, встречи с потенциальными инвесторами.

                                </p>

                                <h3 className="text-2xl font-bold my-5">В программе</h3>

                                <p className="text-base leading-8 my-5">
                                    Открытие EdTech Startup Club - Эльвира Михайловна Ребко, проректор по инновационной деятельности и информационным технологиям

                                    Презентация Фонда содействия инновациям, представительство в Санкт-Петербурге — Павел Александрович Аркин, заместитель генерального директора по инновациям Холдинга «Ленполиграфмаш»

                                    Лекция «Перспективы рынка EdTech» - Виктор Владимировича Тимченко, доцент кафедры управления образованием и кадрового менеджмента РГПУ им. А.И. Герцена
                                </p>

                                <blockquote
                                    className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                                    Дискуссия: «Возможности нетехнических вузов в создании технологических стартапов»
                                </blockquote>

                                <p className="text-base leading-8 my-5">
                                    Российский EdTech наиболее активно развивается в сегменте онлайн-образования.По данным совместного исследования TalentTech и «Нетологии», в конце 2019 года объем российского b2c-рынка онлайн-образования составил 38,5 млрд рублей при среднегодовых темпах роста на уровне 20%.

                                    В соответствии с прогнозом аналитиков, к 2023 году он должен достичь отметки в 60 млрд рублей. 2020 год стал прорывным для отрасли и значительно ускорил ее развитие — рост составил 30-35%. По оценке экспертов, тренд сохранится и в 2021 году.
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