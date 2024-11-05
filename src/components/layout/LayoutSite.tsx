import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NavbarL from "./NavbarL/NavbarL";
import NavbarR from "./NavbarR/NavbarR";
interface ILayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<ILayoutSiteProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <div className={scss.nav}>
        <NavbarL/>
        <main>{children}</main>
        <NavbarR/>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutSite;
