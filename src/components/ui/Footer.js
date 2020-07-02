import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import footerAdornment from '../../assets/images/Footer_start.png';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.darkBlue,
        width: '100%' 
    },
    adornment: {
        width: '22em'
    }
}))

export default function Footer(){
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <img alt='footbar decoration' src={footerAdornment} className={classes.adornment}/>
         </footer>
    );
        
}