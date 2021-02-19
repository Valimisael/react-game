import React from 'react';
import ModeSwitcher from './ModeSwitcher';

class Header extends React.Component {
  render() {
    return(
      <header>
        <div className="game__settings">
          <div className="timer"></div>
        </div>
        <div className="game__name">
          <h1>Memory Game</h1>
        </div>
        <div className="interface__settings">
          <div className="mode-switcher">
            <ModeSwitcher />
          </div>
        </div>
      </header>
    )
  }
}

export default Header;