import React from 'react';

class HeaderButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const content = this.props.id;

    document.getElementById('popup').style.display = 'flex';

    this.props.updatePopUp(content);
  }
  
  render() {
    const {image} = this.props;

    return (
      <div className="header-button">
        <img className="header-button__icon" src={image} onClick={this.handleClick} />
      </div>
    )
  }
}

export default HeaderButton;