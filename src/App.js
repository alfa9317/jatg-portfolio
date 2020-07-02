// import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css'
// import Home from './pages/Home';
// import MyWork from './pages/MyWork';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Route exact path="/" component={Home} />
//         <Route exact path="/my-work" component={MyWork}/>
//         <Route exact path="/contact" component={Contact}/>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css'
import theme from './components/ui/Theme';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Home from './pages/Home';
import MyWork from './pages/MyWork';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/myworks' component={MyWork} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
