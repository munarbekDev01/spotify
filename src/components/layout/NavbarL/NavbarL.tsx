import { FC } from "react";
import scss from "./NavbarL.module.scss";

const NavbarL: FC = () => {
  return (
    <section className={scss.NavbarL}>
      <div className="container">
        <div className={scss.content}>NavbarL</div>
      </div>
    </section>
  );
};

export default NavbarL;
