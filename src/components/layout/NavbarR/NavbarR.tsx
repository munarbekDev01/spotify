import { FC } from "react";
import scss from "./NavbarR.module.scss";

const NavbarR: FC = () => {
 return (
  <section className={scss.NavbarR}>
   <div className="container">
    <div className={scss.content}>NavbarR</div>
   </div>
  </section>
 );
};

export default NavbarR;