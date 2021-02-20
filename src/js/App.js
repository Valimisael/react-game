import React from 'react';
import '../css/vendor/reset.css';
import '../css/main.scss';
import Header from './Header.js';
import Cards from './Cards.js';
import Footer from './Footer.js';
import PopUp from './PopUp';

const App = () => {
  return(
    <div className="app" id="app">
      <Header />
      <main>
        <div className="cards">
          <Cards />
        </div>
      </main>
      <Footer />
      <PopUp />
    </div>
  )
}

export default App;