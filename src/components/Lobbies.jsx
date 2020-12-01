import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Divider, Grid, Tooltip } from "@material-ui/core"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic"
import MicNoneIcon from "@material-ui/icons/MicNone"
import MicOffIcon from "@material-ui/icons/MicOff"
import FaceIcon from "@material-ui/icons/Face"

const useStyles = makeStyles({
  lobbyCard: {
    width: 300,
    height: 162,
    padding: "15px 15px",
    transition: "70ms",
    "&:hover": {
      transform: "translate(-3px, -3px)",
      boxShadow: "0px 8px 20px 1px rgba(56, 56, 56, 0.2)",
    },
  },
  lobbyMaster: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
  userIcon: {
    marginRight: 5,
  },
  cardGameName: {
    display: "flex",
    justifyContent: "flex-end",
  },
  langMic: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 8,
  },
  divider: {
    marginBottom: 8,
  },
  notes: {
    height: 62,
  },
  lobbyActions: {
    height: 28,
  },
  joinBtn: {
    textTransform: "none",
    height: 26,
  },
})

const showLobbySize = (size) => {
  let container = []
  for (let i = 0; i < size; i++) {
    container.push(<PersonOutlineIcon fontSize="small" />)
  }
  return container
}

const showMicIcon = (micPreference) => {
  if (micPreference === "Mic Mandatory") {
    return <HeadsetMicIcon />
  } else if (micPreference === "Mic Preferred") {
    return <MicNoneIcon />
  } else {
    return <MicOffIcon />
  }
}

export default function Lobbies({ lobbies }) {
  const classes = useStyles()

  return (
    <>
      {lobbies.map((lobby) => (
        <Grid item>
          <Card className={classes.lobbyCard}>
            <Grid container justify="space-between">
              <Grid item xs={6} className={classes.lobbyMaster}>
                <FaceIcon className={classes.userIcon} /> UserName123
              </Grid>
              <Grid item xs={6} className={classes.cardGameName}>
                <Typography>{lobby.gameSelect}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{showLobbySize(lobby.lobbySize)}</Typography>
              </Grid>

              <Grid item xs={4}>
                <div className={classes.langMic}>
                  <Typography>{lobby.language}</Typography>
                  <Tooltip title={lobby.micPreference}>
                    {showMicIcon(lobby.micPreference)}
                  </Tooltip>
                </div>
              </Grid>

              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item xs={12} className={classes.notes}>
                <Typography variant="caption" component="p">
                  {lobby.lobbyNotes}
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.lobbyActions}>
                <Button
                  size="small"
                  variant="outlined"
                  className={classes.joinBtn}
                  color="primary"
                >
                  Join
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </>
  )
}
