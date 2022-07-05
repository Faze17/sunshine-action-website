import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { HashLink as Link } from 'react-router-hash-link';
import './CountryGallery.css'

function CountryGallery(props) {
  let cardItems = [];
  for (let c in props.data) {
    cardItems.push(<CardItem src = {'http://www.flags.net/images/largeflags/' + props.data[c] + '0001.GIF'} text = {c} path = {"/" + props.data[c]} />);
  }
  return (
      <div className='countryGallery cards pb-0'>
          <h1>{props.name}</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items px-5'>
              {cardItems}
            </ul>
          </div>
        </div>
      </div>
  );
}

export default CountryGallery;