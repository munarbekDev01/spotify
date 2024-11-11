"use client";
import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import scss from "./PlayListBtnText.module.scss";
import { FaPlay, FaPause, FaCircleCheck } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { CgAdd } from "react-icons/cg";
import { IoIosRadio } from "react-icons/io";
import { AiOutlinePlus, AiOutlineShareAlt } from "react-icons/ai";
import { FaRecordVinyl, FaSpotify, FaUserAlt } from "react-icons/fa";
import { MdQueueMusic } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";
import { FiList } from "react-icons/fi";
import { TbClockHour3 } from "react-icons/tb";

const PlayListBtnText: FC = () => {
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
    <section className={scss.PlayListBtnText}>
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
            <div className="">
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
            <h4>
              <span>Список</span> <FiList />
            </h4>
          </div>
        </div>
        <div className={scss.line}>
          <h5># Название</h5>
          <h5>Альбом</h5>
          <a>
            <TbClockHour3 />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlayListBtnText;
