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
import PlantPlanet from './components/pages/PlantPlanet';
import BuildingProject from './components/pages/BuildingProject';
import GlobalProjects from './components/pages/Global';
import _Project_Page from './components/pages/ProjectPage';
import MicroFinancePage from './components/pages/MicroFinancePage';
import StudentSponsorshipPage from './components/pages/StudentSponsorshipPage';
import CHD from './components/pages/CHD';
import Donate from './components/pages/Donate';
import SaveSea from './components/pages/_SaveSea_Page';
import WaterWorld from './components/pages/WaterWorldPage';
import INDAPage from './components/pages/projects/INDA';
import NavBarUK from './components/NavBarUK';
import NavBarUS from './components/NavBarUS';
import ProjectsUK from './components/pages/ProjectsUK';
import UKBuildingProjectPage from './components/pages/projects/UKBuildingProjectPage';
import DigitalInequality from './components/pages/projects/DigitalInequality';

function App() {
  return (
    <>
      <Router>
  
        <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/uk'>
          <NavBarUK />
          <ScrollToTop />
          <Switch>
            <Route path = '/uk/home' component={Home} />
            <Route path='/uk/fourty-five-club'  component={SunshineFourty} />
            <Route path='/uk/ambassadors'  component={Ambassadors} />
            <Route path='/uk/contact-us'  component={ContactUs} />
            <Route path='/uk/street-sleepers'  component={StreetSleepers} />
            <Route path='/uk/our-story'  component={OurStory} />
            <Route path='/uk/fortune-bags'  component={FortuneBags} />
            <Route path='/uk/volunteers'  component={Volunteers} />
            <Route path='/uk/companies'  component={Companies} />
            <Route path='/uk/beneficaries'  component={Beneficaries} />
            <Route path='/uk/projects'  component={ProjectsUK} />
            <Route path='/uk/save-the-sea'  component={SaveSea} />
            <Route path='/uk/plant-the-planet'  component={PlantPlanet} />
            <Route path='/uk/building-project'  component={BuildingProject} />
            <Route path='/uk/water-for-the-world'  component={WaterWorld} />
            <Route path='/uk/global'  component={GlobalProjects} />
            <Route path='/uk/projectpage'  component={_Project_Page} />
            <Route path='/uk/buildingproject' component={UKBuildingProjectPage} />
            <Route path='/uk/digitalinequality' component={DigitalInequality} />
          </Switch>
        </Route>
        <Route path='/us'>
          <NavBarUS />
          <ScrollToTop />
          <Switch>
            <Route path = '/uk/home' component={Home} />
            <Route path='/uk/fourty-five-club'  component={SunshineFourty} />
            <Route path='/uk/ambassadors'  component={Ambassadors} />
            <Route path='/uk/contact-us'  component={ContactUs} />
            <Route path='/uk/street-sleepers'  component={StreetSleepers} />
            <Route path='/uk/our-story'  component={OurStory} />
            <Route path='/uk/fortune-bags'  component={FortuneBags} />
            <Route path='/uk/volunteers'  component={Volunteers} />
            <Route path='/uk/companies'  component={Companies} />
            <Route path='/uk/beneficaries'  component={Beneficaries} />
            <Route path='/uk/projects'  component={Projects} />
            <Route path='/uk/save-the-sea'  component={SaveSea} />
            <Route path='/uk/plant-the-planet'  component={PlantPlanet} />
            <Route path='/uk/building-project'  component={BuildingProject} />
            <Route path='/uk/water-for-the-world'  component={WaterWorld} />
            <Route path='/uk/global'  component={GlobalProjects} />
            <Route path='/uk/projectpage'  component={_Project_Page} />
          </Switch>
        </Route>
        <Route path='/'>
          <NavBar />
          <ScrollToTop />
            <Switch>
              <Route path='/home'  component={Home} />
              <Route path='/fourty-five-club'  component={SunshineFourty} />
              <Route path='/ambassadors'  component={Ambassadors} />
              <Route path='/contact-us'  component={ContactUs} />
              <Route path='/street-sleepers'  component={StreetSleepers} />
              <Route path='/our-story'  component={OurStory} />
              <Route path='/fortune-bags'  component={FortuneBags} />
              <Route path='/volunteers'  component={Volunteers} />
              <Route path='/companies'  component={Companies} />
              <Route path='/beneficaries'  component={Beneficaries} />
              <Route path='/projects'  component={Projects} />
              <Route path='/save-the-sea'  component={SaveSea} />
              <Route path='/plant-the-planet'  component={PlantPlanet} />
              <Route path='/building-project'  component={BuildingProject} />
              <Route path='/water-for-the-world'  component={WaterWorld} />
              <Route path='/global'  component={GlobalProjects} />
              <Route path='/projectpage'  component={_Project_Page} />
              <Route path='/INDA'  component={INDAPage} />
              <Route path='/microfinace' component={MicroFinancePage} />
              <Route path='/studentsponsorship' component={StudentSponsorshipPage} />
              <Route path='/save-the-sea' component={SaveSea} />
              <Route path='/chd' exact component={CHD} />
              <Route path='/donate' exact component={Donate} />
            </Switch>
          </Route>
        </Switch>
      </Router> 
    </>
  );
}

export default App;