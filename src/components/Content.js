import React from 'react'

import { useGameState } from '../hooks/useGameState';
import Album from './Album';
import { RandomAlbumCover } from './RandomAlbumCover';
import '../styles/styles.css'; // Import CSS file
import RandomAlbums from './RandomAlbums';

const Content = () => {
    const { error, loading , randomAlbums, randomAlbum, BASE_URL, isClicked, 
        isGuessCorrect,roundsPlayed, totalGuesses, 
        startNewGameOrRound, guessAlbumName , startGuessingAlbumName} = useGameState();

    return (
    <div>
        { loading && <div>Loading...</div> }
        { error && <div>Error. Please check url. </div> }

        { !startGuessingAlbumName  &&  (
        <>
            <RandomAlbumCover album_cover_image_path={BASE_URL + randomAlbums[randomAlbum]?.cover_image_path} album_name={`Cover of ${randomAlbums[randomAlbum]?.name}`} />

            <p>Guess the name of the album from the picture above?</p>

            <RandomAlbums randomAlbums={randomAlbums} isGuessCorrect={isGuessCorrect} guessAlbumName={guessAlbumName} />
        </>
        )}

        {isClicked && (
        isGuessCorrect ? (
            <>
            <Album
                name={randomAlbums[randomAlbum]?.name}
                cover_image_path={BASE_URL + randomAlbums[randomAlbum]?.cover_image_path}
                year_released={randomAlbums[randomAlbum]?.year_released}
                tracks={randomAlbums[randomAlbum]?.tracks}
                length={randomAlbums[randomAlbum]?.length}
            />
            <p>Well done - that's the correct answer!!!</p>
            <button className='play-again' onClick={startNewGameOrRound}>Play again</button>
            </>
        ) : (
            <p>Incorrect albums...please try again!!!</p>
        )
        )}

        <div className='game-stats'>
        <h2>Rounds Played: {roundsPlayed}</h2>
        <h2>Total Guesses: {totalGuesses}</h2>
        </div>
    </div>
    );
}

export default Content


