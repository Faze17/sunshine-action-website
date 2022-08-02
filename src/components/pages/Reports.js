import React from 'react';
import '../../App.css';
import '../Project.css';
import HeroComp from '../HeroComp';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import Report22 from '../../documents/report2022.pdf';
import Report21 from '../../documents/report2021.pdf';
import Report20 from '../../documents/report2020.pdf';
import '../Reports.css';
function BigHeader(props) {
return (<div className="p-4 text-dark rounded-3 bigHeader"><h1 className = "mb-0">{props.text}</h1></div>)
}
function SmallHeader(props) {
return (<><br /><br /><p className = "smallHeader"><u>{props.text}</u></p></>)
}
function ImageComp(props) {
return (<div className = "imageComp my-5 d-flex justify-content-center w-100"><img className = "mx-auto" src = {"images/" + props.src} /></div>)
}
export default reportsPage;
function reportsPage() {
return (
<>
<HeroComp name = "Reports" />
<HomePageLogo />
<div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
<div className="container" id = "BEGINREADHERE">
    <a href = {Report22} target = "_blank"><BigHeader text = "2022" /></a>
    <a href = {Report21} target = "_blank"><BigHeader text = "2021" /></a>
    <a href = {Report20} target = "_blank"><BigHeader text = "2020" /></a>
</div>
</div>
<Footer />
</>
);
};