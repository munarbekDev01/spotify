import { FC } from "react";
import scss from "./SignUp.module.scss";
import Link from "next/link";
import { ImSpotify } from "react-icons/im";
import Image from "next/image";
import apple from "../../assets/img/apple.png";
import facebook from "../../assets/img/facebook.jpeg";
import google from "../../assets/img/google.png";

const SignUp: FC = () => {
  return (
    <section className={scss.SignUp}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.textSignUp}>
            <Link href={"/"}>
              <ImSpotify />
            </Link>
            <h1>
              Зарегистриру
              <br />
              йтесь и погрузитесь в музыку
            </h1>
          </div>
          <div className={scss.LoginData}>
            <div className={scss.email}>
              <p>Электронная почта или имя пользователя</p>
              <input
                type="email"
                placeholder="Электронная почта или имя пользователя"
              />
            </div>

            <button type="submit" className={scss.BtnForData}>
              Далее
            </button>
          </div>
          <div className={scss.orLine}>
            <div className={scss.line}></div>
            <p>или</p>
            <div className={scss.line}></div>
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
        </div>
      </div>
    </section>
  );
};

export default SignUp;
