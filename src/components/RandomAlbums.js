import React from 'react'

const RandomAlbums = ({randomAlbums, isGuessCorrect, guessAlbumName} ) => {

  return (
      <div className='random-albums-container'>
        {randomAlbums?.map((album, index) => (
          <div key={index}>
            <button onClick={guessAlbumName} value={album.name} disabled={isGuessCorrect}>
              {album.name}
            </button>
          </div>
        ))}
      </div>    
  )
}
export default RandomAlbums