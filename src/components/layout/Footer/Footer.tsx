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
   <div className="container">
    <div className={scss.content}>
        <h1>footer</h1>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
