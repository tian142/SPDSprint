import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline"
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom"
import { Breadcrumbs, Link, Typography } from "@material-ui/core"

const drawerWidth = 240

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    // flexShrink: 0,
    zIndex: -3,
  },
  drawerPaper: {
    backgroundColor: "#F4F4F4",
    border: "none",
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  friendRecent: {
    margin: "60px 0px 0px 15px",
    "&focus": {
      color: "#404040",
    },
  },
  friendIcon: {
    marginRight: 30,
  },
})

export default function ClippedDrawer() {
  const classes = useStyles()

  function handleClick(event) {
    event.preventDefault()
    console.info("You clicked a breadcrumb.")
  }

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <Breadcrumbs
            separator="|"
            aria-label="breadcrumb"
            className={classes.friendRecent}
          >
            <Typography color="textPrimary">Friends</Typography>
            <Link
              color="inherit"
              href="/getting-started/installation/"
              onClick={handleClick}
            >
              Recent
            </Link>
          </Breadcrumbs>
          <List>
            {["Friends", "Friend1", "Friend2", "Friend3"].map((text, index) => (
              <ListItem button key={text}>
                <PeopleOutlineIcon className={classes.friendIcon} />
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider variant="middle" />
          <List>
            {["Recommended Lobbies", "lobby1", "lobby2"].map((text, index) => (
              <ListItem button key={text}>
                <MeetingRoomIcon className={classes.friendIcon} />
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  )
}
