//DO NOT EDIT DIRECTLY, USE THE PROJECT PAGES EDITOR
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
export default publichealthPage;
function publichealthPage() {
return (
<>
<HeroComp name = "Public Health Project" />
<HomePageLogo />
<div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
<div className="container" id = "BEGINREADHERE">
<BigHeader text = "Project Info" />
<p>Over the summer of 2021, some of our UK interns have been working on a public health project targeted towards the homeless community.</p>
<p>The COVID-19 pandemic has revealed significant gaps in health provisions for homeless people in the UK. Whilst the homeless population have always been at increased risk of illness, the risks associated with catching COVID-19 have made this an imperative public health issue.</p>
<p>There are many barriers to homeless people seeking the medical care they need. Having to provide a permanent address when registering with a GP, inflexible appointment booking systems, discrimination from staff and gaps in suitable support all make it more difficult for a homeless individual to have reliable access to healthcare. Moreover, the lack of stable housing often means that health needs are not prioritised and medical issues go untreated. </p>
<p>Health problems amongst the homeless population present a significant burden to the NHS. Hospital and A&E admissions of homeless people is four times higher than the rate within the general public, which is estimated to cost a minimum of £85m per year.  </p>
<p>The pandemic has flagged up some of these issues; the impact of COVID-19 is likely to be worse for someone who already has inadequate access to healthcare. The government has prioritised vaccination of the homeless community in order to stop the spread of COVID on the streets, but more needs to be done in order to encourage higher uptake.  </p>
<p>Moreover, studies have shown a hike in mental health problems amongst the homeless population since the start of the pandemic. Increased isolation and boredom have led to a rise in conditions such as depression and anxiety amongst the homeless and those living in temporary accommodation.  </p>
<p>Consequently, our interns have created a health pamphlet to be distributed to rough sleepers around the UK. It contains information on how to register with a GP, details of organisations offering physical and mental health support, how to access dental and eye care, as well as information about COVID-19 symptoms and testing. It also suggests ways to stay mentally and physically healthy on a daily basis.  </p>
<p>Please take a look at the booklet below:</p>
<iframe src = "6 Digital Inequality White Paper.pdf"></iframe>
</div>
</div>
<Footer />
</>
);
};