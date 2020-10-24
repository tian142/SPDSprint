import React, { useState } from 'react';
import {
  Button,
  Card,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { homeGames } from '../data/homeGames';

const useStyles = makeStyles({
  testa: {
    background: 'red',
  },
  testb: {
    // background: 'blue',
    width: 500,
  },
  testc: {
    // background: 'green',
    paddingTop: 118,
  },
  testd: {
    background: 'purple',
  },
  welcome: {
    paddingTop: 15,
    height: 150,
  },
  allGameBtn: {
    textTransform: 'none',
    height: 30,
  },
  expandIcon: {
    marginRight: -5,
  },
  botDivider: {
    marginBottom: 20,
  },
  gameList: {
    display: 'flex',
    padding: ' 29px 30px 1.35rem',
    justifyContent: ' center',
  },
  gameCard: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    height: '180px',
    width: '130px',
    borderRadius: '10px',
    background: ' white',
    boxShadow: '0px 4px 8px 8px rgba(0, 0, 0, 0.2)',
    transition: '180ms',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-1rem)',
    },

    '&:hover ~ &': {
      transform: 'translateX(25px)',
    },
    '&:not(:first-child)': {
      marginLeft: '-25px',
    },
  },
  cardMedia: {
    height: 100,
    paddingTop: '100%',
  },
  hoveredGame: {
    fontWeight: 550,
  },
});

const Gamedisplay = ({
  setClickedGameName,
  setClickedGameImg,
  setClickedGameStat,
}) => {
  const [hoveredGame, sethoveredGame] = useState('');
  const classes = useStyles();

  const onGameSelect = (game) => {
    setClickedGameName(game.title);
    setClickedGameImg(game.wallImg);
    setClickedGameStat(game.stat);
  };

  return (
    <>
      <Grid container className={classes.welcome} justify="space-evenly">
        {/* <Grid item sm={false} md={2} className={classes.testa} /> */}
        <Grid item className={classes.testb}>
          <Typography variant="h3">Good Team</Typography>
          <Typography variant="h3">Good Game</Typography>
          <Typography variant="h5">
            Find your dream lobby in: <span>{hoveredGame}</span>
          </Typography>
        </Grid>
        <Grid item className={classes.testc}>
          <Button color="primary" className={classes.allGameBtn}>
            All Games <ExpandMoreIcon className={classes.expandIcon} />
          </Button>
        </Grid>
        {/* <Grid item sm={false} md={2} className={classes.testd} /> */}
      </Grid>
      <div className={classes.gameList}>
        {homeGames.map((game) => (
          <Card
            onMouseEnter={() => sethoveredGame(game.title)}
            onClick={() => onGameSelect(game)}
            className={classes.gameCard}
            key={game.title}
            // style={{ transition: '100ms' }}
          >
            <CardMedia
              className={classes.cardMedia}
              image={game.thumbImg}
              title={game.title}
            />
          </Card>
        ))}
      </div>
      <Divider className={classes.botDivider} />
    </>
  );
};

export default Gamedisplay;
