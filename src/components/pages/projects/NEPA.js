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
export default NEPAPage;
function NEPAPage() {
return (
<>
<HeroComp name = "NEPAL" />

<div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
<div className="container" id = "BEGINREADHERE">

<BigHeader text = "Nepal Charity Program " />
<SmallHeader text = "May 2015" />
<ImageComp src = "Screenshot 2022-12-02 at 11.58.17 PM_resized.png" />
<p>Sunshine Action provided the food and essential material to the poor and help to reconstruct some of the destroyed sites after an earthquake</p>
<p>Volunteers distributed food and essential materials to several orphanages including: Ardgya Ashrama Khokana Leprosy Village, Buddha Bhumi Buddhist Centre Nepal, Old Age Mgmt / Social Welfare Trust, Education Centre for Helpless Children, Our Child Protection Foundation Nepal, Rising Lotus Children Village - COTS Children off the Street, light of Nation, Kaleshwor Children Home KCH, Lalitpur, New Light Nepal and Missionaries of Charity Shanti Bhavan, Kathmandu.</p>

<SmallHeader text = "Nov 2014" />
<ImageComp src = "IMG_829650EC797B-1_resized.jpeg" />
<p>Seven Sunshine Action volunteers went to Kathmandu serving the following 10 local NGOs and beneficiating over 800 people directly. The Sunshine Student Sponsorship program cover over 50 poor students for their entire year of school fees.</p>
<p>Throughout the year, the volunteers distributed more than 15 tones of food, including Rice, Dal (beans) Oil, Sugar, Salt, Soap, etc.</p>

<SmallHeader text = " Sept 2013" />
<ImageComp src = "IMG_DEEA4EB6EED9-1_resized.jpeg" />
<p>3 Sunshine Action volunteers traveled to Kathmandu and distributed food & Material for 6 local organizations, including Sunshine Student Sponsorship to 59 poor children in Nepal.</p>

<SmallHeader text = "Sept 2012" />
<ImageComp src = "IMG_48D2C2E533E6-1_resized.jpeg" />
<p>Together with Buddha Buddhist Bhumi Center, Sunshine Action gave 7 kilos of rice, 5 kilos of beans, 1 kilo of sugar and 1 litre of oil. </p>

<SmallHeader text = "May 2011" />
<ImageComp src = "IMG_9198_resized.JPG" />
<p>Nine Sunshine Action volunteers travelled to Kathmandu and visited multiple organizations with love, compassion & learning spirit. This program covered more than 911 cases, estimated to benefit 1210 people directly with over 8000 kg of basic food and materials, plus donation on building project on temple. </p>

<BigHeader text = "Plant the planet" />
<ImageComp src = "IMG_EDBE92A40E2A-1_resized.jpeg" />
<p>Sunshine Action has included NEPAL in the PLANT the PLANET program, which covers apple trees, orange trees, guava trees and many other types together with the students & volunteers. Our first Sunshine Flower garden was also created in Nepal. </p>

</div>
</div>
<Footer />
</>
);
};