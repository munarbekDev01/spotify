import { FC } from "react";
import scss from "./TrackRecomendations.module.scss";
import MusicListCard from "../MusicListCard/MusicListCard";

const TrackRecomendations: FC = () => {
  return (
    <section className={scss.TrackRecomendations}>
      <div className={scss.content}>
        <div className={scss.headText}>

        <h1>Рекомендации <br /> <span>На основе этого трека     </span></h1>
        </div>
        <div className="">
            <MusicListCard/>
            <MusicListCard/>
            <MusicListCard/>
            <MusicListCard/>
        </div>
      </div>
    </section>
  );
};

export default TrackRecomendations;
