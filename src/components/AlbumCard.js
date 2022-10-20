import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteAsyncAlbum } from "../features/albums/albumSlice";

import { updateAsyncAlbum } from "../features/albums/albumSlice";

import { updateAlbum, deleteAlbum } from "../features/albums/albumSlice";

function AlbumCard({ style, name, data }) {
  const [toggle, setToggle] = useState(false);
  const [albumName, setAlbumName] = useState(name);
  const [hover, setHover] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <div
        className="albumCard"
        style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {
          if (toggle == false) {
            setHover(false);
          }
        }}
      >
        {toggle ? (
          <input
         
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            
          />
        ) : (
          <h3>{name}</h3>
        )}

        {hover ? (
          <div className="buttonContainer">
            {toggle ? (
              <>
                <button
                  className="iconButton"
                  onClick={(e) => {
                    console.log(e.target);
                    setToggle(!toggle);
                    setAlbumName("Name");
                  }}
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <button
                 className="iconButton"
                  onClick={(e) => {
                    console.log(e.target);
                    dispatch(updateAsyncAlbum(data));
                    setToggle(false);
                    const updatedAlbum = {
                      title: albumName,
                      id: data.id,
                      userId: data.userId,
                    };
                    dispatch(updateAlbum({ updatedAlbum }));
                  }}
                >
                  <i class="fa-solid fa-floppy-disk"></i>
                </button>
              </>
            ) : (
              <>
                <button 
                 className="iconButton"
                  onClick={(e) => {
                    console.log(e.target);
                    setToggle(!toggle);
                  }}
                >
                  <i class="fa-solid fa-pen-to-square"></i>

                </button>
                <button
                 className="iconButton"
                  onClick={(e) => {
                    console.log(e.target);
                    dispatch(deleteAsyncAlbum(data.id));
                    dispatch(deleteAlbum(data.id));
                    
                  }}
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default AlbumCard;

// style={{ height: "150px" }}
// style={{ height: "200px" }}
