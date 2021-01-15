import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { makeStyles } from '@material-ui/core/styles';
import CameraIcon from '@material-ui/icons/Camera';
import TabPanel from './TabPanel';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

const useStyles = makeStyles({

    dialogTitle: {
        background: '#F9FAFB',
        textAlign: 'center',
        borderBottom: '1px solid #ECEDEE',
        height: 70,
        lineHeight: 70,
    },

    dialogContent: {
        background: '#F9FAFB',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '100%',
        maxWidth: 400
    }

})

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ModalProps{
  isOpen: boolean
  handleModalClose():void
}

const Modal:React.FC<ModalProps>= ({isOpen, handleModalClose}) => {

  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClose = () => {
    handleModalClose()
    setOpen(false);
  };

  useEffect(()=> {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Box position="absolute" right="10px" top="15px"><ClearRoundedIcon style={{fontSize: 30, cursor: 'pointer'}} onClick={handleClose}/></Box>
        <DialogTitle id="alert-dialog-slide-title" className={classes.dialogTitle}>Title Here</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText id="alert-dialog-slide-description">
            <Box>
                <Box my={5}>
                    <Box>
                        <CameraIcon color="primary" style={{fontSize: 60}} />
                    </Box>
                    <Box>
                        <Typography variant="body2" style={{color: '#B1BACA'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Ut enim ad minim veniam.
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <TabPanel/>
                </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Modal
