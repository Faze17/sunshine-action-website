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
export default INDNPage;
function INDNPage() {
return (
<>
<HeroComp name = "INDONESIA" />
      <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
      <div className="container" id = "BEGINREADHERE">

<BigHeader text = "Volunteering tour" />
<SmallHeader text = "Jan 2010" />
<ImageComp src = "Image_resized.png" />
<p>5 Sunshine Action volunteers visited 2 organizations including Sekolah Darurat Kartini and Indonesian Care for Cancer Kids Foundation  in Jakarta Indonesia, donated Rice, Sugar, Cooking Oil and Green Beans, covering 588 children. </p>

<SmallHeader text = "Kartini Emergency School" />
<ImageComp src = "public/images/Image_resized (1).png" />
<p>20 years ago, the twin sisters Rossy & Rian, started the Kartini Emergency School providing free education and food for the street children in the slum area of Jakarta Indonesia. The Twin sisters and others specialized teachers provide free education  for 573 students in this open area. Today, beside the base in Jakarta, their system has expanded to 87 schools in the Urban areas of Indonesia and each of the school is covering approximately 100-200 students. </p>

</div>
</div>
<Footer />
</>
);
};