import {FC} from "react";
import "./About.css"


export const AboutPage: FC = () => {
    return (
        <section className="py-8 md:py-16 dark:bg-zinc-900 border-t dark:border-zinc-600 ">
            <div className="background">

            </div>
            <div className="m3o-container">
                <h1 className="font-bold text-2xl md:text-3xl text-center mb-8 dark:text-white text-black">
                    О нас
                </h1>
                <div className="md:grid md:grid-cols-1 m-auto max-w-md md:gap-4 text-zinc-800 font-light dark:text-zinc-300">
                    <div className="mb-6 md:mb-0">
                        <p className="mb-4">
                            Площадка для вовлечения студентов и преподавателей в инновационную деятельность по разработке педагогических технологий,
                            основанных на использовании новых технических и технологических решений - искусственного интеллекта,
                            машинного обучения, виртуальной реальности, робототехники, новых материалов. Идея создания клуба
                            заключается в кооперации специалистов, обладающих взаимодополняющими компетенциями, - педагогов,
                            экономистов, программистов, дизайнеров - для создания EdTech-проектов, поиска инвесторов, заказчиков,
                            грантодателей, партнеров и наставников, развития проектных команд, подготовки и продвижения этих проектов.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}