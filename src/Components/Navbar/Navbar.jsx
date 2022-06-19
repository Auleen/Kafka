import React from 'react';
import './Navbar.css'
function Navbar() {
    return ( 
        <div className='Navbar'>
            <div className='Logo'>
                <h1>Kafka.</h1>
            </div>
        <nav>
        <ul>
            <li><a herf="#">Home</a></li>
            <li><a herf="#">Search</a></li>
            <li><a herf="#">Report</a></li>
            <li><a herf="#">Dashboard</a></li>
        </ul>
        </nav>
        <button  onclick="location.href='https://github.com/Auleen/Kafka'">Star ✨</button>


        </div>
     );
}

export default Navbar;