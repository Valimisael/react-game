import React from 'react';
import Level from './Level';

class Levels extends React.Component {
  constructor(props) {
    super(props);

    this.handleState = this.handleState.bind(this);
    this.toggleActive = this.toggleActive.bind(this);

    this.state = {
      active: 0,
    }
  }

  componentDidMount() {
    this.toggleActive();
  }

  componentDidUpdate() {
    this.toggleActive();
  }

  handleState = (id, title) => {
    this.setState({
      active: id,
    })

    this.props.chooseGameLevel(title);
  }

  toggleActive = () => {
    const levels = document.getElementsByClassName('level__step');
    const active = levels[this.state.active];

    for (let i = 0; i < levels.length; i++) {
      levels[i].classList.remove('active');
    }

    active.classList.add('active');
  }

  render() {
    const {levels} = this.props;

    return (
      levels.map((level, index) => {
        return(
          <div className="level__step" key={index} >
            <Level level={level} handleState={this.handleState} inputId={index} />
          </div>
        )
      })      
    )
  }
}

export default Levels;