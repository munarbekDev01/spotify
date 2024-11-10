"use client"
import { FC, useState } from "react";
import scss from "./Home.module.scss";
import { useRouter } from "next/navigation";
import MusicCard from "../MusicCard/MusicCard";
import { useGetSeveralPlaylistQuery } from "@/redux/api/spotify";

const Home: FC = () => {
    const [allOrMusic, setAllOrMusic] = useState(true)
    const router = useRouter()
    const {data: playlists} = useGetSeveralPlaylistQuery()
 return (
  <section className={scss.Home}>
    <div className={scss.content}>
        <div className={scss.btnForAllAndMusic}>
            <button onClick={() => setAllOrMusic(true)} style={{
                backgroundColor: allOrMusic? "white" : "rgb(75, 74, 74)",
                color: allOrMusic? "black" : "white"
            }}>Все</button>
            <button
            onClick={() => setAllOrMusic(false)}
             style={{
                backgroundColor: !allOrMusic? "white" : "rgb(75, 74, 74)",
                color: !allOrMusic? "black" : "white"
            }}>Музыка</button>
        </div>
        <div className={scss.specialForYou}>
            <div className={scss.specialForYouText}>
                <h1 onClick={() => router.push("/section/2")}>Специально для тебя</h1>
                <p onClick={() => router.push("/section/2")}> Показать все</p>
            </div>
            <div className={scss.blocks}>  {

            playlists?.items.map((el) => ( 
               <MusicCard el={el} key={el.id} />)  )
            }
            </div>
            <div className={scss.blocks}>  {

playlists?.items.map((el) => ( 
   <MusicCard el={el} key={el.id} />)  )
}
</div>
<div className={scss.blocks}>  {

playlists?.items.map((el) => ( 
   <MusicCard el={el} key={el.id} />)  )
}
</div>
<div className={scss.blocks}>  {

playlists?.items.map((el) => ( 
   <MusicCard el={el} key={el.id} />)  )
}
</div>
        
        </div>
    </div>
  </section>
 );
};

export default Home;
