import React from 'react';
import main from '../../images/main3.jpg';
import ad7 from '../../images/ad-7.jpg'; 
import ad8 from '../../images/ad-8.jpg'; 
import ad9 from '../../images/ad-9.jpg'; 
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa' ;
import '../../styles/home.css'

function Home() {
    return (
        <div className='home-container'>
            <div className='home-showcase'>
                <img src={main} alt='main' className='showcase-img'/>
            </div>
            <div className='home-features'>
                <img src={ad7} alt='feature' className='feature-img'/>
                <img src={ad8} alt='feature' className='feature-img'/>
                <img src={ad9} alt='feature' className='feature-img'/>
            </div>
            <div className='home-ticket'>
                <div className='ticket-modal'>
                    <div className='circle left-circle'></div>
                    <div className='circle right-circle'></div>
                    <div className='ticket-content'>
                        <div className='address'>
                            <p>Sri Shakthi Cinemas,</p>
                            <p>256 Union Mill Road,</p>
                            <p>Tirupur,</p>
                            <p>Tamil Nadu 641601,</p>
                            <p>India</p>
                            <p>Contact Center : 044- 40435050 / 66545050</p>
                            <p>mail : helpdesk@bookmyshow.com</p>
                        </div>
                        <div className='social'>
                            <h3>Follow Us</h3>
                            <div className='social-icon'>
                                <div className='social-in utube'>
                                <AiFillYoutube />
                                </div>
                                <div className='social-in facebook'><FaFacebookF/></div>
                                <div className='social-in twitter'><AiOutlineTwitter/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
