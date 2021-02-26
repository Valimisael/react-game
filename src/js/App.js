import React from 'react';
import '../css/vendor/reset.css';
import '../css/main.scss';
import Game from './Game';
import Footer from './Footer';

const App = () => {  
  return(
    <div className="app" id="app">
      <Game />
      <Footer />
    </div>
    )
  }

export default App;