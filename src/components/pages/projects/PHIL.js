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
export default PHILPage;
function PHILPage() {
return (
<>
<HeroComp name = "PHILIPPINES" />
      <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
      <div className="container" id = "BEGINREADHERE">

<BigHeader text = "Asia volunteering tour" />
<SmallHeader text = "June 2008 / Jan 2009" />
<ImageComp src = "IMG_9261_resized.JPG" />
<p>We visited the garbage mountain at TONDO in Manila Philippine, an area with approx. 1.1 millions peoples and this garbage area cover nearly 25 hectares with few hundred thousands peoples living under poverty line. They spent most of the time collecting plastic, metal, or paper to make a living in a home without a bathroom or a kitchen.</p>
<ImageComp src = "IMG_9252_resized.JPG" />
<p>We visited the house with over 70 mentally disorder children in TONDO and then nearly 30 handicapped children in QUEZON CITY.</p>

<SmallHeader text = "Virlainie Foundation" />
<ImageComp src = "IMG_9275_resized.JPG" />
<p>20 years ago, Mr. Dominique LEMAY from France created Virlanie Foundation to take care of the street children in Manila. Now, they have over 10 houses for these children and young adults. Each house is managed by a Father & Mother as real couple giving the love and warm of family.</p>
<p>Virlanie Foundation is the biggest NGO in Philippines for the Street Children and Dominique has helped over 10'000 children reunited with family, being adopted or simply changed their destiny from the street.</p>

</div>
</div>
</>
);
};