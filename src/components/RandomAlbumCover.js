import React from 'react'

export const RandomAlbumCover = ({album_name, album_cover_image_path}) => {

  return (
    <div>
          <img className="album-cover" src={album_cover_image_path} alt={`Cover of ${album_name}`} />
    </div>
  )
}
