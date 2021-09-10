import React from 'react';
import './RealButton.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--mainprimary', 'btn--mainoutline'];

const SIZES = ['btn--mainmedium', 'button--mainlarge'];

export const RealButton =({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize


}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : 
    SIZES[0];

    return (
        <Link href='/contact-us' className='btn-mainmobile'>
        <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        >
          {children}
        </button>
        </Link>
    );
};