import React from 'react';
import '../css/card.scss';

const Images = (props) => {
  const images = props.cardImages.map((image, index) => {
    return(
      <div className="card" key={index}>
        <img src={image} />
      </div>
    )
  })

  return (
    <div className="cards">{images}</div>
  ) 
}

const Card = (props) => {
  const {cardImages} = props;

  return(
    <Images cardImages={cardImages} />
  )
}

export default Card;