import React from "react";

function ListAlbums({ albums, setCurrentAlbum }) {
  return (
    <ol>
      {albums.map((album) => (
        <li key={album.id}>
          <button type="button" onClick={() => setCurrentAlbum(album)}>
            Album Title {album.title}
          </button>
        </li>
      ))}
    </ol>
  );
}

export default ListAlbums;
