import React from 'react';

export default function Footer() {
    return (
        <div>
            <footer className=" text-dark  m-4 text-lg-start">
                <div className=" p-4">
                    <div className="row mt-2 footer">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <a href='/'><img className='w-50 mt-4' src="https://em-cdn.eatmubarak.pk/54946/logo/1649325481.png" alt="" /></a>
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4 mt-5 mb-md-0">
                            <h5 className="text-uppercase ">Cheezious</h5>
                            <ul className="list-unstyled mb-0">
                            <li className='d-flex'>
                            <i className="fa-solid fa-phone fa-fw"></i>      <p  className="text-dark m-0 p-0">092-111446699</p>
                                </li>
                                <li className='d-flex justify-content-spacebetween'>
                                <i className="fa-regular fa-envelope"></i><p  className="text-dark m-0 p-0">support@cheezious.com</p>
                                </li>
                                <li>
                                    <a href='/' className='text-decoration-none'><p  className="text-dark m-0 p-0"><i className="fa-solid fa-location-dot" ></i>Cheezious - I-8, Lower Ground,  <br />PakLand Plaza, I-8 Markaz, Islamabad, Islamabad</p></a>
                                </li>
                               
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mt-5 mb-md-0">
                            <h5 className="text-uppercase mb-0">Our Timing </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/" className="text-dark text-decoration-none">Monday-Thursday</a>
                                    <a href="/" className="text-dark text-decoration-none p-1">11:00AM-3:00AM</a>

                                </li>
                                <li>
                                    <a href="/" className="text-dark text-decoration-none">Monday-Thursday</a>
                                    <a href="/" className="text-dark text-decoration-none p-1">02:00PM-3:00AM</a>

                                </li>
                                <li>
                                    <a href="/" className="text-dark text-decoration-none">Saturday</a>
                                    <a href="/" className="text-dark p-3 text-decoration-none">11:00AM-3:00AM</a>
                                </li>
                             </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a href="/" className='text-decoration-none'><h1 className='text-dark link-underline-opacity-0'>@Chezzious Pakistan </h1></a>
                    
                </div>
            </footer>
        </div>
    );
}
  