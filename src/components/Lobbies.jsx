import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // minWidth: 150,
    maxWidth: 180,
  },
});

export default function Lobbies({ lobbies }) {
  const classes = useStyles();

  return (
    <>
      {lobbies.map((lobby) => (
        <Grid item sm={3}>
          <Card className={classes.root}>
            <CardContent>
              <Typography>{lobby.gameSelect}</Typography>
              <Typography gutterBottom>{lobby.lobbySize}</Typography>
              <Typography>{lobby.language}</Typography>
              <Typography variant="body2" component="p">
                {lobby.micPreference}
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
