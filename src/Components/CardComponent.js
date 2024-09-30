import React, { useState } from 'react';
import { useCart } from './CartContext';
const CardComponent =  ({imgSrc, title, text, price, buttontext }) => {
  const { addToCart } = useCart();

  const [cardState] = useState({
    imgSrc,
    title,
    text,
    price,
    buttontext
  });
  const handleAddToCart = () => {
    addToCart(cardState);     
  };

  return (
    <>
    <div className="card1 card1 mt-3">
      <img src={cardState.imgSrc} alt={cardState.title} className="card-img mt-2 card-img-top" />
      <h3 className="card-title">{cardState.title}</h3>
      <h6 className='card-text text-h6 text-muted'>{cardState.text}</h6>
      <p className='text text-danger text-center font-weight-bold mt-1'>{cardState.price}</p>
      <div className='text-center '>
        <button className="btn1" onClick={handleAddToCart}>{cardState.buttontext}</button>
      </div>
    </div>
    </>
  );
};

export default CardComponent;
