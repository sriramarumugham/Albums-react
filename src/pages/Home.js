import React from "react";

//redux
import { useSelector } from "react-redux";
//redux actions
import { getAllAlbums } from "../features/albums/albumSlice";

//componenets
import { AlbumCard } from "../components/index";

//styles
import "../style/albumCard.css";
import "../style/albumList.css";

function Home() {

  const albums = useSelector(getAllAlbums);

  function renderAlbums() {

     //iterate over the state
    const renderedAlbum = 
    albums.map((album) => {

      if (album.id <= 24) {

        let style = { height: "150px" };

        //changin the height of card
        if (album.id % 2 == 0) {

          style.height = "200px";
        }
        const index = album.id % 6;

        const colors = [
          "rgb(239, 120, 225)",
          "rgb(154, 236, 12)",
          "rgb(76, 213, 247)",
          "rgb(246, 207, 12)",
          "rgb(245, 28, 28)",
          "aquamarine",
        ];
         
        //changing color of the card

        style.backgroundColor = colors[index];

        return (

          <AlbumCard
            id={album.id}
            style={style}
            name={album.title}
            data={album}
          />

        );
      }
    });

    return renderedAlbum;
  }

  return (
    <>
      <div className="homeWrapper">
        <div className="albumsWrapper">
         
          <div className="albumList">

             {/* iretation over the state  */}
             
            {renderAlbums()}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
