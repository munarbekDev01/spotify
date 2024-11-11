"use client";
import { FC, useEffect, useRef, useState } from "react";
import scss from "./MusicListCard.module.scss";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import { FaPlay, FaPause } from "react-icons/fa6";
import { CgAdd } from "react-icons/cg";
import { AiOutlinePlus, AiOutlineShareAlt } from "react-icons/ai";
import { FaRecordVinyl, FaSpotify, FaUserAlt } from "react-icons/fa";
import { IoIosRadio } from "react-icons/io";
import { MdQueueMusic } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";

const MusicListCard: FC = ({ el, idx }: any) => {
  const { track } = el;
  const router = useRouter();
  const pathName = usePathname();
  const playlisPathName = pathName.slice(0, 9) === "/playlist" ? true : false;
  const [check, setCheck] = useState(true);
  const [play, setPlay] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const img = track?.album?.images[0]?.url || "/default-image.jpg";

  console.log(img, "sd");

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
    <section className={scss.MusicListCard}>
      <div className={scss.content}>
        <div className={scss.imgAndName}>
          {!playlisPathName ? null : (
            <a className={scss.idx2} onClick={() => setPlay(!play)}>
              {play ? <FaPause /> : <FaPlay />}
            </a>
          )}
          {playlisPathName ? (
            <h5
              className={scss.idx}
              style={{
                width: "10px",
                fontWeight: "100",
              }}
            >
              {idx + 1}
            </h5>
          ) : null}
          <div className={scss.foto}>
            <Image width={64} height={64} src={img} alt="" />
            {playlisPathName ? null : (
              <a onClick={() => setPlay(!play)}>
                {play ? <FaPause /> : <FaPlay />}
              </a>
            )}
          </div>
          <div className={scss.nameData}>
            <p onClick={() => router.push(`/track/${track.id}`)}>
              {`${track.name}`}{" "}
            </p>
            <a>{track.artists.map((el: any) => el.name)}</a>
          </div>
        </div>
        {(playlisPathName && (
          <p className={scss.numbersViewer}>{track.album.name} </p>
        )) || <p className={scss.numbersViewer}>{"11213"} </p>}
        <div className={scss.addTime}>
          <span className={scss.check} onClick={() => setCheck(!check)}>
            {check ? <CiCirclePlus /> : <FaCircleCheck />}
          </span>
          <span>{"2:54"}</span>
          <div className={scss.modDot}>
            <a onClick={() => setShowModal(!showModal)}>
              <BsThreeDots />
            </a>
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
      </div>
    </section>
  );
};

export default MusicListCard;
