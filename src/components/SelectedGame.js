import {
  Card,
  Grid,
  CardMedia,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"

const useStyles = makeStyles({
  mainContainer: {
    marginBottom: 15,
  },
  card: {
    width: 200,
    height: 60,
    background: "purple",
  },
  cardMedia: {
    height: 90,
    backgroundSize: "115%",
  },
  selectedLeftSide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedRightSide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lobbyFilter: {
    marginTop: -10,
  },
  gameName: {
    fontWeight: 600,
    margin: "0px 10px 0px 15px ",
  },
  gameStat: {
    marginTop: 2,
  },
  formControl: {
    marginTop: -18,
    marginLeft: 20,
    minWidth: 120,
  },
  createBtn: {
    height: 30,
    textTransform: "none",
  },
})

const SelectedGame = ({
  clickedGameName,
  clickedGameImg,
  clickedGameStat,
  setLobbyCreating,
}) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.mainContainer} justify="space-between">
      <Grid item className={classes.selectedLeftSide}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={clickedGameImg}
            title={clickedGameName}
          />
        </Card>
        <Typography variant="h6" className={classes.gameName}>
          {clickedGameName}
        </Typography>
        <Typography className={classes.gameStat}>{clickedGameStat}</Typography>
      </Grid>

      <Grid item className={classes.selectedRightSide}>
        <Button
          className={classes.createBtn}
          color="primary"
          variant="contained"
          onClick={() => setLobbyCreating(true)}
        >
          Create Lobby
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Filter By:</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value="Newest">Newest</MenuItem>
            <MenuItem value="Oldest">Oldest</MenuItem>
            <MenuItem value="Players">Players</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default SelectedGame
