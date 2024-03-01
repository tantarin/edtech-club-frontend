import React, { FC } from "react";
import "./About.css";
import managerImage from "./cheff.jpg";
import InstagramIcon from "./icons/InstagramIcon";
import PhoneIcon from "./icons/PhoneIcon";
import MailIcon from "./icons/MailIcon";
import {Link} from "react-router-dom";

export const AboutPage: FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="background" />
      </section>
      <section className="about-more">
        <div className="about-more__container">
          <div className="about-more__left">
            <h2 className="about-more__title">EduTech Club</h2>
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
      <section className="about__social-section">
        <ul className="about__social-links">
          <li className="about__social-links-item">
            <a
              className="about__social-link"
              href="tel:+89147449927"
              target="_blank"
              rel="noreferrer"
            >
              <PhoneIcon />
              +8 914 744 99 27
            </a>
          </li>
          <li className="about__social-links-item">
            <a
              className="about__social-link"
              href="https://instagram.com/edtech"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
              @edtech
            </a>
          </li>
          <li className="about__social-links-item">
            <a
              className="about__social-link"
              href="mailto:edtech@mail.ru"
              target="_blank"
              rel="noreferrer"
            >
              <MailIcon />
              edtech@mail.ru
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
