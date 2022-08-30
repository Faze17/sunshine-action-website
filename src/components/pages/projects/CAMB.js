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
export default CAMBPage;
function CAMBPage() {
return (
<>
<HeroComp name = "CAMBODIA" />
<div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
<div className="container" id = "BEGINREADHERE">
<BigHeader text = "2018 Charity Tour" />
<SmallHeader text = "27 February – 4 March 2018" />

<p>On this charity trip volunteers visited Siem Reap and the Angkor Wat temple complex. During the trip volunteers contributed to the Sunshine Action Shippint Container Project, a past building project which involved constructing shelters out of shipping containers. </p>
<BigHeader text = "2017 Charity Tour" />
<SmallHeader text = "June 2017" />
<p>Together with the CHEER Team of the University of Hong Kong, Sunshine Action used proceeds from the 8th Hike for Hunger in 2017 to provide poverty relief.  On this trip Sunshine Action initiated the first Sunshine Shipping Containers Orphanage Project. Sunshine Action partnered with Sok Orphanage and School, constructing two water purifiers in Sok Orphanage, and two more in the school.</p>
<p>A vegetable farm was built in the surrounding village, and toilets and water purifiers were repaired. Volunteers also conducted a health and moral education workshop, and conducted a health check in the village.</p>
<p>Over 20 tonnes of rice, basic food, materials, hygiene products, and toys were donated to local organizations in Siem Reap, Cambodia.</p>
<BigHeader text = "2016 Charity Tour" />
<SmallHeader text = "June 2016" />
<p>The mission of this trip was to donate food and other essential materials to the poorest of the poor in Siem Reap, through local partner organizations. </p>
<BigHeader text = "2014-2015 Charity Tour" />
<p>Volunteers traveled to Angkor, Cambodia, donating over 20 tonnes of rice, dry food, stationary and other materials to local organizations.</p>
<BigHeader text = "2014 Charity Tour" />
<SmallHeader text = "January and June 2014" />
<p>On this trip volunteers traveled to Siem Reap, Cambodia, and donated needed materials to local organizations. Sunshine Action also sponsored a local school.</p>
<BigHeader text = "2013 Charity Tour" />
<p>The mission of this trip was to distribute food to three orphanages and Leap Chas Village. Volunteers built water purification systems and distributed potential water pumps, and provided free medicine. Trees and over 200 fruit plants were also planted as part of the Plant the Planet global project.</p>
<BigHeader text = "2009 Charity Tour" />
<SmallHeader text = "March 2009" />
<p>On this trip, over 2.3 tonnes of rice, as well as other food products, children’s clothes, toys and paper notepads were distributed to local organizations.</p>
<p></p>
</div>
</div>
<Footer />
</>
);
};