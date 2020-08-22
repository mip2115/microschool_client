import React from 'react';
import "./sass/main.scss";
import Navbar from './components/nav/Navbar';
import Welcome from './components/screens/welcome/Welcome';
import Results from './components/screens/results/Results';

function App() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <Navbar />
        {/* <Welcome /> */}
        <Results />
      </div>
    </div>
  );
}

export default App;
