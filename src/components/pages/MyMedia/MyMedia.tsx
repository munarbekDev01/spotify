import { FC, useState } from "react";
import scss from "./MyMedia.module.scss";
import { MdLibraryMusic } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { TfiArrowRight } from "react-icons/tfi";
import { TfiArrowLeft } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { FiMenu, FiList, FiGrid } from "react-icons/fi";
import { useGetSeveralPlaylistQuery } from "@/redux/api/spotify";
import Image from "next/image";

const MyMedia: FC = () => {
  const [mediaModal, setMediaModal] = useState<string>("cre");
  const [searchModal, setSearchModal] = useState(false);
  const [sortModal, setSortModal] = useState(false);
  const { data: playlists } = useGetSeveralPlaylistQuery();
  const img = playlists?.items.map(
    (el) => el.images?.[0]?.url || "/default-image.jpg"
  );
  return (
    <section
      style={{
        width:
          mediaModal === "cre"
            ? "30%"
            : mediaModal === "max"
            ? "60%"
            : mediaModal === "min"
            ? "5%"
            : "30%",
        padding: mediaModal === "min" ? "15px 8px" : "15px 20px",
      }}
      className={scss.MyMedia}
    >
      <div
        style={{
          alignItems: mediaModal === "min" ? "center" : "",
        }}
        className={scss.content}
      >
        <div className={scss.mediaHed}>
          <h4
            onClick={() =>
              mediaModal === "cre"
                ? setMediaModal("min")
                : mediaModal === "max"
                ? setMediaModal("min")
                : setMediaModal("cre")
            }
          >
            <span>
              <MdLibraryMusic />
            </span>
            {mediaModal === "cre"
              ? " Моя медиатека"
              : mediaModal === "max"
              ? " Моя медиатека"
              : null}
          </h4>
          {mediaModal === "cre" ? (
            <h1>
              <li>
                <GoPlus />
              </li>
              <span
                onClick={() =>
                  mediaModal === "cre"
                    ? setMediaModal("max")
                    : setMediaModal("cre")
                }
              >
                {mediaModal === "cre" ? (
                  <TfiArrowRight />
                ) : mediaModal === "max" ? (
                  <TfiArrowRight />
                ) : null}
              </span>
            </h1>
          ) : mediaModal === "max" ? (
            <h1>
              <li>
                <GoPlus />
              </li>{" "}
              <span
                onClick={() =>
                  mediaModal === "cre"
                    ? setMediaModal("max")
                    : setMediaModal("cre")
                }
              >
                {" "}
                {mediaModal === "cre" ? (
                  <TfiArrowRight />
                ) : mediaModal === "max" ? (
                  <TfiArrowLeft />
                ) : null}
              </span>
            </h1>
          ) : null}
        </div>
        {mediaModal === "min" ? null : (
          <div
            style={{
              flexDirection: mediaModal === "max" ? "row" : "column",
              justifyContent: mediaModal === "max" ? "space-between" : "center",
            }}
            className={scss.textWithSearchAndSort}
          >
            {mediaModal === "cre" ? (
              <h4 className={scss.textPlayLists}>Плейлисты</h4>
            ) : mediaModal === "max" ? (
              <h4 className={scss.textPlayLists}>Плейлисты</h4>
            ) : null}
            <div className={scss.searchAndSort}>
              <div className={scss.search}>
                {mediaModal === "min" ? null : (
                  <h2
                    style={{
                      paddingRight: searchModal ? "155px" : "0px",
                    }}
                  >
                    <span
                      onClick={() =>
                        searchModal
                          ? setSearchModal(false)
                          : setSearchModal(true)
                      }
                    >
                      <IoIosSearch />
                    </span>{" "}
                    {searchModal ? (
                      <input type="text" placeholder="искать в медатеке " />
                    ) : null}{" "}
                  </h2>
                )}
              </div>
              <div className={scss.sort}>
                {mediaModal === "min" ? null : (
                  <h2
                    onClick={() => {
                      sortModal ? setSortModal(false) : setSortModal(true),
                        setSearchModal(false);
                    }}
                  >
                    {mediaModal === "max" ? (
                      <span>Недавно прослушано</span>
                    ) : !searchModal ? (
                      <span>Недавно прослушано</span>
                    ) : null}
                    <FiList />
                  </h2>
                )}
                {sortModal && !searchModal ? (
                  <div className={scss.sortModal}>
                    <div className={scss.sorting}>
                      <h6>Сортировка</h6>
                      <h5>Недавно прослушано</h5>
                      <h5>По алфавиту</h5>
                      <h5>По автору </h5>
                    </div>
                    <div className={scss.line}></div>
                    <div className={scss.sortFormat}>
                      <h6>Формат библиотеки</h6>
                      <h5>
                        <span>
                          <FiMenu />
                        </span>
                        Компактный
                      </h5>
                      <h5>
                        <span>
                          <FiList />
                        </span>
                        Список
                      </h5>
                      <h5>
                        <span>
                          <FiGrid />
                        </span>
                        Сетка
                      </h5>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}
        {mediaModal === "max" ? (
          <div className={scss.textWithLine}>
            <div className={scss.lineHi}>
              <h6>
                Название
                <span>
                  Дата добавления <li>Прослушано</li>
                </span>
              </h6>

              <div className={scss.line}></div>
            </div>
          </div>
        ) : null}
        <div className={scss.list}>
          {playlists?.items.map((el, idx) => (
            <div key={idx} className={scss.li}>
              {el.images?.[0]?.url ? (
                <Image
                  style={{
                    objectFit: "cover",
                    width: mediaModal === "min" ? "100%" : "80px",
                    height: mediaModal === "min" ? "100%" : "60px",
                  }}
                  width={30}
                  height={50}
                  src={el.images?.[0]?.url}
                  alt="img"
                />
              ) : (
                <img
                  style={{
                    objectFit: "cover",
                    width: mediaModal === "min" ? "100%" : "80px",
                    height: mediaModal === "min" ? "100%" : "60px",
                  }}
                  width={30}
                  height={50}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNO2CANPF9_aIE7DkZJ4_G9RBRJGQTa_8tFQ&s"
                  alt=""
                />
              )}

              {mediaModal === "min" ? null : (
                <h5>
                  {el.name} <span>Плейлист • {el.owner.display_name}</span>
                </h5>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyMedia;
