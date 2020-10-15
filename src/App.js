import React, { useState } from 'react';
import CreateLobby from './components/CreateLobby';
import './style/App.css';
import Lobbies from './components/Lobbies';

const App = () => {
  const [lobbies, setLobbies] = useState([]);
  const [currentLobby, setCurrentLobby] = useState('');

  return (
    <>
      <CreateLobby
        lobbies={lobbies}
        setLobbies={setLobbies}
        currentLobby={currentLobby}
        setCurrentLobby={setCurrentLobby}
      />
      <Lobbies lobbies={lobbies} />
    </>
  );
};

export default App;
