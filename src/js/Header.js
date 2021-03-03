import React from 'react';
import ModeSwitcher from './ModeSwitcher';
import Button from './Button';
import Levels from './Levels';
import RestartGame from './RestartGame';

import Tshirt from '../img/covers/t-shirt.png';
import Results from '../img/results.svg';
import Keys from '../img/hot-key.png';

class Header extends React.Component {
  render() {
    return(
      <header>
        <div className="game__settings">
          <div className="level">
            <Levels chooseGameLevel={this.props.chooseGameLevel} levels={this.props.levels} />
          </div>
          <Button id="hot-keys" image={Keys} updatePopUp={this.props.updatePopUp} title="Hot Keys" />
          <Button id="get-results" image={Results} updatePopUp={this.props.updatePopUp} title="Score" />
          <RestartGame restartGame={this.props.restartGame} />
        </div>
        <div className="game__name">
          <h1>Memory Game</h1>
        </div>
        <div className="interface__settings">
          <Button id="choose-cover" image={Tshirt} updatePopUp={this.props.updatePopUp} title="Choose Card's Cover" />
          <ModeSwitcher />
        </div>
      </header>
    )
  }
}

export default Header;