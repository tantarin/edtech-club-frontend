import React from "react";
import InstagramIcon from "./icons/InstagramIcon";
import PhoneIcon from "./icons/PhoneIcon";
import MailIcon from "./icons/MailIcon";

const Footer: React.FC = () => {
    return (
        <footer className="about__social-section">
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
        </footer>
    );
};

export default Footer;
