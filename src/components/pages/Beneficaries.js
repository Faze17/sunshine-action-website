import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import BeneficariesList from '../BeneficariesList';
import HeroComp from '../HeroComp';


 function Beneficaries() {
    return (
    <>
    <HeroComp name = "BENEFICARIES" />
    <BeneficariesList />
    <Footer />
    </>
    )
};


export default Beneficaries;