import React, { useState } from "react";

import { useDispatch } from "react-redux";

//redux thunk and reducers
import {
  deleteAsyncAlbum,
  updateAsyncAlbum,
  updateAlbum,
  deleteAlbum,
} from "../features/albums/albumSlice";

function AlbumCard({ style, name, data }) {
  //props passed from parent
  //style
  //name to be displayed
  //data object

  //state for hover and displaying the button on users request

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
        {/* subject of the card */}
        {toggle ? (
          // edit the subject

          <input
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
          />
        ) : (
          //display the subject
          <h3>{name}</h3>
        )}

        {/* mouse over the card */}
        {hover ? (
          // dispaly the button container
          <div className="buttonContainer">
            {/* when user click on a button  */}

            {toggle ? (
              <>
                {/* cancel button */}
                <button
                  className="iconButton"
                  onClick={(e) => {
                    setToggle(!toggle);

                    //state change when user wants to edit

                    setAlbumName(name);
                  }}
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>

                {/* save button */}

                <button
                  className="iconButton"
                  onClick={(e) => {
                    //on clicking save save the data
                    dispatch(updateAsyncAlbum(data));

                    //show the subject after saving

                    setToggle(false);

                    const updatedAlbum = {
                      title: albumName,
                      id: data.id,
                      userId: data.userId,
                    };

                    //since the api is dummy we are changing the state through dispactch action

                    dispatch(updateAlbum({ updatedAlbum }));
                  }}
                >
                  <i class="fa-solid fa-floppy-disk"></i>
                </button>
              </>
            ) : (
              <>
                {/* edit button */}
                <button
                  className="iconButton"
                  onClick={(e) => {
                    setToggle(!toggle);
                  }}
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>

                {/* delete button */}

                <button
                  className="iconButton"
                  onClick={(e) => {

                    //delet the card 
                    dispatch(deleteAsyncAlbum(data.id));

                    //change the state since dummy api 
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
