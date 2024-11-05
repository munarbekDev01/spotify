"use client"
import { FC } from "react";
import scss from "./Header.module.scss";
import { ImSpotify } from "react-icons/im";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header: FC = () => {
    const router = useRouter()
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>header</h1>
          <div className={scss.Btns}>
            <button onClick={() => router.push('/auth/signup')}> Зарегистрироваться </button>
            <button onClick={() => router.push('/auth/login')}> Войти </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
