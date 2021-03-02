import React from 'react';

class Cover extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {    
    this.props.changeCardsCover(event.target.src);
    
    document.getElementById('popup').classList.remove('open');
    document.querySelector('body').classList.remove('not-scrollable');
  }

  render() {
    const {cover, id} = this.props;

    return (
      <img src={cover} id={id} onClick={this.handleClick} />
    )
  }
}

export default Cover;