import React, { useState } from 'react';
import CreateLobby from './components/CreateLobby';
import Lobbies from './components/Lobbies';
import TopNav from './components/TopNav';

const App = () => {
  const [lobbies, setLobbies] = useState([]);
  const [currentLobby, setCurrentLobby] = useState('');

  return (
    <>
      <TopNav className="hi" />
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
