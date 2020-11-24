import React from 'react';
import logo from '../images/nav.png'
import '../styles/nav.css';
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className='nav'>
            <img src={logo} alt='logo' className='nav-logo'/>
            <div className='nav-container'>
                <ul className='nav-list'>
                    <NavLink to='/' exact activeClassName='nav-active' className='main-nav'>
                        <li className='nav-item'>Home</li>
                    </NavLink>
                    <NavLink to='/book-ticket' activeClassName='nav-active' className='main-nav'>
                        <li className='nav-item'>Book ticket</li>
                    </NavLink>
                    <NavLink to='/movies' activeClassName='nav-active' className='main-nav'>
                    <li className='nav-item'>movies</li>
                    </NavLink>
                    <li className='nav-item nav-item-btn'>
                        <button className='nav-btn btn'>Quick booking</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
