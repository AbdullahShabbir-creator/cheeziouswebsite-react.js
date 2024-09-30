import React from 'react';
import CardComponent from './CardComponent';

const cheesytreatdata = [
    { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/1612956575722870824.jpg', title: 'Chicken Tikka', text: 'Tender Chunks of Marinated Grilled Chicken with Savory Onion', price: 'Rs:690', buttontext: 'Add To Cart' },
    { imgSrc: 'https://em-cdn.eatmubarak.pk/54946/dish_image/1629377928.jpg', title: 'Black Pepper Tikka', text: 'A Blend of Marinated Black Pepper Chicken, Onion & Bell Pepper', price: 'Rs:790', buttontext: 'Add To Cart' },
    { imgSrc: 'https://em-cdn.eatmubarak.pk/54946/dish_image/1642865986.png', title: 'Chicken Pepperoni Pizza', text: 'Chicken Pepperoni, Pizza Sauce and Cheese', price: 'Rs:1000', buttontext: 'Add To Cart' },
    { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/16129664171069619674.jpg', title: 'Cheezy SticksCard', text: 'Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.', price: 'Rs:1500', buttontext: 'Add To Cart' },
    { imgSrc: 'https://em-cdn.eatmubarak.pk/54946/dish_image/1628885239.png', title: 'Chicken Supreme', text: 'A Combination Of 3 Flavors of Chicken, Black Olives, Mushrooms Bell Pepper and Onion.', price: 'Rs:800', buttontext: 'Add To Cart'},
    { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027832701370189888.jpg', title: 'Cheezy SticksCard', text: 'Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.', price: 'Rs:800', buttontext: 'Add To Cart' },
];

const Cheesytreats= () => (
  <div className="somewhat-scooper">
    <h1 className='somelocal mt-4'>Cheesy Treats</h1>
    <div className="card-list">
      {cheesytreatdata.map((card, index) => (
        <CardComponent
          key={index}
          imgSrc={card.imgSrc}
          title={card.title}
          text={card.text}
          price={card.price}
          buttontext={card.buttontext}
        />
      ))}
    </div>
  </div>
);

export default Cheesytreats;
