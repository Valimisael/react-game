import React from 'react';
import '../css/vendor/reset.css';
import '../css/main.scss';
import Game from './Game';
import Footer from './Footer';

const App = () => {
  let mode = '';

  if (localStorage.getItem('mode') != null) {
    mode = localStorage.getItem('mode');
  }

  return(
    <div className={`app ${mode}`} id="app">
      <Game />
      <Footer />
    </div>
    )
  }

export default App;