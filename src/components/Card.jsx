import React from "react";

function Card({ img, name, price }) {
  return (
    <div className='ucard m-3'>
      <img className='card-image' src={img} alt='' />
      <h1 className='card-text'>{name}</h1>
      <h1 className='card-text'>Rs: {price}/=</h1>
      <div className='d-flex justify-content-center align-items-center'>
        <button className='card-order-now-button mb-5'>Order Now</button>
      </div>
    </div>
  );
}

export default Card;
