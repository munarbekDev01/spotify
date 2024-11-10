'use client'
import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MyMedia from "../pages/MyMedia/MyMedia";
import MainFooter from "./Footer/MainFooter";
interface ILayoutSiteProps {
    children: ReactNode
 
}
const LayoutSite: FC<ILayoutSiteProps> = ({children}) => {
  return (
    <div className={scss.LayoutSite}>
      <Header/>
      <div className={scss.mediaTec}>
        <MyMedia/>
        <div className={scss.main}>
     <main>{children}</main>
     <MainFooter/>

        </div>
      </div>
     <Footer/>
    </div>
  );
};

export default LayoutSite;

