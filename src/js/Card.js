import React from 'react';
import {flipFront} from './Audio';

class Card extends React.Component {  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    document.getElementById(this.props.id).classList.add('flipped');
    flipFront.play();

    this.props.rememberCards(this);
  }

  render() {
    const {image, cover, id} = this.props;

    return(
      <div onClick={this.handleClick} className="card__inner" id={id} >
        <div className="card__front">
          <img className="card__image" src={image} />
        </div>
        <div className="card__back">
          <img className="card__back--image" src={cover} />
        </div>
      </div>
    )
  }
}

export default Card;