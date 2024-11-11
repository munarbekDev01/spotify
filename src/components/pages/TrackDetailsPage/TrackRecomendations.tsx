"use client"
import { FC } from "react";
import scss from "./TrackRecomendations.module.scss";
import MusicListCard from "../MusicListCard/MusicListCard";
import { useGetTrackWithIdQuery } from "@/redux/api/spotify";
import { useParams } from "next/navigation";

const TrackRecomendations: FC = () => {
  const {track_id} = useParams()
  

  const validPlaylistId = typeof track_id === "string" ?track_id : "";
  const { data } =
    useGetTrackWithIdQuery(validPlaylistId);
    console.log(data, 'trac');
    

  return (
    <section className={scss.TrackRecomendations}>
      <div className={scss.content}>
        <div className={scss.headText}>
          <h1>
            Рекомендации <br /> <span>На основе этого трека </span>
          </h1>
        </div>
        <div className="">
          {
          
          }
          {/* <MusicListCard /> */}
        </div>
      </div>
    </section>
  );
};

export default TrackRecomendations;
