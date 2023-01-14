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
export default BNGLPage;
function BNGLPage() {
return (
<>
<HeroComp name = "BANGLADESH" />
      <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
      <div className="container" id = "BEGINREADHERE">
<HomePageLogo />
<BigHeader text = "Charity Tour" />
<SmallHeader text = "Nov 2014" />
<ImageComp src = "IMG_9283.jpeg" />
<p>Seven Sunshine Action volunteers visited Dhaka, Bangladesh and served 3 local organizations, including the Missionaries of Charity Shishu Bhavan, Smyrna development Society and Missionaries of Charity House of Compassion.</p>
<p>The mission of the trip was to distribute food and material to the poorest of the poor, the severely sick, the handicapped and orphans. </p>

</div>
</div>
<Footer />
</>
);
};