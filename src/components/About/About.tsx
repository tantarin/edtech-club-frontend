import React, { FC } from "react";
import "./About.css";
import managerImage from "./cheff.jpg";
import InstagramIcon from "../Footer/icons/InstagramIcon";
import PhoneIcon from "../Footer/icons/PhoneIcon";
import MailIcon from "../Footer/icons/MailIcon";
import {Link} from "react-router-dom";
import Footer from "../Footer/Footer";

export const AboutPage: FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="background" />
      </section>
      <section className="about-more">
        <div className="about-more__container">
          <div className="about-more__left">
            <h1 className="lg:text-3xl  font-bold leading-tight text-3xl">
              Мы - сообщество энтузиастов в образовании и технологиях
            </h1>
            <div className="about-more__description">
              <p>
                Особым направлением деятельности является
                развитие экспертизы в области EduTech.
              </p>
              <p>
                Ежегодно на регулярных сессиях эксперты в области Learning and
                Development, HR-специалисты крупнейших компаний, преподаватели
                вузов и бизнес-школ, а также поставщики образовательных решений
                делятся своим взглядом на то, как сделать обучение эффективным.
              </p>
              <p>
                Профессиональное сообщество EduTech Club делает опыт экспертов
                доступным для всех, кто интересуется современными подходами в
                образовании.
              </p>
            </div>
            <button className="about-more__button">Читать подробнее</button>
          </div>
          <div className="about-more__right">
            <div className="about-more__card">
              <h4 className="about-more__card__title">Присоединяйтесь!</h4>
              <p className="about-more__card__description">
                Зарегистрируйтесь и получите безграничный доступ к
                образовательным материалам сообщества: журналам, видео и
                новостям!
              </p>
                <Link className="about-more__card__button" to={"/register"}>Зарегистрироваться</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="about__management">
        <div className="about__managment-photos">
          <div className="about__manager">
            <img className="about__manager-img" src={managerImage} alt="Alex" />
            <div className="about__manager-info">
              <h4 className="about__manager-name">
                <b>Игорь Всеволод</b>
              </h4>
              <p className="about__manager-description">
                Руководитель{" "}
                <b>этого</b> клуба.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
