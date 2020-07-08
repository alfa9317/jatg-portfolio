import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import footerAdornment from '../../assets/images/Footer_Adornment_2.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: 'gray',
        width: '100%',
        zIndex: 1302,
        position: 'relative ' 
    },
    adornment: {
        width: '19em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '17em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em'
        }
    },
    mainContainer: {
        position: 'absolute',
        marginTop: '22px',
        marginLeft: '320px',
        [theme.breakpoints.down('md')]: {
            marginLeft: '260px'
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '235px',
            marginTop: '11px'
        }
    },
    titleText: {
        color: 'white',
        fontFamily: 'Mukta',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        fontFamily: 'Mukta',
        fontSize: '1rem'
    },
    iconImage: {
        width: '3rem'
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: '1.5em'
    }
}))

export default function Footer(){
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Grid container justify='flex-start' alignItems='flex-start' className={classes.mainContainer}>
                <Grid item>
                    <Grid container direction='column' spacing={2}>
                        <Grid item className={classes.titleText}>
                            Contact Info <span role='img' aria-label="Email">💻</span>
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
                                    (443) 117 3768
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img alt='footbar decoration' src={footerAdornment} className={classes.adornment}/>
            <Grid container justify='flex-end' spacing={2} className={classes.socialContainer}>
                <Grid item component={'a'} href='https://github.com/alfa9317' rel='noopener noreferrer' target='_blank'>
                    <img alt='github logo' src={github} className={classes.iconImage}/>
                </Grid>
                <Grid item component={'a'} href='https://www.linkedin.com/in/josealfredotorres/' rel='noopener noreferrer' target='_blank'>
                    <img alt='linkedin logo' src={linkedin} className={classes.iconImage}/>
                </Grid>
            </Grid>
         </footer>
    );
        
}