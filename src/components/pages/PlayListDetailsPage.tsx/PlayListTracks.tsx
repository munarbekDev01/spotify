"use client";
import { FC } from "react";
import scss from "./PlayListTracks.module.scss";
import MusicListCard from "../MusicListCard/MusicListCard";
import { useGetPlaylistTracksWithIdQuery } from "@/redux/api/spotify";
import { useParams } from "next/navigation";

const PlayListTracks: FC = () => {
  const { playlist_id } = useParams();
  const validPlaylistId = typeof playlist_id === "string" ? playlist_id : "";
  const { data: playListTracks } =
    useGetPlaylistTracksWithIdQuery(validPlaylistId);
  return (
    <section className={scss.PlayListTracks}>
      <div className={scss.content}>
        <div className={scss.headText}></div>
        <div className="">
          {playListTracks?.items?.map((el, idx) => (
            <MusicListCard key={idx} el={el} idx={idx} />
          )) || <p>Нет треков в этом плейлисте</p>}
        </div>
      </div>
    </section>
  );
};

export default PlayListTracks;
