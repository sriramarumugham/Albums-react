import React from "react";

import { AlbumCard } from "../components/index";

//
import "../style/albumCard.css";
import "../style/albumList.css";

function Home() {
  return (
    <>
      <div className="homeWrapper">
        <div className="albumsWrapper">
          <div className="albumList">
            
            <AlbumCard  style={{height:"150px"}}/>
            <AlbumCard  style={{height:"200px"}}/>
            <AlbumCard  style={{height:"150px"}}/>
            <AlbumCard  style={{height:"200px"}}/>

            <AlbumCard  style={{height:"150px"}}/>
            <AlbumCard  style={{height:"200px"}}/>
            <AlbumCard  style={{height:"150px"}}/>
            <AlbumCard  style={{height:"200px"}}/>

            <AlbumCard  style={{height:"150px"}}/>
            <AlbumCard  style={{height:"200px"}}/>
            <AlbumCard  style={{height:"150px"}}/>
            <AlbumCard  style={{height:"200px"}}/>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
