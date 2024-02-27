import {useState } from 'react'

const usePlayerDetails = () => {

  const [playerDetails, setPlayerDetails] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  
  const handleStartGame = (e) => {
    e.preventDefault();
    if (name && email) {
      setPlayerDetails(true)
 
    } else {
      setErrorMessage('Please provide both name and email to start the game.');
    }
  };

//    useEffect(() => {
//     console.log("playerDetails inside", playerDetails);
//   }, [handleStartGame]);

  return {playerDetails, setPlayerDetails,name, setName, email, setEmail, errorMessage, setErrorMessage, handleStartGame  }
}

export default usePlayerDetails