import React from 'react';

const Lobbies = ({ lobbies }) => {
  return (
    <div>
      {lobbies.map((lobby) => (
        <>
          <div key={lobby.gameSelect}>{lobby.gameSelect}</div>
          <div key={lobby.lobbySize}>{lobby.lobbySize}</div>
          <div key={lobby.language}>{lobby.language}</div>
          <div key={lobby.micPreference}>{lobby.micPreference}</div>
          <div key={lobby.lobbyNotes}>{lobby.lobbyNotes}</div>
        </>
      ))}
    </div>
  );
};

export default Lobbies;
