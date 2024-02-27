import { useCallback, useEffect, useState } from 'react'
import useFetchAlbums from './useFetchAlbums';

// custom hook to manage the state of the game
export const useGameState = () => {

    const [randomAlbums, setRandomAlbums] = useState([]);
    const [randomAlbum, setRandomAlbum] = useState(0);
    const [previousRandomAlbums, setPreviousRandomAlbums] = useState([]);
  
    const [isClicked, setIsClicked] = useState(false);
    const [isGuessCorrect, setIsGuessCorrect] = useState(false);

    const [startGuessingAlbumName, setStartGuessingAlbumName] = useState(false);

    const [roundsPlayed, setRoundsPlayed] = useState(0);
    const [totalGuesses, setTotalGuesses] = useState(0);

    const REQUEST_METHOD = {
      GET: "get",
      POST: "post",
      DELETE: "delete"
    };
  
    const BASE_URL = 'https://frontend-interview.evidentinsights.com/'
    
    const { error, loading, data: albums } = useFetchAlbums(REQUEST_METHOD.GET, BASE_URL);
    
    //Generate 3 ramdom albums to choose from
    const generateRandomAlbums = useCallback (() => {
      const remainingAlbums = albums.filter(album => !previousRandomAlbums.includes(album.name));
  
      if (remainingAlbums.length < 3) {
      console.error("Insufficient remaining albums to generate a unique selection.");
      resetGame();
      setPreviousRandomAlbums([]);
      return;
      }
  
      const shuffledAlbums = remainingAlbums.sort(() => Math.random() - 0.5);
      const selectedAlbums = shuffledAlbums.slice(0, 3);
      
      const updatedPreviousRandomAlbums = [
      ...previousRandomAlbums,
      ...selectedAlbums.map(album => album.name)
      ].slice(-5);
  
      setRandomAlbums(selectedAlbums);
      setRandomAlbum(Math.floor(Math.random() * 3));
      setPreviousRandomAlbums(updatedPreviousRandomAlbums);

      // console.log("randomAlbums ", randomAlbums)
    },[albums, previousRandomAlbums]);

    
    useEffect(() => {
        if (albums?.length > 0) {
          generateRandomAlbums();
        }
    }, [albums]);


    const guessAlbumName = (e) => {
        
      setIsClicked(true);
        
      if(e.target.value === randomAlbums[randomAlbum]?.name){
        setStartGuessingAlbumName(true);
        setTotalGuesses(totalGuesses +1)
        setIsGuessCorrect(true)
        
      }
      setRoundsPlayed(roundsPlayed +1);
    };

    const resetGame = () => {
      setStartGuessingAlbumName(false)  
      setIsClicked(false);
      setIsGuessCorrect(false);      
    };

    const startNewGameOrRound = () => {
        resetGame(); // Reset the game state
        generateRandomAlbums(); // Generate new random albums
    };
    

  return {error, loading, randomAlbums,randomAlbum, previousRandomAlbums, 
          roundsPlayed, setRoundsPlayed,totalGuesses, setTotalGuesses, isClicked,setIsClicked, 
          isGuessCorrect, setIsGuessCorrect, BASE_URL, 
          generateRandomAlbums, resetGame, guessAlbumName, startNewGameOrRound, startGuessingAlbumName }
}
