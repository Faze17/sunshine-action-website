import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import BeneficariesList from '../BeneficariesList';
import HeroBeneficaries from '../HeroBeneficaries';



 function Beneficaries() {
    return (
    <>
    <HeroBeneficaries />
    <BeneficariesList />
    <Footer />
    </>
    )
};


export default Beneficaries;