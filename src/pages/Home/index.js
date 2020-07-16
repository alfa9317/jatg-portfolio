import React from "react";
import "./style.css";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/styles';
import {Animated} from "react-animated-css";
import Divider from '@material-ui/core/Divider';
import profilePic from '../../assets/images/profilePic.jpeg';
import html5 from '../../assets/images/skills/html5.png';
import css from '../../assets/images/skills/css.png';
import js from '../../assets/images/skills/js.png';
import react from '../../assets/images/skills/react.png';
import materialui from '../../assets/images/skills/materialui.png';
import swift from '../../assets/images/skills/swift.png';
import node from '../../assets/images/skills/node.png';
import jquery from '../../assets/images/skills/jquery.png';
import mern from '../../assets/images/skills/mern.png';
import antdesign from '../../assets/images/skills/antdesign.png';
import materialize from '../../assets/images/skills/materialize.png';
import github from '../../assets/images/skills/github.png';
import firebase from '../../assets/images/skills/firebase.png';
import mysql from '../../assets/images/skills/mysql.png';


const useStyles = makeStyles(theme => ({
    main: {
       textAlign: 'center'
    },
    divider: {
        margin: '100px 10vw 50px 10vw'
    },
    logoContainer: {
        marginBottom: '100px'
    },
    logo: {
        width: '10rem'
    },
    subtitle:{
        marginBottom: '50px'
    }
}))

export default function Home(props){

        const classes = useStyles();
        return (
            
            <div className={classes.main}>
                 <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} isVisible={true}>
                    <div>
                        <br/>
                        <h2 className='homePageTitle' style={{fontSize:'3vw'}}>Welcome to my personal page</h2>
                        <br/>
                    </div>
                </Animated>
                
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={0.4} animationInDuration={500} isVisible={true}>
                    <img alt="profilePic" src={profilePic} style={{width: '200px',height: 'auto',borderRadius: '150px', boxShadow: '0px 4px 15px 2px #888888'}}/>
                    <br/>
                    <br/>
                    <br/>
                </Animated>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={0.6} animationInDuration={2000} isVisible={true}>
                    <p>My name is José Alfredo Torres</p>
                </Animated>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={0.7} animationInDuration={2000} isVisible={true}>
                    <p style={{margin:'30px 15vw 0px 15vw'}}>I'm a Full Stack Web and iOS Developer with a background in Sound Design, from Tec de Monterrey University. Effective at combining rational and objective analysis with creative and inventive solutions to develop beautiful and efficient user-friendly applications.</p>
                </Animated>

                <Divider variant="middle" className={classes.divider} />

                <h3 className={classes.subtitle}>Skills</h3>

                <Grid container className={classes.logoContainer} justify='center' alignItems="center">
                    <Grid item>
                        <img alt='html5 logo' src={html5} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <img alt='css logo' src={css} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <img alt='js logo' src={js} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <img alt='react logo' src={react} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <img alt='material-ui logo' src={materialui} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <img alt='swift logo' src={swift} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <img alt='node logo' src={node} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <img alt='jquery logo' src={jquery} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <img alt='mern logo' src={mern} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <img alt='antdesign logo' src={antdesign} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <img alt='materialize logo' src={materialize} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <img alt='github logo' src={github} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <img alt='firebase logo' src={firebase} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <img alt='mysql logo' src={mysql} className={classes.logo}/>
                    </Grid>
                </Grid>

            </div>
            
          );
  }
