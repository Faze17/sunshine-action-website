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
export default usfortunebagsPage;
function usfortunebagsPage() {
return (
<>
<HeroComp name = "Fortune Bags" />
<HomePageLogo />
<div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
<div className="container" id = "BEGINREADHERE">
<BigHeader text = "Project Info" />
<ul>
<li>The Fortune Bag Program packs and distributes bags full of rice, pasta, dry foods, sauces, toiletries, and other necessities to low-income individuals supported by our partner beneficiaries.</li>
<li>The Sunshine Fortune Bag Program is the biggest program in the organization, which focuses on poverty relief.</li>
</ul>
<ImageComp src = "image010.jpg" />
<BigHeader text = "History of the US Fortune Bag Program" />
<p>During the last week of DEC 2020, the first SUNSHINE FORTUNE BAGS in New York have been packed and delivered to the following organizations:</p>
<ul>
<li>Lifting Up Westchester : 40 years ago, a bold group of parishioners at Grace Church identified an emerging homeless problem in Westchester County and stepped up to do something about it. They built the foundation for what is now Lifting Up Westchester. Their values of a vibrant, healthy community that takes care of its neighbors in need remain our values to this day. The Sunshine Fortune Bags are delivered to a men's homeless shelter called Open Arms: <a href = "https://www.liftingupwestchester.org/shelter" target = "_blank">https://www.liftingupwestchester.org/shelter</a>.</li>
<li>The Children's Village :  Maya's Place in the Bronx is a safe haven for young women who have run away from home or are homeless. This warm, inviting home can be the only thing between them and frightening and dangerous nights on the streets. Maya's Place can accommodate up to 24 girls, aged 16 to 20, including those who are pregnant or parenting. The program provides food, shelter, clothing, individual and group counseling, and medical care. Staff help girls return to family or, when that is not possible, help them find long-term permanent housing. Maya's Place is one of two shelters operated by The Children's Village. The Sanctuary provides similar services for males and females in Westchester County. <a href = "https://childrensvillage.org/our-programs/inwood-house/bronx-shelter/" target = '_blank'>https://childrensvillage.org/our-programs/inwood-house/bronx-shelter/</a></li>
<li>HELP USA was founded in 1986 by now-Governor Andrew Cuomo to address the nation's growing homelessness crisis. From our beginning as a shelter for families in Brooklyn, we've expanded to become a national leader in the fight against homelessness. <a href = "https://www.helpusa.org/new-homes/" target = "_blank">https://www.helpusa.org/new-homes/</a> Today, we serve people of all backgrounds, including families, individuals, veterans, survivors of domestic violence, people with health challenges and disabilities, and seniors. We have helped over 500,000 people facing homelessness and poverty to build better lives.</li>
</ul>
<p>SUNSHINE ACTION NEW YORK is newly stablished with the support from MAYER BROWN 孖士打 New York Office  <a href = "https://en.wikipedia.org/wiki/Mayer_Brown" target = "_blank">https://en.wikipedia.org/wiki/Mayer_Brown</a></p>
<ImageComp src = "image005.jpg" />
</div>
</div>
<Footer />
</>
);
};