import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { HashLink as Link } from 'react-router-hash-link';

function CardsProjects() {
  return (
    <>
      <div className='cards'>
          <h1>Current Projects</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/StreetSleeper1.jpg'
                text='Street Sleepers Program &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;'
                path='/street-sleepers'
              />
              <CardItem
                src='images/FortuneBag1.jpg'
                path='/fortune-bags'
                text='Fortune Bag Program &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;'
              />
              <CardItem
                src='images/BuildingProjects1.jpg'
                text='Building Project'
                path='/building-project'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/PlantPlanet1.jpg'
                text='Plant the Planet'
                path='/plant-the-planet'
              />
              <CardItem
                src='images/SaveSea1.jpg'
                text='Save The Sea'
                path='/save-the-sea'
              />
              <CardItem
                src='images/WaterWorld1.jpg'
                text='Water for the World'
                path='/water-for-the-world'
              />

            </ul>
          </div>
        </div>
      </div>
      <div className='global'>
        <h1>Explore our Global Projects</h1>
        <br />
        <Link to="global" type = "button" class="btn btn-outline-light btn-lg" style={{borderRadius: '0px', marginBottom: '5px',}}>Global Projects</Link>
      </div>
    </>
  );
}

export default CardsProjects;