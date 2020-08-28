import React from 'react';
import "./sass/main.scss";
import Navbar from './components/nav/Navbar';
import Welcome from './components/screens/welcome/Welcome';
import Results from './components/screens/results/Results';
import About from './components/screens/about/About';
import Contact from './components/screens/contact/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <div className="app-wrapper">
            <Navbar />
              <Route exact path="/">
                <Welcome /> 
              </Route>
              <Route exact path="/results">
                <Results />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
          </div>
        </div>
    </Switch>
    </Router>
  );
}

export default App;
