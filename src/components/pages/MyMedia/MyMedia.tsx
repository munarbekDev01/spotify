import { FC, useState } from "react";
import scss from "./MyMedia.module.scss";
import { MdLibraryMusic } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { TfiArrowRight } from "react-icons/tfi";
import { TfiArrowLeft } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { FiMenu, FiList, FiGrid } from "react-icons/fi";
import { useGetSeveralPlaylistQuery } from "@/redux/api/spotify";

const MyMedia: FC = () => {
  const [mediaModal, setMediaModal] = useState<string>("cre");
  const [searchModal, setSearchModal] = useState(false);
  const [sortModal, setSortModal] = useState(false);
  const { data: playlists } = useGetSeveralPlaylistQuery();
  return (
    <section
      onClick={() => {
        searchModal ? setSearchModal(false) : null;
        sortModal ? setSortModal(false) : null;
      }}
      style={{
        width:
          mediaModal === "cre"
            ? "30%"
            : mediaModal === "max"
            ? "60%"
            : mediaModal === "min"
            ? "5%"
            : "30%",
      }}
      className={scss.MyMedia}
    >
      <div className={scss.content}>
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
              {" "}
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
                      searchModal ? setSearchModal(false) : setSearchModal(true)
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
                  {" "}
                  {mediaModal === "max" ? (
                    <span>Недавно прослушано</span>
                  ) : !searchModal ? (
                    <span>Недавно прослушано</span>
                  ) : null}{" "}
                  <FiList />{" "}
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
                      {" "}
                      <span>
                        <FiMenu />
                      </span>{" "}
                      Компактный{" "}
                    </h5>
                    <h5>
                      {" "}
                      <span>
                        <FiList />
                      </span>{" "}
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
        <div className={scss.textWithLine}>
          {mediaModal === "max" ? (
            <div className={scss.lineHi}>
              <h6>
                Название
                <span>
                  Дата добавления <li>Прослушано</li>
                </span>
              </h6>

              <div className={scss.line}></div>
            </div>
          ) : null}
        </div>
        <div className={scss.list}>
          {playlists?.items.map((el, idx) => (
            <div key={idx} className={scss.li}>
              <img
                width={55}
                height={50}
                src="data:image/jpeg;base64,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"
                alt="img"
              />
              <h5>
                {el.name} <span>Плейлист • {el.owner.display_name}</span>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default MyMedia;
