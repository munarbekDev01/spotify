"use client"
import { FC, useEffect } from "react";
import scss from "./PlayListDetails.module.scss";
import { useParams } from "next/navigation";
import { useLazyGetPlaylistWithIdQuery } from "@/redux/api/spotify";

const PlayListDetails: FC = () => {
    const { playlist_id } = useParams();
    const [trigger, { data }] = useLazyGetPlaylistWithIdQuery();
    
    useEffect(() => {
        if (typeof playlist_id === "string") {
            trigger(playlist_id); // Запускаем только при изменении `playlist_id`
        }
    }, [playlist_id, trigger]);
    console.log(data, 'sdsskds');
    return (
        <section className={scss.PlayListDetails}>
            <div className="container">
                <div className={scss.content}>
                        
                </div>
            </div>
        </section>
    );
};

export default PlayListDetails;
