import React from 'react';
import '../css/cards.scss';
import Card from './Card';

import Angular from '../img/cards/angular.jpg';
import CSS from '../img/cards/css.jpg';
import Gulp from '../img/cards/gulp.jpg';
import HTML from '../img/cards/html.jpg';
import JS from '../img/cards/js.jpg';
import ReactJS from '../img/cards/react.jpg';
import SCSS from '../img/cards/scss.jpg';
import Vue from '../img/cards/vue.jpg';
import Webpack from '../img/cards/webpack.jpg';

class CardsGrid extends React.Component {  
  render() {

    const cardImages = [Angular, CSS, HTML, JS, Gulp, ReactJS, SCSS, Vue, Webpack, Angular, CSS, HTML, JS, Gulp, ReactJS, SCSS, Vue, Webpack];

    return(
      <main>
        <Card cardImages={cardImages} />
      </main>
    )
  }
}

export default CardsGrid;