import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import BorrowLimit from './BorrowLimit'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        background: theme.palette.primary.dark
    }
}))

const Hero:React.FC= () => {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box className={classes.wrapper}> 
            <Container maxWidth="lg" style={{height: matches ? 350 : 400, color: '#FFF', display: 'flex', alignItems: 'start', paddingTop: 50}}>
                <Box width="100%">
                        {
                            !matches ? (
                                <Box display="flex" justifyContent="center">
                                    <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center">
                                        <Typography color="primary" variant="body2">Suppy Balance</Typography>
                                        <Typography variant="h5" style={{marginTop: 10}}>$0</Typography>
                                    </Box>
                                    <Box mx={10}>
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="150px" height="150px" border="2px solid #00D395" borderRadius="50%">
                                            <Box>
                                                <Typography variant="caption" style={{color: '#7f7f7f'}}>Net APY</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" style={{color: '#FFF'}}>...</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center">
                                        <Typography color="primary" variant="body2">Borrow Balance</Typography>
                                        <Typography variant="h5" style={{marginTop: 10}}>$0</Typography>
                                    </Box>
                                </Box>
                            ) : (
                                <Box display="flex" justifyContent="center">
                                    <Box>
                                         <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="150px" height="150px" border="2px solid #00D395" borderRadius="50%">
                                            <Box>
                                                <Typography variant="caption" style={{color: '#7f7f7f'}}>Net APY</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" style={{color: '#FFF'}}>...</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box display="flex" flexDirection="column" justifyContent="center" ml={5}>
                                        <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center">
                                            <Typography color="primary" variant="body2">Suppy Balance</Typography>
                                            <Typography variant="h5" style={{marginTop: 10}}>$0</Typography>
                                        </Box>
                                        <Box mt={2} display="flex" flexDirection="column" justifyContent="center" textAlign="center">
                                            <Typography color="primary" variant="body2">Borrow Balance</Typography>
                                            <Typography variant="h5" style={{marginTop: 10}}>$0</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        }
                    <Box mt={5}>
                        <BorrowLimit/>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Hero
 
