import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import EventIcon from '@material-ui/icons/Event';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

const useStyles = makeStyles({
  list: {
    width: 250,
    background: '#070A0E', 
    height: '100vh',
    color: '#FFF'
  },
  fullList: {
    width: 'auto',
  },
  active: {
    color: '#00D395',
  },
});

export default function NavDrawer() {
  const classes = useStyles();

  const [activeTab, setAciveTab]= useState(1)

  const showDashboard= () => {
    setAciveTab(1)
  }

  const showVote= () => {
    setAciveTab(2)
  }

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className={activeTab === 1 ? `${classes.active}` : null } onClick={showDashboard}>
            <ListItemIcon> <EventIcon color="primary"  /> </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
        </ListItem>
        <ListItem className={activeTab === 2 ? `${classes.active}` : null } onClick={showVote}>
            <ListItemIcon> <GroupWorkIcon color="primary" /> </ListItemIcon>
            <ListItemText primary={"Vote"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <IconButton
                color="inherit"
            >
                <MenuIcon fontSize="large" onClick={toggleDrawer(anchor, true)} />
            </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}