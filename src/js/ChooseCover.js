import React from 'react';
import Tshirt from '../img/covers/t-shirt.png';

class ChooseCover extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    document.getElementById('popup').style.display = 'flex';
  }
  
  render() {
    return (
      <div className="choose-cover">
        <img className="choose-cover__icon" src={Tshirt} onClick={this.handleClick} />
      </div>
    )
  }
}

export default ChooseCover;