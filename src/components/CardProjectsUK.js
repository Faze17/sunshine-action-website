import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { HashLink as Link } from 'react-router-hash-link';
import * as ProjectPages from './pages/ProjectPages.js';

function CardsProjectsUK() {
  let projectCards = [];
  for (let p in ProjectPages) {
    if (p == "projectPageInfo" || ProjectPages.projectPageInfo[p][2] != 2) {
      continue;
    }
    projectCards.push(<CardItem path = {'/' + ProjectPages.projectPageInfo[p][0]} src = {"images/" + ProjectPages.projectPageInfo[p][3]} text={ProjectPages.projectPageInfo[p][1]} />);
  }
  return (
    <>
      <div className='cards'>
          <h1>Current Projects</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/image003.jpg'
                text='Building Project &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;'
                path='buildingproject'
              />
              <CardItem
                src='images/web-4667406_1280.jpeg'
                path='digitalinequality'
                text='Digital Inequality &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;'
              />
              {projectCards}
            </ul>
          </div>
        </div>
      </div>
      {/*<div className='global'>
        <h1>Explore our Global Projects</h1>
        <br />
        <Link to="global" type = "button" class="btn btn-outline-light btn-lg" style={{borderRadius: '0px', marginBottom: '5px',}}>Global Projects</Link>
  </div>*/}
    </>
  );
}

export default CardsProjectsUK;