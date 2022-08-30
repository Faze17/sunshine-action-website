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
export default VIETPage;
function VIETPage() {
return (
<>
<HeroComp name = "VIETNAM" />

<div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
<div className="container" id = "BEGINREADHERE">

<BigHeader text = "2016 Charity Tour" />
<SmallHeader text = "January 2016" />
<p>The mission of this trip was food distribution to the poorest of the poor. Volunteers visited and volunteered for several local organizations, and provided Sunshine Student Sponsorships to poor children.  This program was founded in 2013, and 30 children are sponsored on a yearly basis. Volunteers also visted long-term supported cases of HIV/AIDs and others with disabilities or chronic illness, and evaluated the Microfinance program in Vietnam.</p>

<BigHeader text = "2014 Charity Tour" />
<SmallHeader text = "January 2014" />
<p>The mission of this trip was food distribution to the poorest of the poor. Volunteers visited and volunteered for several local organizations, and provided Sunshine Student Sponsorships to poor children.  This program was founded in 2013, and 30 children are sponsored on a yearly basis. Volunteers also visted long-term supported cases of HIV/AIDs and others with disabilities or chronic illness, and evaluated the Microfinance program in Vietnam.</p>
<BigHeader text = "Other Efforts" />
<p>Over the years, Sunshine action has provided water pumps, built toilets, and distributed food, medicine and other supplies to those in need in Vietnam. On each Charity trip, volunteers planted trees as part of the Plant the Planet global project.</p>

</div>
</div>
<Footer />
</>
);
};