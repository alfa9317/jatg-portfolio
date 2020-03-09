import React from "react";
import "./style.css";
import {Animated} from "react-animated-css";
import { Button } from 'antd';
import NavBar from '../../components/NavBar'
import profilePic from '../../img/profilePic.jpeg'

class Home extends React.Component {
    render(){
        return (
            
            <div>
                <NavBar/>
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
             
                <div className='homePageTitle' style={{fontSize:'100px'}}>...</div>
            </div>
            
          );
    }
  }
  
  export default Home;