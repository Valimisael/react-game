import React from 'react';
import ResultMessage from './ResultMessage';

class Result extends React.Component { 
  constructor(props) {
    super(props);

    this.results = [];    
    this.formatTime = this.formatTime.bind(this);
  }

  formatTime = (results) => {
    let formatedResult = results;

    results.map((result, index) => {
      const minutes = Math.floor(result.time / 60000);
      const seconds = ((result.time % 60000) / 1000).toFixed(0);
      
      formatedResult[index].time = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    })

    return formatedResult;
  }

  render() {
    const {title} = this.props;
    const level = title.toLowerCase();

    const results = JSON.parse(localStorage.results)[level];
    this.results = this.formatTime(results);

    return (
      <div>
        <h3 className={level}>{title} Level</h3>
        <ol>
          {
            results.map((result, index) => {
              return(
                <li key={index}>
                  <ResultMessage results={result} place={index + 1} />
                </li>
              )
            })
          }
        </ol>
      </div>
    )
  }
}

export default Result;