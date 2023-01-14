import React from "react";
import "../../App.css";
import Footer from "../Footer";
import HomePageLogo from "../HomePageLogo";
import HeroGlobal from "../HeroGlobal";
import CountryGallery from "../CountryGallery";
import CardItem from "../CardItem.js";
import { Link } from "react-router-dom";

function GlobalProjects() {
  // Flags are from www.flags.net
  const ASIA = {
    Bangladesh: "BNGL",
    India: "INDA",
    Indonesia: "INDN",
    Myanmar: "MYAN",
    Nepal: "NEPA",
    Philippines: "PHIL",
    "Sri Lanka": "SRLA",
    Thailand: "THAL",
    Cambodia: "CAMB",
    China: "CHIN",
    Laos: "LAOS",
    Vietnam: "VIET",
  };
  const AFRICA = {
    Cameroon: "CAME",
    Djibouti: "DJIB",
    Ethiopia: "ETHP",
    Kenya: "KENY",
    Mozambique: "MOZA",
    "South Africa": "SOAF",
    Uganda: "UGAN",
    Zambia: "ZAMB",
  };
  const AMERICAS = {
    Chile: "CHIL",
    Colombia: "CLMB",
    Ecuador: "ECUA",
    Peru: "PERU",
  };
  return (
    <>
      <HeroGlobal />

      <div className="branchWebsites">
        <div className="cards">
          <h1>Sunshine Action Official Branches</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                {/* <a
                 
                  src="images/StreetSleeper1.jpg"
                  type="button"
                  class="btn"
                >
                  United Kingdom
                </a> */}
              
                <li className="cards__item">
                  <a className="cards__item__link">
                    {/* <a  href="https://www.sunshine-action-uk.org/">Link</a> */}
                    <figure className="cards__item__pic-wrap">
                      <img className="cards__item__img" src="images/StreetSleeper1.jpg" />
                    </figure>
                    <div className="cards__item__info">
                      <a className="cards__item__text"  style={{textDecoration: "none"}} href="https://www.sunshine-action-uk.org"> United Kingdom</ a>
                     
                    </div>
                  </a>
                </li>
                

                {/* <CardItem
                  src="images/StreetSleeper1.jpg"
                  text="United Kingdom"
                  href="https://www.sunshine-action-uk.org/"
                /> */}
                <CardItem
                  src="images/FortuneBag1.jpg"
                  path="/us/home"
                  text="United States"
                />
                <CardItem
                  src="images/BuildingProjects1.jpg"
                  text="Singapore"
                  path="/home"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CountryGallery name="Asia" data={ASIA} />
      <CountryGallery name="Africa" data={AFRICA} />
      <CountryGallery name="Americas" data={AMERICAS} />
      <Footer />
    </>
  );
}

export default GlobalProjects;
