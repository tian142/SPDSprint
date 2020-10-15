import React from 'react';

const Lobbies = ({ lobbies }) => {
  return (
    <div>
      {lobbies.map((lobby) => (
        <>
          <div key={Math.random() * 1}>{lobby.game}</div>
          <div key={Math.random() * 2}>{lobby.lobbySize}</div>
          <div key={Math.random() * 3}>{lobby.language}</div>
          <div key={Math.random() * 4}>{lobby.mic}</div>
          <div key={Math.random() * 5}>{lobby.lobbyNotes}</div>
        </>
      ))}
    </div>
  );
};

export default Lobbies;
