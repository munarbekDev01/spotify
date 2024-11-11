"use client";
import { FC, useEffect } from "react";
import scss from "./PlayListDetails.module.scss";
import { useParams } from "next/navigation";
import { useGetSeveralPlaylistQuery } from "@/redux/api/spotify";
import Image from "next/image";

const PlayListDetails: FC = () => {
  const { playlist_id } = useParams();

  const { data: playlistDetails } = useGetSeveralPlaylistQuery();

  const date = playlistDetails?.items.filter((el) => el.id === playlist_id);

  const img = date?.[0]?.images[0]?.url || "/default-image.jpg";

  return (
    <section className={scss.PlayListDetails}>
      <div className={scss.content}>
        <div className={scss.fotoForArt}>
          <Image width={640} height={640} src={img} alt="Плейлист" />
        </div>

        <div className={scss.textData}>
          <p>{`Плейлист`}</p>
          <h1>{date?.map((el) => el.name)}</h1>
          <p>{date?.map((el) => el.description)}</p>
          <p>
            {date?.map((el) => el.owner.display_name)}•
            {`${date?.map((el) => el.tracks.total)} треков`},{` 2:38 мин`}.
            {`4 869 сек`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlayListDetails;
