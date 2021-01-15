import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import PetsRoundedIcon from '@material-ui/icons/PetsRounded';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Supply" {...a11yProps(0)} />
          <Tab label="Withdraw" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box display="flex" >
            <Typography variant="caption">Supply Rates <LaunchIcon style={{marginLeft: 5, fontSize: 16, cursor: 'pointer'}} /></Typography>
          </Box>
          <Box mt={2} py={2} display="flex" alignItems="center" justifyContent="space-between" style={{borderBottom:"2px solid #ECEDEE"}}>
            <Box display="flex" alignItems="center">
              <PetsRoundedIcon style={{fontSize: 24, cursor: 'pointer', marginRight: 10}} color="primary" />
              <Typography variant="body1">Supply APY</Typography>
            </Box>
            <Box>
              <Typography variant="body1" style={{color: '#000'}}>1.39%</Typography>
            </Box>
          </Box>
          <Box mt={2} py={2} display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <PetsRoundedIcon style={{fontSize: 24, cursor: 'pointer', marginRight: 10}} color="primary" />
              <Typography variant="body1">Distribution APY</Typography>
            </Box>
            <Box>
              <Typography variant="body1" style={{color: '#000'}}>1.18%</Typography>
            </Box>
          </Box>
          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              disabled
              fullWidth
              size="large"
            >
              ENABLE
            </Button>
          </Box>
          <Box mt={3} display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Typography variant="body1">Wallet Balance</Typography>
            </Box>
            <Box>
              <Typography variant="body1" style={{color: '#000'}}>0 UNI</Typography>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Box display="flex" >
            <Typography variant="caption">Supply Rates <LaunchIcon style={{marginLeft: 5, fontSize: 16, cursor: 'pointer'}} /></Typography>
          </Box>
          <Box mt={2} py={2} display="flex" alignItems="center" justifyContent="space-between" style={{borderBottom:"2px solid #ECEDEE"}}>
            <Box display="flex" alignItems="center">
              <PetsRoundedIcon style={{fontSize: 24, cursor: 'pointer', marginRight: 10}} color="primary" />
              <Typography variant="body1">Supply APY</Typography>
            </Box>
            <Box>
              <Typography variant="body1" style={{color: '#000'}}>1.39%</Typography>
            </Box>
          </Box>
          <Box mt={2} py={2} display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <PetsRoundedIcon style={{fontSize: 24, cursor: 'pointer', marginRight: 10}} color="primary" />
              <Typography variant="body1">Distribution APY</Typography>
            </Box>
            <Box>
              <Typography variant="body1" style={{color: '#000'}}>1.18%</Typography>
            </Box>
          </Box>
          <Box display="flex" mt={2}>
            <Typography variant="caption">Borrow Limit <LaunchIcon style={{marginLeft: 5, fontSize: 16, cursor: 'pointer'}} /></Typography>
          </Box>
          <Box mt={2} py={2} display="flex" alignItems="center" justifyContent="space-between" style={{borderBottom:"2px solid #ECEDEE"}}>
            <Box display="flex" alignItems="center">
              <Typography variant="body1">Borrow Limit</Typography>
            </Box>
            <Box>
              <Typography variant="body1" style={{color: '#000'}}>$0</Typography>
            </Box>
          </Box>
          <Box mt={2} py={2} display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Typography variant="body1">Borrow Limit Used</Typography>
            </Box>
            <Box>
              <Typography variant="body1" style={{color: '#000'}}>0%</Typography>
            </Box>
          </Box>
          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              disabled
              fullWidth
              size="large"
            >
              No Balance To Withdraw
            </Button>
          </Box>
          <Box mt={3} display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Typography variant="body1">Currently Supplying</Typography>
            </Box>
            <Box>
              <Typography variant="body1" style={{color: '#000'}}>0 UNI</Typography>
            </Box>
          </Box>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
