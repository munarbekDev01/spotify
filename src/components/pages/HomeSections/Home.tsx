"use client";
import { FC, useState } from "react";
import scss from "./Home.module.scss";
import { RiSpotifyFill } from "react-icons/ri";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { MdOutlinePauseCircleFilled } from "react-icons/md";



const Home: FC = () => {
    const [fill, setFill] = useState(false);
    const [play, setPlay] = useState(false);
    return (
        <section className={scss.Home}>
            <div className="container">
                <div className={scss.content}>
                    <div className={fill ? scss.homes : scss.home}>
                        <a>
                            <RiSpotifyFill />
                        </a>
                        <img
                            src="https://i.guim.co.uk/img/media/67944850a1b5ebd6a0fba9e3528d448ebe360c60/359_0_2469_1482/master/2469.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=1157be337c6e200937b038797d772f5f"
                            alt=""
                        />
                        <a className={scss.homes} onClick={() => setPlay(!play)}>
                            {
                                play? (
                                    <MdOutlinePauseCircleFilled />
                                ) : (
                                    <MdOutlinePlayCircleFilled />
                                )
                            }
                        </a>
                        <b>Billie Eilish</b>
                        <h3>
                            The most essential R&B songs from the '00s. Cover:
                            Usher
                        </h3>
                    </div>
                  
                </div>
            </div>
        </section>
    );
};

export default Home;
