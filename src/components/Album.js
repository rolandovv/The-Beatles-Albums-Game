import React from 'react';
import '../styles/styles.css'; // Import CSS file for styles

function Album(props) {
  const { name, year_released, tracks, length, cover_image_path, cover_image_id } = props;

  return (
    <div className="album-container">
      <img className="album-cover" src={cover_image_path} alt={`Cover of ${name}`} />
      <div className="album-details">
        <h2 className="album-title">{name}</h2>
        <p className="album-info">Year Released: {year_released}</p>
        <p className="album-info">Tracks: {tracks}</p>
        <p className="album-info">Length: {length}</p>
        {/* Additional album details can be added here */}
      </div>
    </div>
  );
}

export default Album;
