import React from 'react';
import Cards from './Cards';

import Angular from '../img/cards/angular.jpg';
import CSS from '../img/cards/css.jpg';
import Gulp from '../img/cards/gulp.jpg';
import HTML from '../img/cards/html.jpg';
import JS from '../img/cards/js.jpg';
import ReactJS from '../img/cards/react.jpg';
import SCSS from '../img/cards/scss.jpg';
import Vue from '../img/cards/vue.jpg';
import Webpack from '../img/cards/webpack.jpg';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.shuffle = this.shuffle.bind(this);
    this.returnPaired = this.returnPaired.bind(this);
    this.endGame = this.endGame.bind(this);

    this.state = {
      images: [Angular, CSS, HTML, JS, Gulp, ReactJS, SCSS, Vue, Webpack, Angular, CSS, HTML, JS, Gulp, ReactJS, SCSS, Vue, Webpack],
      cards: {},
      rightAnswers: 0,
    }
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  returnPaired = () => {
    const answers = this.state.rightAnswers;

    this.setState({
      rightAnswers: answers + 2,
    })
  }

  endGame = (cards) => {
    while (cards.length) {
      cards[0].classList.remove('flipped');
    }
    
    setTimeout(() => {
      this.setState({
        rightAnswers: 0,
        images: this.shuffle(this.state.images),
      })
    }, 1000);
  }

  componentDidMount() {
    this.setState({
      images: this.shuffle(this.state.images),
    })

    const images = this.state.images;
    const cards = images.map((image) => {
      return {
        src: image,
        paired: false,
      }
    })

    this.setState({
      cards: cards,
    })
  }

  componentDidUpdate() {
    const answers = this.state.rightAnswers;
    const cards = this.state.cards;
    const flipped = document.getElementsByClassName('flipped');

    if (answers == cards.length) {
      setTimeout(() => {
        this.endGame(flipped);        
      }, 1000);
    }
  }

  render () {
    return (      
      <div className="cards">
        <Cards images={this.state.images} returnPaired={this.returnPaired} />
      </div>
    )
  }
}

export default Game;