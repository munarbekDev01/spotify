"use client"
import { FC, useEffect, useRef, useState } from "react";
import scss from "./MusicListCard.module.scss";
import Image from "next/image";
import foto from "../../assets/img/foto.jpeg";
import { BsThreeDots } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import { FaPlay, FaPause } from "react-icons/fa6";
import { CgAdd } from "react-icons/cg";
import {
    AiOutlinePlus,
    AiOutlineShareAlt,
  } from "react-icons/ai";
  import {
    FaRecordVinyl,
    FaSpotify,
    FaUserAlt,
  } from "react-icons/fa";
  import { IoIosRadio } from "react-icons/io";
import { MdQueueMusic } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";

const MusicListCard: FC = () => {
  const [check, setCheck] = useState(false);
  const [play, setPlay] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
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
        <div className={scss.foto}>
            <Image src={foto} alt=""/>
            <a  onClick={() => setPlay(!play)}>
            {play ? <FaPause /> : <FaPlay />}
          </a>
        </div>
        <div className={scss.nameData}>
            <p>{`жаным ау сен`} </p>
            <a >Raim</a>
        </div>

        </div>
        <p className={scss.numbersViewer}>2 667 384 </p>
        <div className={scss.addTime}>
            <a className={scss.check} onClick={() => setCheck(!check)}> {check ? (
              <CiCirclePlus  />
            ) : (
              <FaCircleCheck />
            )}</a>
            <span>{"2:54"}</span>
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
                  <li onClick={() => {
                    setShowModal(false);
                    setCheck(!check);
                  }}>
                    {check ? <CgAdd style={{ fontSize: "20px" }} /> :  <FaCircleCheck />}
                    {check ? "Добавить в любимые треки" : "Удалить из любимых треков"}
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
