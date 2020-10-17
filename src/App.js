import React, { useState } from 'react';
import CreateLobby from './components/CreateLobby';
import Lobbies from './components/Lobbies';
import SideNav from './components/SideNav';
import GameDisplay from './components/GameDisplay';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TopNav from './components/TopNav';
import CreateLobbyPopUp from './components/CreateLobbyPopUp';

const useStyles = makeStyles({
  topZ: {
    zIndex: 1000,
  },
  topGrid: {
    zIndex: 0,
    position: 'relative',
  },
  leftGrid: {
    zIndex: 0,
    position: 'relative',
  },
  centerGrid: {
    zIndex: 1,
    background: 'lightBlue',
    marginLeft: 240,
    position: 'relative',
  },
  bgRed: {
    background: 'pink',
  },
});

const App = () => {
  const classes = useStyles();
  const [lobbies, setLobbies] = useState([]);
  const [currentLobby, setCurrentLobby] = useState('');
  const [lobbyCreating, setLobbyCreating] = useState(false);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TopNav
            // className={classes.topGrid}
            setLobbyCreating={setLobbyCreating}
          />
        </Grid>
        <Grid
          item
          xs={9}
          className={classes.centerGrid}
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <SideNav />
          <Grid item>
            <GameDisplay />
          </Grid>
          <Lobbies lobbies={lobbies} />
        </Grid>
      </Grid>
      <CreateLobbyPopUp
        className={classes.topGrid}
        lobbyCreating={lobbyCreating}
        onClose={() => setLobbyCreating(false)}
      >
        <CreateLobby
          className={classes.topGrid}
          lobbies={lobbies}
          setLobbies={setLobbies}
          currentLobby={currentLobby}
          setCurrentLobby={setCurrentLobby}
        />
      </CreateLobbyPopUp>
    </>
  );
};

export default App;
