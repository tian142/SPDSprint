import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    // flexShrink: 0,
    zIndex: -3,
  },
  drawerPaper: {
    backgroundColor: '#F4F4F4',
    border: 'none',
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  friendIcon: {
    marginRight: 30,
  },
});

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Friends', 'Friend1', 'Friend2', 'Friend3'].map((text, index) => (
              <ListItem button key={text}>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <PeopleOutlineIcon className={classes.friendIcon} />
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider variant="middle" />
          <List>
            {['Recommended Lobbies', 'lobby1', 'lobby2'].map((text, index) => (
              <ListItem button key={text}>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <MeetingRoomIcon className={classes.friendIcon} />
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
