import { FC } from "react";
import scss from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
{/* <FaTwitter /> */}
{/* <FaInstagram /> */}
{/* <FaFacebook /> */}


const Footer: FC = () => {
 return (
  <footer className={scss.Footer}>
    <div className={scss.content}>
        <div className={scss.footerTop}>

        <div className={scss.text}></div>
        <div className={scss.text}></div>
        <div className={scss.text}></div>
        <div className={scss.text}></div>
        <div className=""></div>
        </div>
    </div>
  </footer>
 );
};

export default Footer;
