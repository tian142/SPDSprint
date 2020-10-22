import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './GameDisplay.css';

const useStyles = makeStyles((theme) => ({
  welcome: {
    paddingTop: 15,
    height: 150,
  },
  botDivider: {
    marginBottom: 20,
  },
}));

const Gamedisplay = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.welcome}>
        <Grid item xs={0} sm={2} />
        <Grid item>
          <Typography variant="h3">Good Team</Typography>
          <Typography variant="h3">Good Game</Typography>
          <Typography variant="h5">Find your dream lobby in: </Typography>
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
      <section className="game-list">
        <article className="game" id="lol">
          <header className="game-header"></header>
        </article>
        <article className="game" id="csgo">
          <header className="game-header"></header>
        </article>
        <article className="game" id="eft">
          <header className="game-header"></header>
        </article>
        <article className="game" id="dota2">
          <header className="game-header"></header>
        </article>
        <article className="game" id="valorant">
          <header className="game-header"></header>
        </article>
        <article className="game" id="dayz">
          <header className="game-header"></header>
        </article>
        <article className="game" id="among-us">
          <header className="game-header"></header>
        </article>
      </section>
      <Divider className={classes.botDivider} />
    </>
  );
};

export default Gamedisplay;
