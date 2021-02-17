import React from 'react';
import '../css/vendor/reset.css';
import '../css/base/common.scss';
import Header from './Header.js';
import CardsGrid from './CardsGrid.js';
import Footer from './Footer.js';

const App = () => {
  return(
    <div className="app">
      <Header />
      <CardsGrid />
      <Footer />
    </div>
  )
}

export default App;