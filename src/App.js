import usePlayerDetails from './hooks/usePlayerDetails';
import { PlayerDetails } from './components/PlayerDetails';
import "./App.css"
import Content from './components/Content';

function App() {

  const { playerDetails, name, setName, errorMessage, email, setEmail, handleStartGame } = usePlayerDetails();
  
  return (
    <div className='App'>
      <h2>Welcome to The Beatles Albums guessing game</h2>

      {!playerDetails ? 
        <PlayerDetails name={name} setName={setName} 
                       email={email} setEmail={setEmail} 
                       errorMessage={errorMessage} 
                       handleStartGame={handleStartGame} /> 

        : <Content />}
      
    </div>
  );
}

export default App;
