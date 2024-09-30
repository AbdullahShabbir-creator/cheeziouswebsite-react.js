
import { useState } from 'react';
import React from 'react'
import './Buttons.css';
import { useCart } from './CartContext';  
export default function Back(){
    const { addToCart } = useCart();
    const [cardState] = useState({
        imgSrc: "https://em-cdn.eatmubarak.pk/54946/dish_image/1629619743.jpg",
        title: "Fettuccine Alfredo Pasta",
        text: "Pasta Made In Yummiest White Sauce With Chicken Chunks Topped With Cheese.",
        price: "Rs. 1,050.00",
        buttontext: "Add To Cart"
    });
    const handleAddToCart = () => {
      addToCart(cardState);
    };
         
    return (
        <div className=''>
            <div className=" card3 mt-2 p-2" >
                <h4 className='text-center'>I'm Back!</h4>
                <img src="https://em-cdn.eatmubarak.pk/54946/dish_image/1629619743.jpg" className="back-img card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title text-center m-0">Fettuccine Alfredo Pasta</h5>
                    <h6 className="card-text back-h6 m-1;">Pasta Made In Yummiest White Sauce With Chicken Chunks Topped With Cheese.</h6>
                    <p className='text text-danger text-center font-weight-bold mt-1'>Rs. 1,050.00</p>
                    <div className='text-center '>
                        <button className="btn1" onClick={handleAddToCart}>Add To Cart </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
