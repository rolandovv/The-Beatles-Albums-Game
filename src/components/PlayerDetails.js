import React from 'react';

export const PlayerDetails = ({ name, setName, email, setEmail, errorMessage, handleStartGame }) => {
  return (
    <div className="player-details-container">
      <p>Please enter your name and email to start playing.</p>
      <form onSubmit={handleStartGame}>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Start Game</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  )
}
