import React from 'react';
import {IoIosArrowForward, IoIosArrowDown} from 'react-icons/io';
import ad1 from '../../images/ad-1.jpg';
import ad2 from '../../images/ad-2.jpg';
import ad3 from '../../images/ad-3.jpg';
import'../../styles/book.css'

function Bookticket() {
    return (
        <div className='book-container'>
            <ul className='date-container'>
                <li className='date-label date-item'>Date</li>
                <li className='date-arrow date-item'>
                    <IoIosArrowForward/>
                </li>
                <li className='date date-item'>
                    <span className='day'>mon</span>
                    <span className=''>23</span>
                </li>
                <li className='date date-item'>
                    <span className='day'>tue</span>
                    <span className=''>24</span>
                </li>
                <li className='date date-item'>
                    <span className='day'>wed</span>
                    <span className=''>25</span>
                </li>
            </ul>
            <div className='movie-show-container'>
                <div className='movie-show-label'>
                    <p className='movie-label'>Movies</p>
                    <div className='show-time-container'>
                        <div className='show-time-label'>
                            <p>Showtime</p>
                            <IoIosArrowDown/>
                        </div>
                        <div className='availability-label'>
                            <div className='available'>
                                <div className='green'></div>
                                <span>Available</span>
                            </div>
                            <div className='sold'>
                                <div className='red'></div>
                                <span>Sold out</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shows'>
                <div className='show'>
                    <div className='movie'>
                        <div className='movie-name'>
                            <p>biskoth</p>
                            <div className='lang-dur'>
                                <span className='lang'>Tamil</span>
                                <span className='divider'>|</span>
                                <span className='dur'>106 minute</span>
                            </div>
                        </div>
                        <div className='certification'>
                            <span>N/A</span>
                        </div>
                        <div className='movie-times'>
                            <span className='movie-time'>10.30pm</span>
                            <span className='movie-time'>10.30pm</span>
                            <span className='movie-time'>10.30pm</span>
                            <span className='movie-time'>10.30pm</span>
                            <div className='movie-time-divider'></div>
                            <span className='movie-time'>10.30pm</span>
                            <span className='movie-time'>10.30pm</span>
                            <span className='movie-time'>10.30pm</span>
                        </div>
                    </div>
                </div>
                <div className='show-divider'></div>
            </div>
            <div className='book-showcase-container'>
                <img src={ad1} className='book-showcase' alt='showcase-img'/>
                <img src={ad2} className='book-showcase' alt='showcase-img'/>
                <img src={ad3} className='book-showcase' alt='showcase-img'/>
            </div>
            <footer className='book-footer'>
                <div className='box'>
                    <p>About us</p>
                    <p>Feedback</p>
                </div>
                <div className='box'>
                    <p>Gallery</p>
                    <p>careers</p>
                </div>
                <div className='box'>
                <p>Privacy</p>
                    <p>Legal</p>
                </div>
                <div className='box'>
                    <p>Powered by: BookMyShow.com</p>
                </div>
                <div className='box'>
                    <p>2020 srisakthi.net - All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Bookticket
