import React from 'react';
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

const images = [Angular, CSS, HTML, JS, Gulp, ReactJS, SCSS, Vue, Webpack, Angular, CSS, HTML, JS, Gulp, ReactJS, SCSS, Vue, Webpack];

class Cards extends React.Component {
  constructor(props){
    super(props);
    this.handleState = this.handleState.bind(this);
    this.compareImages = this.compareImages.bind(this);

    this.state = {
      first: null,
      second: null,
    }
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  images = this.shuffle(images);

  handleState = (value) => {    
    if (this.state.first == null) {
      this.setState({
        first: value,
      })
    } else if (this.state.second == null) {
      this.setState({
        second: value,
      })

      setTimeout(() =>
        this.compareImages(this.state.first, value),
        1000
      )
    }
  }

  compareImages = (first, second) => {    
    if (first != second) {
      document.querySelectorAll('.flipped').forEach((card) => {
        card.classList.remove('flipped');
      })
    } else {
      this.setState({
        first: null,
        second: null,
      })
    }
  }

  render() {
    return(
      images.map((image, index) => {
        return(
          <div className="card" key={index}>
            <Card image={image} handle={this.handleState} />
          </div>
        )
      })
    )
  }
}

export default Cards;