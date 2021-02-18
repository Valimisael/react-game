import React from 'react';
import CardBack from '../img/cards/cover.jpg';

class Card extends React.Component {  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      class: 'card__inner',
    }
  }

  handleClick = () => {
    this.props.handle(this.props.image);
    this.setState({
      class: 'card__inner flipped',
    })
  }

  render() {
    const {image} = this.props;

    return(
      <div onClick={this.handleClick} className={this.state.class}>
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