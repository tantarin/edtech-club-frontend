import Background from '../../../assets/img/wiki.jpg';

const IntroPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
            <div className="bg-cover bg-center text-center overflow-hidden"
                style={{ minHeight: '500px', backgroundImage: `url(${Background})` }}
                title="Woman holding a mug">
            </div>
            <div className="max-w-3xl mx-auto">
                <div
                    className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                        <h1 className="text-gray-900 font-bold text-3xl mb-2">Что такое EdTech</h1>
                        <p className="text-base leading-8 my-5">
                            В медиа EdTech часто выступает синонимом онлайн-образования, однако на самом деле это понятие гораздо шире и включает весь набор цифровых инструментов, направленных на повышение эффективности образовательного процесса.

                            Помимо онлайн-школ, интерактивных курсов и образовательных приложений, на рынке представлены разработчики электронных систем для образовательных учреждений, обучающего оборудования, VR-тренажеров, платформ для корпоративного обучения и других продуктов.
                        </p>

                        <h3 className="text-2xl font-bold my-5">Рынок EdTech</h3>

                        <p className="text-base leading-8 my-5">
                            Образование — одна из крупнейших в мире отраслей, на долю которой приходится более 6% ВВП. По прогнозу аналитиков Holon IQ, к 2025 году совокупный объем глобального рынка образования составит $7,3 трлн.
                            При этом проникновение технологий в отрасль все еще остается низким — на цифру приходится менее 4% от общих расходов на образование. В абсолютных числах совокупный объем вложений в цифровую трансформацию индустрии составил $227 млрд в 2020 году.

                            Ожидается, что пандемия COVID-19 и связанные с ней карантинные ограничения окажут долгосрочное влияние на образование, и к 2025 году рынок EdTech удвоится — мы увидим обновление инфраструктуры и появление новых цифровых бизнес-моделей.
                        </p>

                        <blockquote
                            className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                            В современном мире EdTech представляет собой не просто онлайн-образование,
                            а целую экосистему цифровых инструментов, направленных на развитие обучения и повышение его эффективности.
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
    );
}

export default IntroPage;