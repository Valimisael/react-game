import React from 'react';
import Result from './Result';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.error = "You haven't played any games yet..."
  }

  render () {
    const {levels} = this.props;

    if (localStorage.getItem('results') != null) {
      return (
        <div className="results">
          <h2>Results</h2>
          <div className="results-table">
            {
              levels.map((level, index) => {
                return (
                  <div className="results-table__content" key={index} >
                    <Result title={level} />
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    } else {
      return (
        <div className="results__error">{this.error}</div>
      )
    }
  }
}

export default Results;