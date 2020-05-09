import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import MyWork from './pages/MyWork';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/my-work" component={MyWork}/>
        <Route exact path="/contact" component={Contact}/>
      </div>
    </Router>
  );
}

export default App;
