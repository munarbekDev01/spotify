"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import { ImSpotify } from "react-icons/im";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { MdOutlineRateReview } from "react-icons/md";
import Link from "next/link";
import { useGetSeveralPlaylistQuery, useLazyGetPlaylistWithIdQuery } from "@/redux/api/spotify";
// import axios from "axios";

const Header: FC = () => {
  const router = useRouter();

  const number = 10
  console.log(number);
  


  //  useEffect(() => {
  //   axios.post('https://accounts.spotify.com/api/token').then((res) => {
  //     console.log(res);
  //   })
  // }, [])
  const {data} = useGetSeveralPlaylistQuery()
  
  console.log(data);
  

  const handleLogin = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/login`,
      "_self"
    );
  };

  const handleLogout = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/logout`,
      "_self"
    );
  };

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            <ImSpotify />
          </h1>
          <div className={scss.nav}>
            <Link className={scss.home} href="/">
              <GoHomeFill />
            </Link>

            <div className={scss.inp}>
              <input type="text" placeholder="Что хочешь включить?" />
              <button className={scss.search}>
                <IoIosSearch />
              </button>
              <button className={scss.review}>
                <div className={scss.line}>

                </div>
                <Link href={"/music"}>
                  <MdOutlineRateReview />
                </Link>
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
            <button
              className={scss.registr}
              onClick={handleLogout}
            >
              Зарегистрироваться
            </button>
            <button
              className={scss.auth}
              onClick={handleLogin}
              
            >
             
              Войти
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
