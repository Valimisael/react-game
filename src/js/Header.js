import React from 'react';
import ModeSwitcher from './ModeSwitcher';
import HeaderButton from './HeaderButton';
import Levels from './Levels';
import RestartGame from './RestartGame';

import Tshirt from '../img/covers/t-shirt.png';
import Results from '../img/results.svg';

class Header extends React.Component {
  render() {
    return(
      <header>
        <div className="game__settings">
          <div className="level">
            <Levels chooseGameLevel={this.props.chooseGameLevel} levels={this.props.levels} />
          </div>
          <HeaderButton id="get-results" image={Results} updatePopUp={this.props.updatePopUp} />
          <RestartGame restartGame={this.props.restartGame} />
        </div>
        <div className="game__name">
          <h1>Memory Game</h1>
        </div>
        <div className="interface__settings">
          <HeaderButton id="choose-cover" image={Tshirt} updatePopUp={this.props.updatePopUp} />
          <ModeSwitcher />
        </div>
      </header>
    )
  }
}

export default Header;