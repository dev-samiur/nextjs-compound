import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import NavDrawer from './NavDrawer'

const useStyles = makeStyles((theme) => ({
  appbar: {
      background: '#070A0E',
      color: '#fff',
      boxShadow: 'none'
  },   
  toolbar: {
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between'
  },
  sectionDesktop: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: 60
    },
  },
  sectionMobile: {
    display: 'flex',
    order: 3,
    color: '#00D395',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  loginBtn: {
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
  active: {
    borderBottom: '1px solid #00D395', 
    borderRadius: 0,
    color: '#00D395',
  },
  navItems: {
    transition: 'all .5s',
    color: '#FFF',
    '&:hover':{
      color: '#00D395'
    }
  }
}));

interface AppbarProps{
  handleShowData():void
}


const Appbar: React.FC<AppbarProps>= ({handleShowData}) => {
  const classes = useStyles();
  const [activeTab, setAciveTab]= useState<any>(1)

  const showDashboard= () : void => {
    setAciveTab(1)
  }

  const showVote= () : void => {
    setAciveTab(2)
  }

  return (
    <Box style={{background: '#070A0E'}}>
        <Container maxWidth="lg">
            <AppBar position="static" elevation={0} className={classes.appbar}>
                <Toolbar className={classes.toolbar} >
                    <div>
                        <Typography variant="h6" noWrap color="primary" >
                           LOGO
                        </Typography>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <Button className={activeTab === 1 ? `${classes.active}` : `${classes.navItems}` } onClick={showDashboard}>Dashboard</Button>
                        <Button className={activeTab === 2 ? `${classes.active}` : `${classes.navItems}` } onClick={showVote}>Vote</Button>
                    </div>
                    <div>
                      <Button variant="outlined" color="primary" size="small" onClick={handleShowData}>Connect Wallet</Button>
                    </div>
                    <div className={classes.sectionMobile}>
                        <NavDrawer/>
                    </div>
                </Toolbar>
          </AppBar>
      </Container>
    </Box>
  );
}

export default Appbar
