import React from 'react'
import CardComponent from './CardComponent'
export default function Sandwhich() {
    const Sandwhich=[
        { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/16129588831247331510.jpg', title: 'Cheezy SticksCard', text: 'Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.', price: 'Rs:1200', buttontext: 'Add To Cart' },
        { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027813671864187338.jpg', title: 'Cheezy SticksCard', text: 'Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.', price: 'Rs:1500', buttontext: 'Add To Cart' },
        { imgSrc: 'https://em-cdn.eatmubarak.pk/54946/dish_image/1629376979.jpg', title: 'Cheezy SticksCard', text: 'Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.', price: 'Rs:1000', buttontext: 'Add To Cart' },
        { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/1612872495497065653.png', title: 'Sausage Pizza', text: 'Chicken Sausages, Pizza Sauce and Cheese', price: 'Rs:1200', buttontext: 'Add To Cart' },
  { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027791221858590131.jpg', title: 'Chicken Mushroom', text: 'Tender Chunks of Marinated Grilled Chicken Tikka, Lots of Mushrooms, Onion and Tomato Sauce', price: 'Rs:1500', buttontext: 'Add To Cart' },
  { imgSrc: 'https://em-cdn.eatmubarak.pk/54946/dish_image/1642865986.png', title: 'Chicken Pepperoni Pizza', text: 'Chicken Pepperoni, Pizza Sauce and Cheese', price: 'Rs:1000', buttontext: 'Add To Cart' },
  { imgSrc: 'https://em-cdn.eatmubarak.pk/54946/dish_image/1628885239.png', title: 'Chicken Supreme', text: 'A Combination Of 3 Flavors of Chicken, Black Olives, Mushrooms Bell Pepper and Onion.', price: 'Rs:800', buttontext: 'Add To Cart'},
    ]
  return (
    
        <div className="somewhat-scooper">
                   <h1 className='somelocal mt-4'>SandWhich & Platters</h1>
            <div className="card-list">
               {Sandwhich.map((card, index) => (
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

  )
}
