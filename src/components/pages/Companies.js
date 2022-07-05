import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CompanyPage from '../CompanyPage';
import HeroComp from '../HeroComp';


function Companies() {
    return (
    <>
    <HeroComp name = "COMPANIES" />
    <CompanyPage />
    <Footer />
    </>
    )
};


export default Companies;