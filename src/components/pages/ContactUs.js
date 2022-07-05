import React from 'react';
import '../../App.css';
import ContactUsPage from '../ContactUsPage';
import Footer from '../Footer';
import HeroComp from '../HeroComp';

function ContactUs() {
    return (
    <>
    <HeroComp name = "CONTACT US" />
    <ContactUsPage /> 
    <Footer />  
    </>
    )
};


export default ContactUs;
