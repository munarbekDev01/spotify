"use client";
import { FC, useState } from "react";
import scss from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
{
    /*  */
}
{
    /* <FaInstagram /> */
}
{
    /*  */
}

const Footer: FC = () => {
    const [showAll, setShowAll] = useState(false);
    return (
        <footer className={scss.Footer}>
            <div className="container">
                <div className={scss.content}>
                    <div
                        className={scss.company}
                        style={{
                            width: "100px",
                        }}
                    >
                        <h3>Компания</h3>
                        <b className={showAll ? scss.notCart : scss.cart}>
                            О нас
                        </b>
                        <b>Вакансии</b>
                        <b>For the Record</b>
                    </div>
                    <div
                        className={scss.company}
                        style={{
                            width: "160px",
                        }}
                    >
                        <h3>Сообщества</h3>
                        <b>Для исполнителей</b>
                        <b>Для разработчиков</b>
                        <b>Реклама</b>
                        <b>Для инвесторов</b>
                        <b>Для вендоров</b>
                    </div>
                    <div className={scss.company}>
                        <h3>Полезные ссылки</h3>
                        <b>Справка</b>
                        <b>Бесплатное мобильное приложение</b>
                    </div>
                    <div className={scss.company}>
                        <h3>Планы Spotify</h3>
                        <b>Индивидуальная подписка Spotify Peremium</b>
                        <b>Premium для двоих</b>
                        <b>Premium для семьи</b>
                        <b>Premium для студентов</b>
                        <b>Бесплатная версия Spotify</b>
                    </div>
                    <div className={scss.companyySite}>
                        <a href="https://www.instagram.com/spotify">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/spotify">
                            <FaTwitter />
                        </a>
                        <a href="https://www.facebook.com/Spotify">
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
