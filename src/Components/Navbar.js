import React, { useState, useRef } from 'react';
import { useCart } from './CartContext';
export default function Navbar() {
    const [isSignupVisible, setIsSignupVisible] = useState(false);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const { cart, setCart } = useCart();
    const nameRef = useRef(null);
    const fatherNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneNumberRef = useRef(null);

    const handleFocus = (ref) => {
        if (ref.current) {
            ref.current.style.borderColor = 'red';
            ref.current.style.borderWidth = '4px';
        }
    };

    const handleBlur = (ref) => {
        if (ref.current) {
            ref.current.style.borderColor = 'yellow';
            ref.current.style.borderWidth = '3px';
        }
    };

    const handleSignupClick = (e) => {
        e.preventDefault();
        setIsSignupVisible(true);
    };

    const handleCloseSignupClick = () => {
        setIsSignupVisible(false);
    };

    const handleCartClick = () => {
        setIsCartVisible(true);
    };

    const handleCloseCartClick = () => {
        setIsCartVisible(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const fatherName = fatherNameRef.current.value;
        const email = emailRef.current.value;
        const phoneNumber = phoneNumberRef.current.value;
        console.log('Form Data:', { name, fatherName, email, phoneNumber });
        alert("Submitted Successfully");
        setIsSignupVisible(false);
    };

    const handleDeleteItem = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    const handleIncreaseQuantity = (index) => {
        setCart((prevCart) =>
            prevCart.map((item, i) =>
                i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item
            )
        );
    };

    const handleDecreaseQuantity = (index) => {
        setCart((prevCart) =>
            prevCart.map((item, i) =>
                i === index && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => {
            const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
            return total + (itemPrice * (item.quantity || 1));
        }, 0).toFixed(0);
    };

    return (
        <>
            <div className='navbar '>
                <div className='col-sm-4 container '>
                    <h6 className='d-flex'>
                        <i className="fa-solid fa-location-dot mt-2" ></i>
                        <a className='text-dark text-decoration-none' href='/'>
                            <p>Deliver to <br />i-8 Islamabad</p>
                        </a>
                    </h6>
                </div>
                <div className='col-md-1 col-lg-2'>
                    <img className='navimg ' src="https://em-cdn.eatmubarak.pk/54946/logo/1649325481.png" alt="" />
                </div>
                <div className='col-lg-5'>
                    <div className="form-inline searchforminline my-lg-0">
                        <span className="navline"></span>
                        <input
                            className="form-control mr-sm-2 col-3"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <span className="navline"></span>

                        <div>
                            <button className='btn btn-warning' onClick={handleSignupClick}>Signup</button>
                            {isSignupVisible && (
                                <div id="signupFormContainer" className="form-container">
                                    <form id="signupForm" className="form" onSubmit={handleSubmit}>
                                        <h2>Signup Form</h2>
                                        <label htmlFor="name">Name:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            ref={nameRef}
                                            required
                                            onFocus={() => handleFocus(nameRef)}
                                            onBlur={() => handleBlur(nameRef)}
                                            style={{ border: '3px solid yellow', outline: 'none' }}
                                        />

                                        <label htmlFor="fatherName">Father's Name:</label>
                                        <input
                                            type="text"
                                            id="fatherName"
                                            ref={fatherNameRef}
                                            required
                                            onFocus={() => handleFocus(fatherNameRef)}
                                            onBlur={() => handleBlur(fatherNameRef)}
                                            style={{ border: '3px solid yellow', outline: 'none' }}
                                        />

                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            ref={emailRef}
                                            required
                                            onFocus={() => handleFocus(emailRef)}
                                            onBlur={() => handleBlur(emailRef)}
                                            style={{ border: '3px solid yellow', outline: 'none' }}
                                        />

                                        <label htmlFor="phoneNumber">Phone Number:</label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            ref={phoneNumberRef}
                                            required
                                            onFocus={() => handleFocus(phoneNumberRef)}
                                            onBlur={() => handleBlur(phoneNumberRef)}
                                            style={{ border: '3px solid yellow', outline: 'none' }}
                                        />

                                        <button
                                            className='border border-2 border-dark bg-warning'
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            className='border border-2 border-dark bg-warning'
                                            type="button"
                                            onClick={handleCloseSignupClick}
                                        >
                                            Close
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                        <span className='navline'></span>
                        <div className='cart-icon col-3'>
                            <i
                                className="fas fa-shopping-cart"
                                style={{ fontSize: '24px', color: 'black' }}
                                onClick={handleCartClick}
                            ></i>
                            <span>{cart.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {isCartVisible && (
                <div className="cart-details">
                    <button className="close-btn" onClick={handleCloseCartClick}>Close</button>
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <>
                          <h4 className='text-center'>Your Items</h4>
                            <ul className="cart-list">
                                {cart.map((item, index) => (
                                    <li key={index} className="cart-item">
                                        <img
                                            src={item.imgSrc}
                                            alt={item.title}
                                            style={{margin:'5px', height: '100px' }}
                                        />
                                        <div className="cart-item-details">
                                            <p className='mt-3'>{item.text}</p>
                                            <h4>{item.title}</h4>
                                            <p>{item.price}</p>
                                            <div className="quantity-controls">
                                                <button className="quantity-btn" onClick={() => handleDecreaseQuantity(index)}>-</button>
                                                <span>{item.quantity || 1}</span>
                                                <button className="quantity-btn" onClick={() => handleIncreaseQuantity(index)}>+</button>
                                            </div>
                                            <button className="delete-btn" onClick={() => handleDeleteItem(index)}>
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="cart-total">
                                <h5>Total Price: RS:{calculateTotalPrice()}</h5>
                                <button type="button">Pay Now</button>
                           </div>
                        </>
                    )}
                </div>
            )}

            <div id="carouselExampleControls" className="carousel slide mt-2" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://em-cdn.eatmubarak.pk/54946/web_splash/1718372668.jpg" className="d-block rounded container w-75" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://em-cdn.eatmubarak.pk/54946/web_splash/1718372715.jpg" className="d-block rounded container w-75" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://em-cdn.eatmubarak.pk/54946/web_splash/1718372668.jpg" className="d-block rounded container w-75" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://em-cdn.eatmubarak.pk/54946/web_splash/1718372589.jpg" className="d-block rounded container w-75" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://em-cdn.eatmubarak.pk/54946/web_splash/1723791341.jpg" className="d-block rounded container w-75" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev previous" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="">
                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
