import React from 'react';
import './Header.css';
const Header = function(props){
    return (
        
    <div className='header'>
        <div className="header-text">
            {props.heading}
        </div>
    </div>);
}

export default Header;