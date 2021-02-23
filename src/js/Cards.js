import React from 'react';
import Card from './Card';

class Cards extends React.Component {
  constructor(props){
    super(props);
    this.rememberCards = this.rememberCards.bind(this);
    this.compareImages = this.compareImages.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      first: {
        src: null,
        id: null,
        paired: false,
      },
      second: {
        src: null,
        id: null,
        paired: false,
      },
    }
  }

  rememberCards = (value) => {
    const src = value.props.image;
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
      this.props.returnPaired();
      this.resetState();
    }  
  }

  resetState = () => {
    this.setState({
      first: {
        src: null,
        id: null,
        paired: false,
      },
      second: {
        src: null,
        id: null,
        paired: false,
      }
    })
  }

  render() {
    const {images} = this.props;
    
    return(
      images.map((image, index) => {
        return(
          <div className="card" key={index}>
            <Card image={image} id={index} rememberCards={this.rememberCards} />
          </div>
        )
      })
    )
  }
}

export default Cards;