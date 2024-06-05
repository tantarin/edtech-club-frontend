import Background from '../../../assets/img/wiki.jpg';

const OrganizationPage = () => {
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
                        <h1 className="text-gray-900 font-bold text-3xl mb-2">Регистрация ООО</h1>
                        <p className="text-base leading-8 my-5">
                            Это тот самый момент, когда стартап дорос до серьезной игры:

                            обороты растут, нужно начинать выплачивать дивиденды учредителям (то прибыль, которую можно распределять после уплаты всех налогов, расходов и это уже успех)!);
                            появились планы выхода на международные рынки (тут тоже хватает нюансов для отдельного материала);
                            необходимо зарегистрировать доли основателей во избежание возможных недоразумений;
                            пора привлекать инвесторов, которые тоже захотят свою долю в уставном капитале ООО piece of cake — как ключевой фактор;
                        </p>

                        <h3 className="text-2xl font-bold my-5">Deadlock</h3>

                        <p className="text-base leading-8 my-5">
                            Это очень частая ситуация — распределение долей основателей 50/50.

                            Результатом является возникновение deadlock — так называемого корпоративного конфликта, когда каждая сторона имеет одинаковые полномочия, но разное видение ситуации. В ООО все ключевые решения принимаются на общем собрании участников общества большинством голосов. А в условиях корпоративного конфликта двух равноправных участников такие решения, как например переизбрание Генерального директора, принять невозможно. И разрешить такой конфликт не получится даже в судебном порядке. Поэтому проекты с 2+ фаундерами в идеале должны иметь распределение не менее чем 51/49 из 100% .
                        </p>

                        <blockquote
                            className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                            Ключевые недостатки — это достаточно сложный (особенно для новичка) документооборот, совсем другие налоговые отчисления, серьезные размеры штрафов (правда, в случае с самозанятостью и ИП отвечать за все ошибки стартапер будет в том числе и своим имуществом, а в ООО — только имуществом компании).
                        </blockquote>

                        <p className="text-base leading-8 my-5">
                            Регистрировать ООО имеет смысл только тогда, когда есть четкое практическое понимание монетизации проекта и денег хватит и на все налоги-зарплаты и как минимум на рост. Или когда вы доросли до оформления долей, привлечения внешних инвестиций, или на горизонте видны дивиденды.
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

export default OrganizationPage;