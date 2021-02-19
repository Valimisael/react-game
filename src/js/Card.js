import React from 'react';
import CardBack from '../img/cards/cover.jpg';

class Card extends React.Component {  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      class: 'card__inner',
      src: this.props.image,
    }
  }

  handleClick = () => {
    document.getElementById(this.props.id).classList.add('flipped');
    this.props.handle(this);
  }

  render() {
    const {image, id} = this.props;

    return(
      <div onClick={this.handleClick} className={this.state.class} id={id} >
        <div className="card__front">
          <img className="card__image" src={image} />
        </div>
        <div className="card__back">
          <img src={CardBack} />
        </div>
      </div>
    )
  }
}

export default Card;