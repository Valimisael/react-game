import React from 'react';
import Restart from '../img/restart.png'; 

class RestartGame extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const flipped = document.getElementsByClassName('flipped');

    this.props.restartGame(flipped);
  }

  render () {
    return (
      <div className="restart-game" id="restart-game">
        <img className="restart-game__icon" src={Restart} onClick={this.handleClick} />
      </div>
    )
  }
}

export default RestartGame;