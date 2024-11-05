"use client";
import { FC, useState } from "react";
import scss from "./Header.module.scss";
import { ImSpotify } from "react-icons/im";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { MdOutlineRateReview } from "react-icons/md";
import Home from "@/components/pages/HomeSections/Home";
import Link from "next/link";

const Header: FC = () => {
  const router = useRouter();
  const [regis, setRegis] = useState(false);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            <ImSpotify />
          </h1>
          <div className={scss.nav}>
            <Link className={scss.home} href="/home"><GoHomeFill /></Link>
            
            <div className={scss.inp}>
              <input type="text" placeholder="Что хочешь включить?" />
              <button className={scss.search}>
                <IoIosSearch />
              </button>
              <button className={scss.review}>
                <Link href={"/music"}><MdOutlineRateReview /></Link>
              </button>
            </div>
          </div>

          <div className={scss.Btns}>
            
            <button className={scss.bell}>
              <FaBell />
            </button>
            <button className={scss.user}>
              <FaRegUser />
            </button>
            <button className={scss.registr} onClick={() => router.push("/auth/signup")}>
              {" "}
              Зарегистрироваться{" "}
            </button>
            <button className={scss.auth} onClick={() => router.push("/auth/login")}> Войти </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
