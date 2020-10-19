import React, { useState } from 'react';
import CreateLobby from './components/CreateLobby';
import Lobbies from './components/Lobbies';
import SideNav from './components/SideNav';
import GameDisplay from './components/GameDisplay';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TopNav from './components/TopNav';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
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
    // background: 'lightBlue',
    marginLeft: 240,
    position: 'relative',
    padding: '20px',
  },
  bgRed: {
    background: 'pink',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    borderRadius: 5,
    width: 380,
  },
}));

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
          // justify="flex-start"
          // alignItems="center"
        >
          <SideNav />
          {/* <Grid item><GameDisplay /></Grid> */}
          <Grid container spacing={2} direction="row">
            <Lobbies lobbies={lobbies} />
          </Grid>
        </Grid>
      </Grid>
      <Modal
        className={classes.modal}
        open={lobbyCreating}
        onClose={() => setLobbyCreating(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={lobbyCreating}>
          <div className={classes.paper}>
            <CreateLobby
              className={classes.topGrid}
              setLobbies={setLobbies}
              currentLobby={currentLobby}
              setCurrentLobby={setCurrentLobby}
              setLobbyCreating={setLobbyCreating}
            />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default App;
