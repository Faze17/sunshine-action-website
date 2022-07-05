import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ambassadors from './components/pages/Ambassadors';
import SunshineFourty from './components/pages/SunshineFourty';
import ContactUs from './components/pages/ContactUs';
import LandingPage from './components/pages/LandingPage';
import StreetSleepers from './components/pages/StreetSleepers';
import FortuneBags from './components/pages/FortuneBags';
import ScrollToTop from './components/ScrollToTop';
import OurStory from './components/pages/OurStory';
import Volunteers from './components/pages/Volunteers';
import Beneficaries from './components/pages/Beneficaries';
import Companies from './components/pages/Companies';
import Projects from './components/pages/Projects';
import SaveSea from './components/pages/SaveSea';
import PlantPlanet from './components/pages/PlantPlanet';
import BuildingProject from './components/pages/BuildingProject';
import WaterWorld from './components/pages/WaterWorld';
import GlobalProjects from './components/pages/Global';
import _Project_Page from './components/pages/ProjectPage';
import INDAPage from './components/pages/INDA';

function App() {
  return (
    <>
      <Router>
  
        <Switch>
        
        <Route path='/' exact component={LandingPage} />
        
        <div>
        <NavBar />
        <ScrollToTop />
          
          <Route path='/home' exact component={Home} />
          <Route path='/fourty-five-club' exact component={SunshineFourty} />
          <Route path='/ambassadors' exact component={Ambassadors} />
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='/street-sleepers' exact component={StreetSleepers} />
          <Route path='/our-story' exact component={OurStory} />
          <Route path='/fortune-bags' exact component={FortuneBags} />
          <Route path='/volunteers' exact component={Volunteers} />
          <Route path='/companies' exact component={Companies} />
          <Route path='/beneficaries' exact component={Beneficaries} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/save-the-sea' exact component={SaveSea} />
          <Route path='/plant-the-planet' exact component={PlantPlanet} />
          <Route path='/building-project' exact component={BuildingProject} />
          <Route path='/water-for-the-world' exact component={WaterWorld} />
          <Route path='/global' exact component={GlobalProjects} />
          <Route path='/projectpage' exact component={_Project_Page} />
          <Route path='/INDA' exact component={INDAPage} />
          
          </div>
        </Switch>
      </Router> 
    </>
  );
}

export default App;