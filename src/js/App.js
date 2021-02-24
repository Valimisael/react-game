import React from 'react';
import '../css/vendor/reset.css';
import '../css/main.scss';
import Game from './Game.js';
import Footer from './Footer.js';

const App = () => {
  return(
    <div className="app" id="app">
      <Game />
      <Footer />
    </div>
    )
  }

export default App;