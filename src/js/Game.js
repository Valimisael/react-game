import React from 'react';
import Header from './Header.js';
import Cards from './Cards';
import PopUp from './PopUp';

import Cover from '../img/covers/cover-1.jpg';

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
    this.chooseGameLevel = this.chooseGameLevel.bind(this);
    this.changeCardsCover = this.changeCardsCover.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.returnPaired = this.returnPaired.bind(this);
    this.endGame = this.endGame.bind(this);

    this.state = {
      0: [CSS, HTML, JS, Angular, CSS, HTML, JS, Angular],
      1: [Angular, CSS, JS, Gulp, ReactJS, SCSS, Vue, Webpack, Angular, CSS, JS, Gulp, ReactJS, SCSS, Vue, Webpack],
      2: [Angular, CSS, JS, Gulp, ReactJS, SCSS, Vue, Webpack, Angular, CSS, JS, Gulp, ReactJS, SCSS, Vue, Webpack, CSS, HTML, JS, Angular, CSS, HTML, JS, Angular],
      images: [Angular, CSS, JS, Gulp, ReactJS, SCSS, Vue, Webpack, Angular, CSS, JS, Gulp, ReactJS, SCSS, Vue, Webpack],
      rightAnswers: 0,
      level: 'medium',
      cover: Cover,
    }
  }

  chooseGameLevel = (id, title) => {
    const cards = document.getElementsByClassName('flipped');

    while (cards.length) {
      cards[0].classList.remove('flipped');
    }
    
    setTimeout(() => {
      this.setState({      
        images: this.shuffle(this.state[id]),
        level: title,
        rightAnswers: 0,
      })
    }, 500);
  }

  changeCardsCover = (cover) => {
    this.setState({
      cover: cover,
    })
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
      }
    })

    this.setState({
      cards: cards,
    })
  }

  componentDidUpdate() {
    const answers = this.state.rightAnswers;
    const cards = this.state.images;
    const flipped = document.getElementsByClassName('flipped');

    if (answers == cards.length) {
      setTimeout(() => {
        this.endGame(flipped);        
      }, 1000);
    }
  }

  render () {
    return (  
      <div>
        <Header chooseGameLevel={this.chooseGameLevel} />
        <main>
          <div className={`cards cards__${this.state.level}`}>
            <Cards images={this.state.images} cover={this.state.cover} chooseGameLevel={this.chooseGameLevel} returnPaired={this.returnPaired} />
          </div>
        </main>        
        <PopUp changeCardsCover={this.changeCardsCover} />
      </div>   
    )
  }
}

export default Game;