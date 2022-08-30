import React from 'react';
import '../../../App.css';
import '../Project.css';

import HeroComp from '../../HeroComp';
import Footer from '../../Footer';
import HomePageLogo from '../../HomePageLogo';

export default DigitalInequality;

function DigitalInequality() {
    return (
      <>
        <HeroComp name = "Digital Inequality" />
        <HomePageLogo />
        <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
            <div className="container">
                <BigHeader text = "Project Info" />
                <p>This summer, our interns have undertaken a research project on digital inequality in the UK. The research looks at the correlation between digital exclusion and poverty, including the impact this has on homeless people. </p>
                <p>The COVID-19 pandemic has highlighted and exacerbated the digital divide. During the lockdowns, we relied more and more on the digital world as a means of living and working. Many public services and charities had to close their physical premises and move some of their services online. Those lacking digital literacy have thus been further isolated from essential services. </p>
                <p>Although it has been reported that the majority of homeless people own a mobile phone, the closing of facilities such as libraries, museums and cafes during the pandemic made it extremely difficult to charge these devices. A lack of internet access poses a challenge in accessing vital information and services, including where to pick up food and finding temporary accommodation. </p>
                <p>Our interns carried out extensive research into the current situation in the UK and the effects that digital exclusion is having on the homeless population. They noted decreased opportunities to socialise, a lack of access to essential software, a negative toll on mental health and fewer employment opportunities.</p>
                <p>We have presented our findings in a White Paper on Digital Inequality. Please feel free to read our research and suggestions below: </p>
                <iframe src = "6 Digital Inequality White Paper.pdf" style = {{ width: "100%", height: "720px", border: "1px solid gray" }}></iframe>
            </div>
        </div>       
        <Footer />
      </>
    );
}

function BigHeader(props) {
    return (
        <div className="p-4 text-dark rounded-3 bigHeader"><h1 className = "mb-0">{props.text}</h1></div>
    )
}
function SmallHeader(props) {
    return (
        <><br /><br /><p className = "smallHeader"><u>{props.text}</u></p></>
    )
}
function ImageComp(props) {
    return (
        <div className = "imageComp my-5 d-flex justify-content-center w-100"><img className = "mx-auto" src = {"images/" + props.src} /></div>
    )
}