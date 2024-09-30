import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';
const Buttons = () => {
  return (
    <div className='container'>
      <div className='button-row'>
        <Link className='btn' to="/back">I am Back</Link>
        <Link className='btn' to="/Strater">Starter</Link>
        <Link className='btn' to="/somewhat-local">SomeWhat Local</Link>
        <Link className='btn' to="/somewhat-scooper">SomeWhat Scooper</Link>
        <Link className='btn' to="/cheesy-treats">Cheesy Treats</Link>
        <Link className='btn' to="/pizza-deals">Pizza Deals</Link>
        <Link className='btn' to="/sandwich-and-platter">Sandwich And Platter</Link>
        <Link className='btn' to="/special-pizza">Special Pizza</Link>
      </div>
    </div>
  );
};
export default Buttons;
