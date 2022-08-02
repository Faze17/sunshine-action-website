import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import HomePageInfo from '../HomePageInfo';
import HeroHome from '../HeroHome';
import CardProjects from '../CardsProjects';
import CardProjectsUK from '../CardProjectsUK';
import CardProjectsUS from '../CardProjectsUS';
import { Link } from 'react-router-dom';


function Home(props) {
  function renderProjects() {
    switch (props.country) {
      case "hk":
        return <CardProjects />;
        break;
      case "uk":
        return <CardProjectsUK />;
        break;
      case "us":
        return <CardProjectsUS />;
        break;
    }
  }
  return (
    <>
      <HeroHome name = "FEED THE HUNGRY AND WARM THE ABANDONED" selfintro = "We are a charity which aims to help people facing poverty and homelessness." subtitle = "Sunshine Action has made a long-term commitment to help those in need on achieve lasting growth and success in the coming years, and therefore funding is crucial for the future."/>
      <HomePageInfo />
      <Link to="/reports" className = "reportsBanner">
        SUNSHINE ACTION PERFORMANCE REPORTS
      </Link>
      {renderProjects()}
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;