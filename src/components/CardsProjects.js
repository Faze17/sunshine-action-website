import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsProjects() {
  return (
    <div className='cards'>
        <h1>Current Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/StreetSleeper1.jpg'
              text='Street-Sleepers Program &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;'
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
            <CardItem
              src='images/StudentSponsorship2.jpg'
              text='Student Sponsorship'
              path='/studentsponsorship'
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
            <CardItem
              src='images/Microfinance2.jpg'
              text='MicroFinance'
              path='/microfinace'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/CHD-3.jpg'
              text='Congenital Heart Disease &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;'
              path='/chd'
            />
            <CardItem
              src='images/blank.jpg'
              text='Blank'
              path='/blank'
            />
            <CardItem
              src='images/blank.jpg'
              text='Blank'
              path='/blank'
            />
            <CardItem
              src='images/blank.jpg'
              text='Blank'
              path='/blank'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsProjects;