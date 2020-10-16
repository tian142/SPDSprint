import React, { useState } from 'react';
import CreateLobby from './components/CreateLobby';
import Lobbies from './components/Lobbies';
import SideNav from './components/SideNav';
import GameDisplay from './components/GameDisplay';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TopNav from './components/TopNav';

const useStyles = makeStyles({
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

  return (
    <Grid container>
      <Grid item xs={12}>
        <TopNav className={classes.topGrid} />
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
