"use client";
import { FC, useEffect, useState } from "react";
import scss from "./TrackDetails.module.scss";
import foto from "../../assets/img/foto.jpeg";
import Image from "next/image";
import {
  useGetArtistsDataQuery,
  useGetTrackWithIdQuery,
} from "@/redux/api/spotify";
import { useParams } from "next/navigation";

const TrackDetails: FC = () => {
  const { track_id } = useParams();
  const validPlaylistId = typeof track_id === "string" ? track_id : "";
  const { data } = useGetTrackWithIdQuery(validPlaylistId);
  const [artistIds, setArtistIds] = useState<string[]>([]);

  useEffect(() => {
    if (data?.artists) {
      setArtistIds(data.artists.map((el) => el.id));
    }
  }, [data]);
  
  const { data: artistData } = useGetArtistsDataQuery(artistIds);

  return (
    <section className={scss.TrackDetails}>
      <div className={scss.content}>
        <div className={scss.fotoForArt}>
          <div className={scss.fotoForArt}>
            {data?.album.images[0]?.url ? (
              <Image
                width={150}
                height={150}
                src={data.album.images[0].url}
                alt=""
              />
            ) : null}
          </div>
        </div>
        <div className={scss.textData}>
          <p>{`Трек`}</p>
          <h1>{data?.album.name}</h1>
          <p>
            <Image
              src={
                artistData?.images && artistData?.images[0]?.url
                  ? artistData.images[0].url
                  : foto
              }
              alt="Artist"
              width={50}
              height={50}
            />
            {data?.album.artists.map((el) => el.name).join(", ")}•
            {data?.album.name}•{`2021`}•{`2:38`}•{`4 869 450`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrackDetails;
