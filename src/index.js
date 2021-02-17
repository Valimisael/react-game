import React from 'react';
import ReactDOM from 'react-dom';
import './css/vendor/reset.css';
import Header from './js/Header.js';
import CardsGrid from './js/CardsGrid.js';
import Footer from './js/Footer.js';

const App = () => {
  return(
    <div className="app">
      <Header />
      <CardsGrid />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
