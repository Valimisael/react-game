import React from 'react';

class ResultData extends React.Component { 
  render() {
    const {results, place} = this.props;

    return (
      <span>{`${place} place: took ${results.time} for ${results.steps} steps`}</span>
    )
  }
}

export default ResultData;