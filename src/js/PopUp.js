import React from 'react';
import Covers from './Covers';

class PopUp extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    document.getElementById('popup').style.display = 'none';
  }

  render() {
    return (
      <div className="popup" id="popup">
        <div className="popup__body">
          <Covers changeCardsCover={this.props.changeCardsCover} />
          <div className="popup__close" onClick={this.handleClick}>x</div>
        </div>
      </div>
    )
  }
}

export default PopUp;