import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import CardComponent from './Components/CardComponent';
import { CartProvider } from './Components/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Buttons from './Components/buttons';
import SomeWhatLocal from './Components/SomeWhatLocal';
import Back from './Components/Back';
import SomeWhatScooper from './Components/SomeWhatScooper';
import Specialpizza from './Components/Specialpizza';
import Cheesytreats from './Components/Cheesytreats';
import Sandwhich from './Components/Sandwhich';
import Footer from './Components/Footer';
import MyComponent from './Components/memo';
const cardData = [
  { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027793711771744869.jpg', title: 'Cheezy SticksCard', text: 'Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.', price: 'Rs:2000', buttontext: 'Add To Cart' },
  { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new///dish/1602778646768992842.jpg', title: 'Oven Baked Wings', text: 'Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.', price: 'Rs:1023', buttontext: 'Add To Cart' },
  { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/1612872495497065653.png', title: 'Sausage Pizza', text: 'Chicken Sausages, Pizza Sauce and Cheese', price: 'Rs:1200', buttontext: 'Add To Cart' },
  { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027791221858590131.jpg', title: 'Chicken Mushroom', text: 'Tender Chunks of Marinated Grilled Chicken Tikka, Lots of Mushrooms, Onion and Tomato Sauce', price: 'Rs:1500', buttontext: 'Add To Cart' },
  { imgSrc: 'https://em-cdn.eatmubarak.pk/54946/dish_image/1642865986.png', title: 'Chicken Pepperoni Pizza', text: 'Chicken Pepperoni, Pizza Sauce and Cheese', price: 'Rs:1000', buttontext: 'Add To Cart' },
  { imgSrc: 'https://em-cdn.eatmubarak.pk/54946/dish_image/1628885239.png', title: 'Chicken Supreme', text: 'A Combination Of 3 Flavors of Chicken, Black Olives, Mushrooms Bell Pepper and Onion.', price: 'Rs:800', buttontext: 'Add To Cart'},
];
const somewhatData = [
  { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027793711771744869.jpg', title: 'Cheezy SticksCard', text: 'Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.', price: 'Rs:2000', buttontext: 'Add To Cart' },
  { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/16129593211519226473.jpg', title: 'Oven Baked Wings', text: 'Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.', price: 'Rs:1023', buttontext: 'Add To Cart' },
  { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/16129588831247331510.jpg', title: 'Cheezy SticksCard', text: 'Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.', price: 'Rs:1200', buttontext: 'Add To Cart' },
  { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027813671864187338.jpg', title: 'Cheezy SticksCard', text: 'Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.', price: 'Rs:1500', buttontext: 'Add To Cart' },
  { imgSrc: 'https://em-cdn.eatmubarak.pk/54946/dish_image/1629376979.jpg', title: 'Cheezy SticksCard', text: 'Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.', price: 'Rs:1000', buttontext: 'Add To Cart' },
  { imgSrc: 'https://em-cdn.eatmubarak.pk/restaurant_new///dish/160278146146021192.jpg', title: 'Cheezy SticksCard', text: 'Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.', price: 'Rs:800', buttontext: 'Add To Cart' },  
]; 
const App = () => {
  return (
    <>
    <Router>
      <CartProvider>
        <Navbar />
        <Buttons />
       <MyComponent/>
        <Routes>
        <Route index element={
            <div className='Stater ms-4'>
              <Back />
              <h1 className='container'>Starter</h1>
              <div className="card-list">
                {cardData.map((card, index) => (
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
              <div>
                <SomeWhatLocal
                  cards={somewhatData.map((card, index) => (
                    <CardComponent
                      key={index}
                      imgSrc={card.imgSrc}
                      title={card.title}
                      text={card.text}
                      price={card.price}
                      buttontext={card.buttontext}
                    />
                  ))}
                />
              </div>
              <div>
               <SomeWhatScooper/>
               <Specialpizza/>
               <Cheesytreats/>
               <Sandwhich/>
             </div>
            </div>
          }/>
          <Route path="back" element={<Back />} />
          <Route path="Strater" element={<CardComponentList cardData={cardData} />} />
          <Route path='somewhat-local' element={
            <SomeWhatLocal
              cards={somewhatData.map((card, index) => (
                <CardComponent
                  key={index}
                  imgSrc={card.imgSrc}
                  title={card.title}
                  text={card.text}
                  price={card.price}
                  buttontext={card.buttontext}
                />
              ))}
            />
          } />
          <Route path='somewhat-scooper' element={<SomeWhatScooper />} />
          <Route path='special-pizza' element={<Specialpizza/>} />
          <Route path='Cheesy-treats' element={<Cheesytreats/>} />
          <Route path='sandwich-and-platter' element={<Sandwhich/>} />
        </Routes>
      </CartProvider>
    </Router>
   <Footer/>
  </>
  );
};

const CardComponentList = ({ cardData }) => (
  <div className='Stater ms-4'>
    <h1 className='container'>Starter</h1>
    <div className="card-list">
      {cardData.map((card, index) => (
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

export default App;
