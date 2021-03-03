import React from 'react';

class Level extends React.Component {
  constructor(props) {
    super(props);    

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    this.props.handleState(this.props.inputId, this.props.level.toLowerCase());
  }

  render() {
    const {level, inputId} = this.props;
    const value = level.toLowerCase();

    return (
      <div>
        <input className="level__input" id={value} type="radio" name="radio" value={level} input={inputId} onChange={this.handleChange} />
        <label className="level__label" htmlFor={value} title={`${level} level`} >{level}</label>
      </div>
    )
  }
}

export default Level;