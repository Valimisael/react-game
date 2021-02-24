import React from 'react';
import ModeSwitcher from './ModeSwitcher';
import ChooseCover from './ChooseCover';
import Levels from './Levels';

class Header extends React.Component {
  render() {
    return(
      <header>
        <div className="game__settings">
          <div className="level">
            <Levels chooseGameLevel={this.props.chooseGameLevel} />
          </div>
        </div>
        <div className="game__name">
          <h1>Memory Game</h1>
        </div>
        <div className="interface__settings">
          <ChooseCover />
          <ModeSwitcher />
        </div>
      </header>
    )
  }
}

export default Header;