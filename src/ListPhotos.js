import React from "react";

function ListPhotos({ albums = {}, photos }) {
  if (photos.length > 1) {
    return (
      <>
        <h2>Your Photos for {albums.title}</h2>
        <ol>
          {photos.map((photo) => {
            return (
              <li>
                Photo Title: {photo.title} | Photo URL: {photo.url}
              </li>
            );
          })}
        </ol>
      </>
    );
  }
  return <h2>Select an Ablum or Album is Empty</h2>;
}

export default ListPhotos;
