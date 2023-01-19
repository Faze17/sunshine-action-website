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
export default KENYPage;
function KENYPage() {
return (
<>
<HeroComp name = "KENYA" />
<HomePageLogo />
<div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
<div className="container" id = "BEGINREADHERE">

<BigHeader text = "Kenya Volunteer Tour" />
<SmallHeader text = "Sept 2010" />
<ImageComp src = "26374CD6-96D9-44BC-AC0F-A2BA5A6BC8A2-resized.jpeg.png" />
<p>Two Sunshine Action volunteers visited Nairobi Kenya and the surrounding area and donated over 6'500 kgs food & material, covering approx. 750 families cases & children. </p>

<BigHeader text = "Plant the Planet" />
<ImageComp src = "AC4D2F70-22D7-4F24-9C71-21D711A45C4E-resized.jpeg.png" />
<p>In SVD secondary school in Katani & Kahuho Primary School planted several fruit trees, including  Orange, Avocado, Limon, Mangos, Pawpaws, Guavas, Wild Apples, etc. </p>

<BigHeader text = "Henry Wanyoike Foundation" />
<SmallHeader text = "March 2005" />
<ImageComp src = "87A75A5E-C2C7-4239-8BAB-EABB92F81546-resized.jpeg.png" />
<p>This foundation is a registered organization by the government of Kenya through registry of societies, registration no. 24475 on the 29th.</p>
<p>The Henry Wanyoike Foundation is named after Henry Wanyoike the visually impaired athlete from Kenya. Wanyoike is a world record holder of the 5,000m at the Sydney Paralympics in 2000, a Gold in the 10,000m Paralympics of Athens 2004 and most recently a bronze in the 5000m Beijing Paralympics of 2008. Along side his partner, Joseph Kibunja, Sunshine Action works on the first program in Kikuyu area. Besides his athletic career, Henry Wanyoike has always given something back to the community. He has participated in many charitable activities in Kenya particularly to assist the poor, persons with disabilities, orphans and other less privileged people. He contributes through giving donations, participating in charitable events, initiating community service projects, partnering with other organizations.</p>

<BigHeader text = "Climb Mount Longonot" />
<SmallHeader text = "2010" />
<ImageComp src = "54CD6E02-F755-417C-898A-63B60B8C1A9F-resized.jpeg.png" />
<p>This Fund Raising Event is for Kenya Society for the Blind which is a charitable organization established in 1956 by an Act of Parliament of Kenya. KSB is a National Organization charged with the responsibility of serving all citizens of Kenya who are visually impaired or are at a risk of going blind. The Kenya Society for the Blind reaches out to visually impaired people in communities and helps to create a conducive environment for the empowerment of the visually impaired by promoting their welfare, training, education and employment, so that they may become self-sufficient and self-reliant.</p>

</div>
</div>
<Footer />
</>
);
};
