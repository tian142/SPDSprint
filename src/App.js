import React, { useState } from 'react';
import CreateLobby from './components/CreateLobby';
import Lobbies from './components/Lobbies';
import SideNav from './components/SideNav';
import GameDisplay from './components/GameDisplay';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TopNav from './components/TopNav';

const useStyles = makeStyles({
  topGrid: {
    zindex: 1,
  },
  leftGrid: {
    zIndex: 0,
  },
  centerGrid: {
    zIndex: 1,
    background: 'lightBlue',
    marginLeft: 240,
  },
  bgRed: {
    background: 'pink',
  },
});

const App = () => {
  const classes = useStyles();
  const [lobbies, setLobbies] = useState([]);
  const [currentLobby, setCurrentLobby] = useState('');

  return (
    <Grid container>
      <Grid item xs={12} className={classes.topGrid}>
        <TopNav />
      </Grid>
      <Grid item xs={3} className={classes.leftGrid}>
        <SideNav />
      </Grid>
      <Grid item xs={9} className={classes.centerGrid}>
        <GameDisplay />
        <CreateLobby
          lobbies={lobbies}
          setLobbies={setLobbies}
          currentLobby={currentLobby}
          setCurrentLobby={setCurrentLobby}
        />
        <Lobbies lobbies={lobbies} />
      </Grid>
    </Grid>
  );
};

export default App;
