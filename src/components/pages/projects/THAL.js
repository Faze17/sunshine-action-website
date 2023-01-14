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
export default THALPage;
function THALPage() {
return (
<>
<HeroComp name = "THAILAND" />
      <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
      <div className="container" id = "BEGINREADHERE">

<HomePageLogo />
<BigHeader text = "Charity Tour" />
<SmallHeader text = "July 2014" />
<ImageComp src = "IMG_DABB510BF3B7-1 (1).jpeg" />
<p> Nine Sunshine Action volunteers went to Mae Sot, Thailand donating over 75 tones of rice, dry food, bricks, cements, construction materials, basic need materials, stationery and sponsoring 3 life-saving surgeries for the heart disease patients, including the  Mao Tao Clinic, BCMF Burmese Children Medical Fund, Eyes to Burma and the KKB Kwe Kha Baung Migrant School.</p>
<p>Since their nationalities have not been recognized by the Thai government and these refugees have fled Myanmar for many years, they no longer know whether their hometowns exist. Their only way of survival is to do black labor in the local area, providing food for more than 200 textile factories and food there. For jobs such as processing plants, the salary is only one-third of the local minimum wage, which is about HK$16. Those who have no job skills can only live in the garbage mountain and rely on garbage collection for a living. Due to the extremely meager income, most of the time, as long as the children in the family can walk, they need to be dispatched to collect garbage, and they have no chance to go to school.</p>
<p>Sunshine Action provided food or 100 families living in the garbage mountain. Among them, we provided nutritional milk powder and drinks to malnourished children, hoping that they can absorb nutrition more easily. At the same time, we donated headlamps, flashlights, batteries and water boots to facilitate their "treasure hunting" in the garbage mountain at night, and soap and washing powder can keep them clean and reduce illness.</p>

<SmallHeader text = "Life of Refugees" />
<ImageComp src = "IMG_9328 (1).jpg"/> 
<p>Having escaped Burma several decades ago, these refugees are still not entitled to Thai nationality and so cannot enjoy the same rights, such as the statutory-minimum day wage. Some turn to illegal work in textile and food factories in return for only HK$16 per day, or a third of what their Thai counterparts earn. For others with no skills, the only place they can live is on a trash mountain where they eke out a meagre living by picking up and selling recyclable items. They live in extremely harsh conditions and schooling for their children is impossible.</p>
<p>Sunshine Action subsidised salaries for teachers who have been unpaid for at least 8 months to guarantee these schools continue operating.</p>

<BigHeader text = "Volunteering Tour"/>
<SmallHeader text = "May 2011" />
<ImageComp src = "IMG_477C86C04B3A-1 (1).jpeg" />
<p>Beside the regular Sunshine Action food blessing bags to the poor families/cases. Thailand is the second country where Sunshine Action started the full year program, by arranging volunteering visits by the young students to the elderly and giving fruit tree saplings to poor families to get more food by themselves or sell to market.This program is set with cooperation with the St. Michael Archangel Catholic Church and each team will have 4 students and they will provide monthly visits to the selected cases of poor elderly. Every time, they will bring a package of food and other basic need items.</p>

<BigHeader text = "Plant the Planet"/>
<ImageComp src = "IMG_97F520BB9BFC-1 (1).jpeg" />
<p>In cooperation with the 4 different schools, Sunshine Action planted over 600 Coconut & Mango trees, including the  Prao village school, Kabkaewbuaban Witedesuksa School, Ban Pekfuy School and the Ban Khaw School.</p>
</div>
</div>
<Footer />
</>);};