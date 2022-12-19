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
export default CHINPage;
function CHINPage() {
return (
<>
<HeroComp name = "CHINA" />

<div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
<div className="container" id = "BEGINREADHERE">
<br />
<p>Sunshine Action works extensively in China through a variety of programs. Past charity trips have included trips to Mukden, Yunnan, Sichuan, Macau, and other locations in China. Visit other project pages for more details. For information on Sunshine Action Walkathons in China, visit the Congenital Heart Disease page. </p>
</div>
</div>
<Footer />
</>
);
};