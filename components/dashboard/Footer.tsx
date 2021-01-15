import React from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    rootBox: {
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center'
        }
    },
    footerNav: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(0),

        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: 'auto',
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(2),
        }
    },
    footerLink: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(2),
        }
    },
    copy: {
        textAlign: 'center'
    }
}))

export default function Footer() {

    const classes = useStyles();

    return (
        <footer>
            <Container maxWidth="lg">
                <Box py={6}  display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
                <Typography variant="h6" noWrap color="primary" >
                           LOGO
                </Typography>
                <Box component="nav" className={classes.footerNav}>
                    <Typography variant="body2" color="textSecondary" className={classes.footerLink}>Markets</Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.footerLink}>Governments</Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.footerLink}>Comp</Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.footerLink}>Support</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" color="textSecondary" className={classes.footerLink}>$USD</Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.footerLink}>
                        Language
                        <img src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png" 
                            style={{marginLeft: 5, width: 20, height: 20}}
                        />
                    </Typography>
                </Box>
                </Box>
            </Container>
        </footer>
    )
}
