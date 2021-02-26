import React from 'react';
import Header from './Header';
import AudioSettings from './AudioSettings';
import Card from './Card';
import PopUp from './PopUp';
import {flipBack, flipAll, music} from './Audio';

import Cover from '../img/covers/cover-1.jpg';

import Angular from '../img/cards/angular.jpg';
import CSS from '../img/cards/css.jpg';
import ESLint from '../img/cards/eslint.jpg';
import Gulp from '../img/cards/gulp.jpg';
import HTML from '../img/cards/html.jpg';
import JS from '../img/cards/js.jpg';
import NodeJS from '../img/cards/nodejs.jpg';
import ReactJS from '../img/cards/react.jpg';
import Redux from '../img/cards/redux.jpg';
import SCSS from '../img/cards/scss.jpg';
import Vue from '../img/cards/vue.jpg';
import Webpack from '../img/cards/webpack.jpg';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.chooseGameLevel = this.chooseGameLevel.bind(this);
    this.changeCardsCover = this.changeCardsCover.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.rememberCards = this.rememberCards.bind(this);
    this.compareImages = this.compareImages.bind(this);
    this.resetState = this.resetState.bind(this);
    this.returnPaired = this.returnPaired.bind(this);
    this.endGame = this.endGame.bind(this);

    this.images = [Angular, CSS, ESLint, Gulp, HTML, JS, NodeJS, Redux, ReactJS, SCSS, Vue, Webpack];

    this.state = {
      0: [CSS, HTML, JS, Angular, CSS, HTML, JS, Angular],
      1: [Angular, CSS, JS, Gulp, ReactJS, SCSS, Vue, Webpack, Angular, CSS, JS, Gulp, ReactJS, SCSS, Vue, Webpack],
      2: [Angular, CSS, ESLint, Gulp, HTML, JS, NodeJS, Redux, ReactJS, SCSS, Vue, Webpack, Angular, CSS, ESLint, Gulp, HTML, JS, NodeJS, Redux, ReactJS, SCSS, Vue, Webpack],
      images: [Angular, CSS, JS, Gulp, ReactJS, SCSS, Vue, Webpack, Angular, CSS, JS, Gulp, ReactJS, SCSS, Vue, Webpack],
      rightAnswers: 0,
      level: 'medium',
      cover: Cover,
      first: {
        src: null,
        id: null,
      },
      second: {
        src: null,
        id: null,
      },
    }
  }

  chooseGameLevel = (id, title) => {
    const cards = document.getElementsByClassName('flipped');
    const images = this.state[id];

    while (cards.length) {
      cards[0].classList.remove('flipped');

      flipAll.play();
    }

    this.resetState();
    
    setTimeout(() => {
      this.setState({      
        images: this.shuffle(images),
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

  rememberCards = (value) => {
    const first = this.state.first.src;
    const second = this.state.second.src;
    const src = value.props.image;
    const id = value.props.id;

    if (first == null) {
      this.setState({
        first: {
          src: src,
          id: id,
        }
      })
    } else if (second == null) {
      this.setState({
        second: {
          src: src,
          id: id,
        }
      })
    }    
  }

  compareImages = (first, second) => { 
    if (first != second) {
      const first = this.state.first.id;
      const second = this.state.second.id;

      this.resetState();

      setTimeout(() => {
        document.getElementById(first).classList.remove('flipped');
        document.getElementById(second).classList.remove('flipped');

        flipBack.play();
      }, 1000);
    } else {
      this.returnPaired();
      this.resetState();
    }  
  }

  resetState = () => {
    this.setState({
      first: {
        src: null,
        id: null,
      },
      second: {
        src: null,
        id: null,
      }
    })
  }

  returnPaired = () => {
    const answers = this.state.rightAnswers;

    this.setState({
      rightAnswers: answers + 2,
    })
  }

  endGame = (cards) => {
    const images = this.state.images;

    while (cards.length) {
      cards[0].classList.remove('flipped');

      flipAll.play();
    }
    
    setTimeout(() => {
      this.setState({
        rightAnswers: 0,
        images: this.shuffle(images),
      })
    }, 1000);
  }

  componentDidMount() {
    music.muted = true;
    music.volume = 0.2;

    const images = this.state.images;

    this.setState({
      images: this.shuffle(images),
    })
  }

  componentDidUpdate() {
    const first = this.state.first.src;
    const second = this.state.second.src;
    const answers = this.state.rightAnswers;
    const cards = this.state.images;
    const flipped = document.getElementsByClassName('flipped');

    if (second != null) {
      this.compareImages(first, second);
    }

    if (answers == cards.length) {
      setTimeout(() => {
        this.endGame(flipped);        
      }, 1000);
    }
  }

  render () {
    const images = this.state.images;
    const cover = this.state.cover;

    return (  
      <div>
        <Header chooseGameLevel={this.chooseGameLevel} />
        <main>
          <AudioSettings setAudioVolume={this.setAudioVolume} />
          <div className={`cards cards__${this.state.level}`}>
            {
              images.map((image, index) => {
                return(
                  <div className="card" key={index}>
                    <Card image={image} cover={cover} id={index} rememberCards={this.rememberCards} />
                  </div>
                )
              })
            }        
          </div>
        </main>        
        <PopUp changeCardsCover={this.changeCardsCover} />
      </div>   
    )
  }
}

export default Game;