//EDITABLE
import React from 'react';
import '../../../App.css';
import '../Project.css';
import HeroComp from '../../HeroComp';
import Footer from '../../Footer';
import HomePageLogo from '../../HomePageLogo';
function BigHeader(props) {
return (<div className="p-4 text-dark rounded-3 bigHeader"><h1 className = "mb-0">{props.text}</h1></div>)
}
function SmallHeader(props) {
return (<><br /><br /><p className = "smallHeader"><u>{props.text}</u></p></>)
}
function ImageComp(props) {
return (<div className = "imageComp my-5 d-flex justify-content-center w-100"><img className = "mx-auto" src = {"images/" + props.src} /></div>)
}
export default SRLAPage;
function SRLAPage() {
return (
<>
<HeroComp name = "SRI LANKA" />
      <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
      <div className="container" id = "BEGINREADHERE">

<HomePageLogo />
<BigHeader text = "Charity Program" />
<SmallHeader text = "Feb 2013" />
<ImageComp src = "F0259CC6-2C3B-48AF-82BA-F2841AEA6189.jpeg" />
<p> Four Sunshine Action volunteers went to Chilaw, Sri Lanka with the mission of distributing food and another other material and stationaries for the flood-affected famialies in Seemaweliya village. Volunteers rebuilt 6 completely new houses for those who lost it during the disaster plus a new community hall and new bathrooms in these villages. </p>

<BigHeader text = "Plant the Planet"/>
<SmallHeader text = "Feb 2013" />
<ImageComp src = "92CE64FE-D80B-47A4-BD05-BC50E3B86414.jpeg" />
<p>Volunteers in Sunshine Action planted over 100 fruit trees and even obtained guava fruit from these trees two years after.</p>

<BigHeader text = "Asia Volunteering Tour "/>
<SmallHeader text = "May 2011" />
<ImageComp src = "4A3BEAC4-4066-40EB-BFDF-1DA241EEC776 2.jpeg" />
<p>Two sunshine Action volunteers travelled to Sri Lanka in a charity mission covering 1393 families and cases, estimated to benefit approximately 1953 people directly with more than 12300 kg of food, samba rice, dhal, red rice, beans, green grams, sugar, milk powder, etc... plus many daily hygiene products such as soap, detergents, tooth paste, etc... We also covered some medical items for the cancer patients and planted 800 fruit trees in Chilaw area.  </p>
</div>
</div>
<Footer />
</>
);
};