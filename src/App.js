import React, { useState } from 'react';
import CreateLobby from './components/CreateLobby';
import Lobbies from './components/Lobbies';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import GameDisplay from './components/GameDisplay';

const App = () => {
  const [lobbies, setLobbies] = useState([]);
  const [currentLobby, setCurrentLobby] = useState('');

  return (
    <>
      <TopNav className="hi" />
      <SideNav />
      <GameDisplay />
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
