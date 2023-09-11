import React, { useEffect, useState } from "react";
import ListAlbums from "./ListAlbums";
import ListPhotos from "./ListPhotos";

function App() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [currentAlbum, setCurrentAlbum] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then(setAlbums)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (currentAlbum.id) {
      fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${currentAlbum.id}`
      )
        .then((response) => response.json())
        .then(setPhotos)
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentAlbum.id]);

  return (
    <>
      <h1>Hello</h1>
      <ListAlbums albums={albums} setCurrentAlbum={setCurrentAlbum} />
      <ListPhotos albums={currentAlbum} photos={photos} />
    </>
  );
}

export default App;
