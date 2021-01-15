import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box display="flex" alignItems="center">
        <Box minWidth="120px">
            <Typography variant="body2" style={{color: '#7f7f7f'}}> Borrow Limit <span style={{color: '#FFF'}}>$0</span></Typography>
        </Box>
        <Box width="calc( 100% - 0px)" mr={1}>
            <LinearProgress variant="determinate" {...props} />
        </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearWithValueLabel() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} />
    </div>
  );
}
