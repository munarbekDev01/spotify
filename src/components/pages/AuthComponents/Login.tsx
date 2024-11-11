"use client";

import { FC, useState } from "react";
import scss from "./Login.module.scss";
import Link from "next/link";
import { ImSpotify } from "react-icons/im";
import apple from "../../assets/img/apple.png";
import facebook from "../../assets/img/facebook.jpeg";
import google from "../../assets/img/google.png";
import Image from "next/image";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Login: FC = () => {
  const [eyeForPassword, setEyeForPassword] = useState(false);
  const router = useRouter();
  return (
    <section className={scss.Login}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <Link href={"/"}>
              <ImSpotify />
            </Link>
            <h1>Войти в Spotify</h1>
          </div>
          <div className={scss.btnForLigin}>
            <button>
              <Image src={google} alt="" />
              Войти через Google
            </button>
            <button>
              <Image src={facebook} alt="" />
              Войти через Facebook
            </button>
            <button>
              <Image src={apple} alt="" />
              Войти через Apple
            </button>
          </div>
          <div className={scss.line}></div>
          <form>
            <div className={scss.LoginData}>
              <div className={scss.email}>
                <p>Электронная почта или имя пользователя</p>
                <input
                  type="email"
                  placeholder="Электронная почта или имя пользователя"
                />
              </div>
              <div className={scss.password}>
                <p>Пароль</p>
                <input
                  type={eyeForPassword ? "text" : "password"}
                  placeholder="Пароль"
                />
                <div className={scss.iconEye}>
                  {(eyeForPassword && (
                    <a
                      onClick={() =>
                        eyeForPassword
                          ? setEyeForPassword(false)
                          : setEyeForPassword(true)
                      }
                    >
                      <FaRegEye />
                    </a>
                  )) || (
                    <a
                      onClick={() =>
                        eyeForPassword
                          ? setEyeForPassword(false)
                          : setEyeForPassword(true)
                      }
                    >
                      <FaRegEyeSlash />
                    </a>
                  )}
                </div>
              </div>
              <button type="submit" className={scss.BtnForData}>
                Войти
              </button>
            </div>
          </form>
          <div className={scss.forgotOrSignUp}>
            <span>Забыли пароль?</span>
            <p>
              Нет аккаунта?{" "}
              <span onClick={() => router.push("/auth/signup")}>
                Регистрация в Spotify
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
