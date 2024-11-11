"use client";
import { FC, useState, useRef, useEffect } from "react";
import scss from "./TrackPlayBtnText.module.scss";
import { FaPlay, FaPause, FaCircleCheck } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { CgAdd } from "react-icons/cg";
import { IoIosRadio } from "react-icons/io";
import foto from "../../assets/img/foto.jpeg";
import { AiOutlinePlus, AiOutlineShareAlt } from "react-icons/ai";
import { FaRecordVinyl, FaSpotify, FaUserAlt } from "react-icons/fa";
import { MdQueueMusic } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useGetArtistsDataQuery, useGetTrackWithIdQuery } from "@/redux/api/spotify";

const TrackPlayBtnText: FC = () => {
  const [check, setCheck] = useState(false);
  const [play, setPlay] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [artistIds, setArtistIds] = useState<string[]>([]);
  const { track_id } = useParams();
  const validPlaylistId = typeof track_id === "string" ? track_id : "";
  const { data } = useGetTrackWithIdQuery(validPlaylistId);
  useEffect(() => {
    if (data?.artists) {
      setArtistIds(data.artists.map((el) => el.id));
    }
  }, [data]);
  
  const { data: artistData } = useGetArtistsDataQuery(artistIds);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className={scss.TrackPlayBtnText}>
      <div className={scss.content}>
        <div className={scss.btnForPlay}>
          <a onClick={() => setPlay(!play)}>
            {play ? <FaPause /> : <FaPlay />}
          </a>
          <p onClick={() => setCheck(!check)}>
            {check ? (
              <CgAdd style={{ color: "white", fontSize: "35px" }} />
            ) : (
              <FaCircleCheck />
            )}
          </p>
          <div className={scss.modDot}>
            <span onClick={() => setShowModal(!showModal)}>
              <BsThreeDots />
            </span>
            {showModal && (
              <div className={scss.modal} ref={modalRef}>
                <ul>
                  <li>
                    <AiOutlinePlus />
                    Добавить в плейлист
                  </li>
                  <li
                    onClick={() => {
                      setShowModal(false);
                      setCheck(!check);
                    }}
                  >
                    {check ? (
                      <CgAdd style={{ fontSize: "20px" }} />
                    ) : (
                      <FaCircleCheck />
                    )}
                    {check
                      ? "Добавить в любимые треки"
                      : "Удалить из любимых треков"}
                  </li>
                  <li>
                    <MdQueueMusic />
                    Добавить в очередь
                  </li>
                  <li>
                    <IoIosRadio />К радио по треку
                  </li>
                  <li>
                    <FaUserAlt />К исполнителю
                  </li>
                  <li>
                    <FaRecordVinyl /> К альбому
                  </li>
                  <li>
                    <GiMusicalNotes />
                    Посмотреть сведения
                  </li>
                  <li>
                    <AiOutlineShareAlt />
                    Поделиться
                  </li>
                  <li>
                    <FaSpotify />
                    Открыть в приложении для компьютера
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className={scss.textData}>
          <div className={scss.songText}>
            <h1>Текст</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
              deserunt perspiciatis quo quia praesentium nisi porro. Quas, dicta
              modi repellendus magni minima assumenda veniam alias sapiente,
              natus quae doloremque quo amet saepe eveniet culpa maxime. Sed,
              perferendis autem, eveniet iure voluptatem minus voluptatibus unde
              ducimus rem eos officia saepe esse fugit, itaque dolore.
              Reprehenderit magnam repellendus, dolores excepturi ex quod
              voluptatibus eius earum voluptate est ullam, dolorum ratione
              veritatis et? Optio eligendi ipsa voluptates consequatur,
              provident quisquam libero ipsam quibusdam beatae cumque nesciunt
              iusto atque est, blanditiis dolorum, culpa alias. Odio cumque quos
              nobis porro, laborum repudiandae ad. Laboriosam sunt quasi tenetur
              cum ab accusantium magni itaque dolore? Quasi quidem, magni
              molestiae quisquam ipsum eum provident accusantium vero ipsa
              nesciunt ducimus fuga, voluptate sapiente porro laborum eaque
              laudantium cumque et. Adipisci amet, quas facilis, maxime
              laboriosam unde accusamus
            </p>
          </div>
          <div className={scss.maker}>
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
            <div className="">
              <span>Исполнитель</span>
              <p>{`Мирбек Атабеков`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackPlayBtnText;
