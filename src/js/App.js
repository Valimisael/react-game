import React from 'react';
import '../css/vendor/reset.css';
import '../css/main.scss';
import Header from './Header.js';
import Game from './Game.js';
import Footer from './Footer.js';
import PopUp from './PopUp';

const App = () => {
  return(
    <div className="app" id="app">
      <Header />
      <main>
        <Game />
      </main>
      <Footer />
      <PopUp />
    </div>
  )
}

export default App;