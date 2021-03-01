import React from 'react';
import Cover from './Cover';

import Cover1 from '../img/covers/cover-1.jpg';
import Cover2 from '../img/covers/cover-2.jpg';
import Cover3 from '../img/covers/cover-3.jpg';
import Cover4 from '../img/covers/cover-4.jpg';
import Cover5 from '../img/covers/cover-5.jpg';
import Cover6 from '../img/covers/cover-6.jpg';

class Covers extends React.Component {
  constructor(props) {
    super(props);

    this.covers = [Cover1, Cover2, Cover3, Cover4, Cover5, Cover6];
  }
  render() {
    return (
      this.covers.map((cover, index) => {
        return (
          <div className="cover" key={index} >
            <Cover changeCardsCover={this.props.changeCardsCover} cover={cover} id={index} />
          </div>
        )  
      })
    )
  }
}

export default Covers;