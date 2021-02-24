import React from 'react';

class Cover extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {    
    this.props.changeCardsCover(event.target.src);
    
    document.getElementById('popup').style.display = 'none';
  }

  render() {
    const {cover, id} = this.props;

    return (
      <img src={cover} id={id} onClick={this.handleClick} />
    )
  }
}

export default Cover;