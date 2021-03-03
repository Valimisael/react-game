import React from 'react';

class ResultMessage extends React.Component { 
  render() {
    const {results, place} = this.props;

    return (
      <span><strong>{place}{`:`}</strong>{` took ${results.time} for ${results.steps} steps`}</span>
    )
  }
}

export default ResultMessage;