import React from 'react';
import SignoutButton from '../SignoutButton/SignoutButton';
import "./Navbar.css";

function Navbar() {
    return (
        <div className='navbar-container'>
            <h1 className='navbar-title'>Reminders</h1>
            <SignoutButton />
        </div>
    )
}

export default Navbar
