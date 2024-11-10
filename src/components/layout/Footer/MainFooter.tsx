import { FC } from "react";
import scss from "./MainFooter.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const MainFooter: FC = () => {
 return (
  <section className={scss.MainFooter}>
    <div className={scss.content}>
        <div className={scss.footerTop}>
            <div className={scss.text}>
                <h5>Компания</h5>
                <p>О нас</p>
                <p>Вакансии</p>
                <p>For the Record</p>
            </div>
            <div className={scss.text}>
                <h5>Сообщества</h5>
                <p>Для исполнителей</p>
                <p>Для разработчиков
</p>
<p>Реклама
</p>
<p>Для инвесторов</p>
<p>Для вендоров
</p>
            </div>
            <div className={scss.text}>
                <h5>Полезные ссылки

</h5>
<p>Справка
</p>
<p>Бесплатное мобильное</p>
<p>приложение</p>
            </div>

            <div className={scss.text}>
                <h5>Планы Spotify</h5>
                <p>Индивидуальная подписка Spotify Premium</p>
                <p>Premium для двоих</p>
                <p>Premium для семьи</p>
                <p>Premium для студентов
</p>
<p>Бесплатная версия Spotify
</p>
            </div>
            <div className={scss.icons}>
                <a>
<FaInstagram />

                </a>
                <a>
<FaTwitter />


                </a>
                <a>
<FaFacebook />


                </a>
            </div>
        </div>
    </div>
  </section>
 );
};

export default MainFooter;
