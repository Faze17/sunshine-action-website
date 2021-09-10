import React from 'react';
import './PopUp.css';


function PopUp(props) {
    return (props.trigger) ? (
        <div className='popup '>
            <div className="popup-inner">
                <div className="close-btn">Close</div>
                    { props.children }
            </div>
        </div>
    ) : "";
}

export default PopUp 
