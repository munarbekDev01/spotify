import { FC } from "react";
import scss from "./Home.module.scss";

const Home: FC = () => {
 return (
  <section className={scss.Home}>
   <div className="container">
    <div className={scss.content}>
        <h1>home</h1>
    </div>
   </div>
  </section>
 );
};

export default Home;
