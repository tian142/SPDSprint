import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import MicNoneIcon from '@material-ui/icons/MicNone';
import MicOffIcon from '@material-ui/icons/MicOff';
const useStyles = makeStyles({
  root: {
    Width: '180px',
  },
  mic: {
    height: 30,
  },
});

const showLobbySize = (size) => {
  if (size <= 5) {
    let container = [];
    for (let i = 0; i < size; i++) {
      container.push(<PersonOutlineIcon />);
    }
    return container;
  } else {
    return `${size} players`;
  }
};

const showMicIcon = (micPreference) => {
  if (micPreference === 'Mandatory') {
    return <HeadsetMicIcon />;
  } else if (micPreference === 'Preferred') {
    return <MicNoneIcon />;
  } else {
    return <MicOffIcon />;
  }
};

export default function Lobbies({ lobbies }) {
  const classes = useStyles();

  return (
    <>
      {lobbies.map((lobby) => (
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Card className={classes.root}>
            <CardContent>
              <Typography>{lobby.gameSelect}</Typography>
              <Typography gutterBottom>
                {showLobbySize(lobby.lobbySize)}
              </Typography>
              <Typography>{lobby.language}</Typography>
              <Typography variant="body2" component="p" className={classes.mic}>
                {`Mic: ${lobby.micPreference}`}
                {showMicIcon(lobby.micPreference)}
              </Typography>
              <Typography variant="body2" component="p">
                {lobby.lobbyNotes}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Join</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}
