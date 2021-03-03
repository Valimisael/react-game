import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const content = this.props.id;

    document.getElementById('popup').classList.add('open');
    document.querySelector('body').classList.add('not-scrollable');

    this.props.updatePopUp(content);
  }
  
  render() {
    const {image, title} = this.props;

    return (
      <div className="button">
        <img className="button__icon" src={image} onClick={this.handleClick} title={title} />
      </div>
    )
  }
}

export default Button;