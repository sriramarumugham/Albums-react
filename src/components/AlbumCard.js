import React, { useState } from "react";

function AlbumCard({ style }) {
  const [toggle, setToggle] = useState(false);
  const [albumName, setAlbumName] = useState("Name");
  const [hover , setHover]=useState(false);

  return (
    <>
      <div className="albumCard" style={style} onMouseOver={()=>setHover(!hover)}>

        {toggle ? (
          <input
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            style={{
              fontSize: "24px",
              borderRadius: "5px",
              backgroundColor: "transparent",
              border: "1px solid green",
              padding: "10px 20px",
              width: "100px",
              margin: " 0px auto",
            }}
          />
        ) : (
          <h3>Name</h3>
        )}

         
        
        {toggle  ? (
          <div className="buttonContainer">
            <button
              onClick={(e) => {
                console.log(e.target);
                setToggle(!toggle);
                setAlbumName("Name");
              }}
            >
              CANCEL
            </button>
            <button
              onClick={(e) => {
                console.log(e.target);
              }}
            >
              SAVE
            </button>
          </div>
        ) : (
          <div className="buttonContainer">
            <button
              onClick={(e) => {
                console.log(e.target);
                setToggle(!toggle);
              }}
            >
              EDIT
            </button>
            <button
              onClick={(e) => {
                console.log(e.target);
              }}
            >
              DELETE
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default AlbumCard;

// style={{ height: "150px" }}
// style={{ height: "200px" }}
