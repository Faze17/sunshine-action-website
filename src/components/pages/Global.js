import React from "react";
import "../../App.css";
import Footer from "../Footer";
import HomePageLogo from "../HomePageLogo";
import HeroGlobal from "../HeroGlobal";
import CountryGallery from "../CountryGallery";
import CardItem from "../CardItem.js";

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
                <CardItem
                  src="images/StreetSleeper1.jpg"
                  text="United Kingdom"
                />
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
