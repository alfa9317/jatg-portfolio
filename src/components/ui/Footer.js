import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import footerAdornment from '../../assets/images/Footer_Adornment_2.png';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: 'gray',
        width: '100%',
        zIndex: 1302,
        position: 'relative ' 
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '21em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em'
        }
    },
    mainContainer: {
        position: 'absolute',
        margin: '2em'
    },
    titleText: {
        color: 'white',
        fontFamily: 'Mukta',
        fontSize: '1.3rem',
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        fontFamily: 'Mukta',
        fontSize: '1rem'
    }
}))

export default function Footer(){
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Grid container justify='center' className={classes.mainContainer}>
                <Grid item>
                    <Grid container direction='column' spacing={2}>
                        <Grid item className={classes.titleText}>
                            Contact Info:
                        </Grid>
                        <Grid container direction='column'>
                            <Grid container direction='row' spacing={1}>
                                <Grid item className={classes.text}>
                                    <span role='img' aria-label="Email">🌎</span>
                                </Grid>
                                <Grid item className={classes.text}>
                                    josealfredotg@gmail.com
                                </Grid>
                            </Grid>
                            <Grid container direction='row' spacing={1}>
                                <Grid item className={classes.text}>
                                    <span role='img' aria-label="Phone number">📞</span>
                                </Grid>
                                <Grid item className={classes.text}>
                                <a href="4431173768">(443) 117 3768</a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img alt='footbar decoration' src={footerAdornment} className={classes.adornment}/>
         </footer>
    );
        
}