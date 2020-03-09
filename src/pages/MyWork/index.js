import React, { Component } from "react";
import "./style.css";
import NavBar from "../../components/NavBar"
import InfoCard from "../../components/InfoCard"
import info from "../../info.json";
import {Animated} from "react-animated-css";


class MyWork extends Component {

state = {
    info
    };

  render(){
    return (
        <div>
            <NavBar/>
            <div style={{margin:'40px 5vw 10px 5vw'}}>
                {this.state.info.map(info => (
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} isVisible={true}>
                        <InfoCard
                        id={info.id}
                        key={info.id}
                        name={info.name}
                        image={info.image}
                        description={info.description}
                        url={info.url}
                        />
                    </Animated>
                ))}
            </div>
        </div>
      );
  }
}

export default MyWork;
