import React from 'react';
import logo from '../images/nav.png'
import '../styles/nav.css'

function Nav() {
    return (
        <div className='nav'>
            <img src={logo} alt='logo' className='nav-logo'/>
            <div className='nav-container'>
                <ul className='nav-list'>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>Book ticket</li>
                    <li className='nav-item'>movies</li>
                    <li className='nav-item nav-item-btn'>
                        <button className='nav-btn btn'>Quick booking</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
