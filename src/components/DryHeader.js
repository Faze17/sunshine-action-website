import React from 'react';
import '../App.css';
import './DryHeader.css';


function DryHeader(props) {
  return (
    <header className='dry-container'>
      <noVideoText>{props.name.toUpperCase()}</noVideoText>
    </header>
  );
}

export default DryHeader;
