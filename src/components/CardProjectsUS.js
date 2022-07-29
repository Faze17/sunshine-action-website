import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { HashLink as Link } from 'react-router-hash-link';
import * as ProjectPages from './pages/ProjectPages.js';

function CardsProjectsUS() {
  let projectCards = [];
  for (let p in ProjectPages) {
    if (p == "projectPageInfo" || ProjectPages.projectPageInfo[p][2] != 3) {
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

export default CardsProjectsUS;