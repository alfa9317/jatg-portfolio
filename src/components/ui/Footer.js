import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from '../../assets/images/Footer_Adornment_2.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import emailme from '../../assets/images/emailme.png';
import phoneme from '../../assets/images/phoneme.png';
import cvdownload from '../../assets/images/cvdownload.png';
import pdf from '../../assets/CV-JoseAlfredoTorres.pdf'

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
        [theme.breakpoints.down('sm')]: {
            width: '14em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '16em'
        }
    },
    mainContainer: {
        position: 'absolute',
        marginTop: '2.5%'
    },
    titleText: {
        color: 'white',
        fontFamily: 'Mukta',
        fontSize: '1.5em',
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        fontFamily: 'Mukta',
        fontSize: '1em'
    },
    iconImage: {
        width: '3.8rem',
        [theme.breakpoints.down('xs')]: {
            width: '3rem'
        }
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-7.5em',
        right: '2em',
        [theme.breakpoints.down('md')]: {
            marginTop: '-7em'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '-6em'
        },
        [theme.breakpoints.down('xs')]: {
            right: '1.5em',
            marginTop: '-7.7em'
        }
    }
}))

export default function Footer(){
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify='center' className={classes.mainContainer} spacing={1}>
                    <Grid item>
                        <Grid container direction='column' spacing={2}>
                            <Grid item className={classes.titleText}>
                                Contact information
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction='column' spacing={2}>
                            <Grid item className={classes.text}>
                                <span role='img' aria-label="Email">🌎</span>
                            </Grid>
                            <Grid item className={classes.text}>
                                <span role='img' aria-label="Phone number">📞</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction='column' spacing={2}>
                            <Grid item className={classes.text}>
                                josealfredotg@gmail.com
                            </Grid>
                            <Grid item className={classes.text}>
                                (443) 117 3768
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img alt='footbar decoration' src={footerAdornment} className={classes.adornment}/>
           <Hidden xsDown>
            <Grid container justify='flex-end' spacing={2} className={classes.socialContainer}>
                    <Grid item component={'a'} href='https://github.com/alfa9317' rel='noopener noreferrer' target='_blank'>
                        <img alt='github logo' src={github} className={classes.iconImage}/>
                    </Grid>
                    <Grid item component={'a'} href='https://www.linkedin.com/in/josealfredotorres/' rel='noopener noreferrer' target='_blank'>
                        <img alt='linkedin logo' src={linkedin} className={classes.iconImage}/>
                    </Grid>
                    <Grid item component={'a'} href='mailto:josealfredotg@gmail.com? subject=subject text' id="email-link" rel='noopener noreferrer' target='_blank'>
                        <img alt='email me' src={emailme} className={classes.iconImage}/>
                    </Grid>
                    <Grid item  component={'a'} href='tel:4431173768' id="phone-link" rel='noopener noreferrer' target='_blank'>
                        <img alt='phone me' src={phoneme} className={classes.iconImage}/>
                    </Grid>
                    <Grid item component={'a'} href={pdf} id="cv-link" rel='noopener noreferrer' target='_blank'>
                        <img alt='cv dowload' src={cvdownload} className={classes.iconImage}/>
                    </Grid>
                </Grid>
           </Hidden>
          
           <Hidden smUp>
                <Grid container direction='column' alignItems='flex-end' spacing={1} className={classes.socialContainer}>
                    <Grid item>
                        <Grid container direction='row' justify="space-evenly" alignItems="center" spacing={2}>
                            <Grid item component={'a'} href='https://github.com/alfa9317' rel='noopener noreferrer' target='_blank'>
                                <img alt='github logo' src={github} className={classes.iconImage}/>
                            </Grid>
                            <Grid item component={'a'} href='https://www.linkedin.com/in/josealfredotorres/' rel='noopener noreferrer' target='_blank'>
                                <img alt='linkedin logo' src={linkedin} className={classes.iconImage}/>
                            </Grid>
                            <Grid item component={'a'} href='mailto:josealfredotg@gmail.com? subject=subject text' id="email-link" rel='noopener noreferrer' target='_blank'>
                                <img alt='email me' src={emailme} className={classes.iconImage}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                            <Grid item  component={'a'} href='tel:4431173768' id="phone-link" rel='noopener noreferrer' target='_blank'>
                                <img alt='phone me' src={phoneme} className={classes.iconImage}/>
                            </Grid>
                            <Grid item component={'a'} href={pdf} id="cv-link" rel='noopener noreferrer' target='_blank'>
                                <img alt='cv dowload' src={cvdownload} className={classes.iconImage}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
           
         </footer>
    );
        
}