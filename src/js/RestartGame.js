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
      <div className="button restart-game" id="restart-game">
        <img className="button__icon restart-game__icon" src={Restart} onClick={this.handleClick} title="Restart game" />
      </div>
    )
  }
}

export default RestartGame;