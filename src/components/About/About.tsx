import {FC} from "react";
import styles from  "./About.module.css"
import Contacts from "./Contacts";
import Info from "./Info";
import {HerzenImg} from "../../assets/img";


export const AboutPage: FC = () => {
    return (
        <section className="py-4 md:py-16">
            <div className="d-flex md:flex-row flex-col gap-8 items-start relative">
                <div>
                    <h1 className="font-bold text-3xl md:text-4xl md:mt-3 mb-9 text-black">
                        О нас, Мы площадка для вовлечения студентов и преподавателей
                    </h1>
                    <div
                        className="text-zinc-800 font-light ">
                        <div className="mb-6 md:mb-0">
                            <Info/>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src={HerzenImg} className={styles.background} alt="Герцен" />
                    <Contacts/>
                </div>
            </div>
        </section>
    )
}
