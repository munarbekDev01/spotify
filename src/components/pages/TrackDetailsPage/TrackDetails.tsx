import { FC } from "react";
import scss from "./TrackDetails.module.scss";
import foto from "../../assets/img/foto.jpeg";
import Image from "next/image";
const TrackDetails: FC = () => {
 return (
  <section className={scss.TrackDetails}>
    <div className={scss.content}>

       <div className={scss.fotoForArt}>
        <Image src={foto} alt="" />
        </div>
        <div className={scss.textData}>
        <p>{`Трек`}</p>
        <h1>{`Шыда`}</h1>
        <p><Image src={foto} alt="" /> {`Жугунсов Мирас`}•{`Шыда`}•{`2021`}•{`2:38`}•{`4 869 450`}</p>
        </div>
    </div>
  </section>
 );
};

export default TrackDetails;
