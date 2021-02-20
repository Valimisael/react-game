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
    this.resetState = this.resetState.bind(this);

    this.state = {
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

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  images = this.shuffle(images);

  handleState = (value) => {
    const src = value.state.src;
    const id = value.props.id;

    if (this.state.first.src == null) {
      this.setState({
        first: {
          src: src,
          id: id,
        }
      })
    } else if (this.state.second.src == null) {
      this.setState({
        second: {
          src: src,
          id: id,
        }
      })
    }
  }

  componentDidUpdate() {
    if (this.state.second.src != null) {
      this.compareImages(this.state.first.src, this.state.second.src);
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
      }, 1000);
    } else {
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

  render() {
    return(
      images.map((image, index) => {
        return(
          <div className="card" key={index}>
            <Card image={image} id={index} handle={this.handleState} />
          </div>
        )
      })
    )
  }
}

export default Cards;