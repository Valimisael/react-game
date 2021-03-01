import React from 'react';
import Header from './Header';
import AudioSettings from './AudioSettings';
import Card from './Card';
import PopUp from './PopUp';
import {flipBack, flipAll, correct, music} from './Audio';

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
    this.gameStart = this.gameStart.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.updatePopUp = this.updatePopUp.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
    this.timer = this.timer.bind(this);
    this.countSteps = this.countSteps.bind(this);
    this.rememberCards = this.rememberCards.bind(this);
    this.compareImages = this.compareImages.bind(this);
    this.resetState = this.resetState.bind(this);
    this.returnPaired = this.returnPaired.bind(this);
    this.endGame = this.endGame.bind(this);
    this.getResults = this.getResults.bind(this);

    this.levels = ['Easy', 'Medium', 'Hard'];
    this.easy = [SCSS, Webpack, JS, ReactJS, SCSS, Webpack, JS, ReactJS];
    this.medium = [Angular, CSS, JS, Gulp, ReactJS, SCSS, Vue, Webpack, Angular, CSS, JS, Gulp, ReactJS, SCSS, Vue, Webpack];
    this.hard = [Angular, CSS, ESLint, Gulp, HTML, JS, NodeJS, Redux, ReactJS, SCSS, Vue, Webpack, Angular, CSS, ESLint, Gulp, HTML, JS, NodeJS, Redux, ReactJS, SCSS, Vue, Webpack];
    this.results = {
      easy: [],
      medium: [],
      hard: [],
    };

    this.state = {
      images: this.easy,
      level: 'easy',
      cover: Cover,
      first: {
        src: null,
        id: null,
      },
      second: {
        src: null,
        id: null,
      },
      isGoing: false,
      popup: null,
      rightAnswers: 0,
      time: 0,
      steps: 0,
    }
  }

  chooseGameLevel = (title) => {
    document.getElementById('restart-game').style.display = 'none';

    const cards = document.getElementsByClassName('flipped');
    const images = this[title];

    while (cards.length) {
      cards[0].classList.remove('flipped');

      flipAll.play();
    }

    this.resetState();
    
    setTimeout(() => {
      this.setState({
        isGoing: false,
        images: this.shuffle(images),
        level: title,
        rightAnswers: 0,
        steps: 0,
        time: 0,
      })
    }, 500);
  }

  changeCardsCover = (cover) => {
    this.setState({
      cover: cover,
    })
  }

  gameStart = () => {
    document.getElementById('restart-game').style.display = 'flex';

    if (this.state.isGoing == false) {
      this.setState({
        isGoing: true,
      })

      this.timer();
    }
  }

  restartGame = (cards) => {    
    document.getElementById('restart-game').style.display = 'none';

    const images = this.state.images;

    this.resetState();

    while (cards.length) {
      cards[0].classList.remove('flipped');
    }

    flipAll.play();
  
    setTimeout(() => {  
      this.setState({
        isGoing: false,
        images: this.shuffle(images),
        rightAnswers: 0,
        steps: 0,
        time: 0,
      })
    }, 500);
  }

  updatePopUp = (content) => {
    this.setState({
      popup: content,
    })
  }

  closePopUp = () => {  
    document.getElementById('popup').style.display = 'none';
  }

  timer = () => {
    const time = new Date();
    
    this.setState({
      time: time,
    })
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  countSteps = () => {
    const steps = this.state.steps + 1;

    this.setState({
      steps: steps,
    })
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

      correct.play();
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
    const time = new Date() - this.state.time;

    if (cards.length == images.length) {
      document.getElementById('restart-game').style.display = 'none';

      this.getResults(time);
      this.resetState();
  
      while (cards.length) {
        cards[0].classList.remove('flipped');
      }

      flipAll.play();
    
      setTimeout(() => {  
        this.setState({
          rightAnswers: 0,
          isGoing: false,
          images: this.shuffle(images),
        })
      }, 500);
    }
  }

  getResults = (time) => {
    const level = this.state.level;

    if (this.state.isGoing == true) {
      this.setState({
        time: time,
      })

      this.results[level].push(
        {
          steps: this.state.steps,
          time: this.state.time,
        }
      )
      
      localStorage.results = JSON.stringify(this.results);

      this.setState({
        isGoing: false,
        steps: 0,
        time: 0,
      })
    }
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

    if (localStorage.getItem('results') != null) {
      this.results = JSON.parse(localStorage.results);
    }

    return (  
      <div>
        <Header chooseGameLevel={this.chooseGameLevel} levels={this.levels} restartGame={this.restartGame} updatePopUp={this.updatePopUp} />
        <main>
          <AudioSettings setAudioVolume={this.setAudioVolume} />
          <div className={`cards cards__${this.state.level}`}>
            {
              images.map((image, index) => {
                return(
                  <div className="card" key={index}>
                    <Card image={image} cover={cover} id={index} gameStart={this.gameStart} endGame={this.endGame} countSteps={this.countSteps} rememberCards={this.rememberCards} />
                  </div>
                )
              })
            }        
          </div>
        </main> 
        <div className="popup" id="popup">
          <div className="popup__body">     
            <PopUp content={this.state.popup} levels={this.levels} changeCardsCover={this.changeCardsCover} />
            <div className="popup__close" onClick={this.closePopUp}>+</div>
          </div>
        </div>
      </div>   
    )
  }
}

export default Game;