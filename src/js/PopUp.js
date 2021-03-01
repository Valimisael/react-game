import React from 'react';
import Covers from './Covers';
import Results from './Results';

class PopUp extends React.Component {
  render() {
    const {content} = this.props;

    switch (content) {
      case 'choose-cover':
        return <Covers changeCardsCover={this.props.changeCardsCover} />
        break;
      case 'get-results':
        return <Results levels={this.props.levels} />
        break;
      default:
        return <div>Not Found</div>;
        break;
    }
  }
}

export default PopUp;