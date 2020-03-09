import React, {Component} from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import logo from '../../img/logo.png'
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

class NavBar extends Component{

    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render(){
        return (
            <div>
                <div id="navBar">
                    <nav className=" light-blue darken-1">
                        <div className="nav-wrapper">
                            <div className="container">
                                <a href="#" className="brandLogo left"><img id="navBarLogoImage" className="brand-logo" src={logo} style={{width:'210px',height:'auto'}}/></a>
                                <a href="#" className="sidenav-trigger" data-target="slide_out_1"><i className="material-icons">menu</i></a>
                                <ul className="hide-on-med-and-down right">
                                    <li>
                                        <Link to="/" className={window.location.pathname === "/" ? "active" : ""}>Home Page</Link>
                                    </li>
                                    <li><Link to="/my-work" className={window.location.pathname === "/orders" ? "active" : ""}>My Works</Link></li>
                                    <li><Link to="/contact" className={window.location.pathname === "/about-us" ? "active" : ""}>Contact Info</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
    
                <ul id="slide_out_1" className="sidenav">
                    <li><Link to="/" className={window.location.pathname === "/" ? "active" : ""}>Home Page</Link></li>
                    <li><Link to="/my-work" className={window.location.pathname === "/orders" ? "active" : ""}>My Works</Link></li>
                    <li><Link to="/contact" className={window.location.pathname === "/about-us" ? "active" : ""}>Contact Info</Link></li>
                </ul>
            </div>
        );
    }
  }
export default NavBar;