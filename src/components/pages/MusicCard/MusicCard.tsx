"use client";
import { FC } from "react";
import scss from "./MusicCard.module.scss";
import { useRouter } from "next/navigation";

const MusicCard: FC<{ el: any }> = ({ el }) => {
  const router = useRouter();
  return (
    <section className={scss.MusicCard}>
      <div
        onClick={() => router.push(`playlist/${el.id}`)}
        className={scss.content}
      >
        <div key={el.id} className={scss.card}>
          <div className={scss.imageWrapper}>
            <img
              src={
                "data:image/jpeg;base64,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 "
              }
              alt={el.name}
              className={scss.playlistImage}
            />
            <div className={scss.overlay}>
              <button className={scss.playButton}>▶</button>
            </div>
          </div>
          <div className={scss.details}>
            <p className={scss.title}>{el.name}</p>
            <p className={scss.description}>
              {el.description || "Описание не указано"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicCard;
