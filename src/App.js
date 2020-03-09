import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import MyWork from './pages/MyWork';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/eso" component={MyWork}/>
    //   </div>
    // </Router>
    <Home/>
  );
}

export default App;
