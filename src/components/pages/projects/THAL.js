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
<p>Nine Sunshine Action volunteers went to Mae Sot, Thailand donating over 75 tones of rice, dry food, bricks, cements, construction materials, basic need materials, stationery and sponsoring 3 life-saving surgeries for the heart disease patients, including the  Mao Tao Clinic, BCMF Burmese Children Medical Fund, Eyes to Burma and the KKB Kwe Kha Baung Migrant School.</p>
<p>Since their nationalities have not been recognized by the Thai government and these refugees have fled Myanmar for many years, they no longer know whether their hometowns exist. Their only way of survival is to do black labor in the local area, providing food for more than 200 textile factories and food there. For jobs such as processing plants, the salary is only one-third of the local minimum wage, which is about HK$16. Those who have no job skills can only live in the garbage mountain and rely on garbage collection for a living. Due to the extremely meager income, most of the time, as long as the children in the family can walk, they need to be dispatched to collect garbage, and they have no chance to go to school. </p>
<p>Sunshine Action provided food or 100 families living in the garbage mountain. Among them, we provided nutritional milk powder and drinks to malnourished children, hoping that they can absorb nutrition more easily. At the same time, we donated headlamps, flashlights, batteries and water boots to facilitate their "treasure hunting" in the garbage mountain at night, and soap and washing powder can keep them clean and reduce illness.</p>

<SmallHeader text = "Life of Refugees" />
<ImageComp src = "IMG_9328 (1).jpg"/> 
<p>Refugees have their own lifestyle, education and medical system, with no help from the Thai government. Having escaped Burma several decades ago, these refugees are still not entitled to Thai nationality and so cannot enjoy the same rights, such as the statutory-minimum day wage. Some turn to illegal work in textile and food factories in return for only HK$16 per day, or a third of what their Thai counterparts earn. For others with no skills, the only place they can live is on a trash mountain where they eke out a meagre living by picking up and selling recyclable items. They live in extremely harsh conditions and schooling for their children is impossible.</p>
<p>Since Burmese refugees do not have Thai nationality, their children cannot enjoy Thai education. Instead, some local charitable organizations have set up full-time schools in the local area to provide courses from elementary school to high school. Because refugee families have meager income, the charitable organization that runs the school runs the school full-time in the form of subsidies and provides lunch. Affected by the global economic downturn in recent years, these schools have faced long-term financial pressure. For example, we donated money to one of the schools. Their teachers have not been paid for more than three months, but they are still willing to continue to tide over the difficulties with the school. Sunshine Action subsidised salaries for teachers who have been unpaid for at least 8 months to guarantee these schools continue operating. Moreover, some NGOs operate full-time educational facilities for these refugee children, from primary through secondary. In recent years, some such institutions have faced financial crisis because of the global economic downturn which severely affected overseas donations. Lacking their only source of income, some teachers went unpaid for many months but they were willing to continue in order to tide over this crisis.</p>
<p>Adding on, with no Thai household registration, if they use the hospitals opened by the Thai government, they still need to pay high medical expenses. Fortunately, Some NGOs provide comprehensive, low-cost or free medical services to tackle basic sickness, but if patients are severely hurt or suffer a serious illness, they must be transferred to Chiang Mai Hospital under the Thai government’s operation, but this happens only on the condition that donors can sponsor the patient’s transfer (round trip 7,500 baht or HK$2,000) and additional medical expenses, such as the heart surgeries sponsored by SUNSHINE ACTION.</p>

<SmallHeader text = "Kwe Ka Buang School" />
<ImageComp src = "320B86C4-2D23-420B-A714-7AD43CB9DF9A_resized.jpeg.png"/> 
<p>The students in this school is largely comprised of one of the ethnic minority group-Karen, so it's a rare migrant school. In the past, they are rural villagers who are suffering abuses such as forced labor, systematic destruction of villagers and crops, forced relocations, extortion, looting, arbitrary detention, torture, sexual assault and summary executions.</p>

<SmallHeader text = "Mao Tao Clinic" />
<ImageComp src = "1852D959-4864-41B0-B310-53B761C2AB43_resized.jpeg.png"/> 
<p>Founded by Dr. Cynthia Maung, who was a displaced person forced to flee her homeland in 1988, has worked tirelessly for over 20 years, providing critical healthcare to the people of Burma. The Clinic’s facilities and activities continue to grow. Currently, between 400 -500 people on average come to the clinic each day, and there is a staff of about 700 providing comprehensive health services and child protection services. Total caseload exceeds 115,000 cases annually with a client number of over 75,000 per year</p>

<SmallHeader text = "Works of Sunshine Action" />
<p>Sunshine Action purchased 100 solar lamps for families on trash mountain, did  Monthly food donation to these families through providing basic food, e.g rice and milk power, and subsidized severely sick patients go to Chiang Mai Hospital with amount ceiling at HK$30,000 per patient.</p>

<BigHeader text = "Volunteering Tour"/>
<SmallHeader text = "May 2011" />
<ImageComp src = "IMG_477C86C04B3A-1 (1).jpeg" />
<p>Beside the regular Sunshine Action food blessing bags to the poor families/cases. Thailand is the second country where Sunshine Action started the full year program, by arranging volunteering visits by the young students to the elderly and giving fruit tree saplings to poor families to get more food by themselves or sell to market.This program is set with cooperation with the St. Michael Archangel Catholic Church and each team will have 4 students and they will provide monthly visits to the selected cases of poor elderly. Every time, they will bring a package of food and other basic need items.</p>
<SmallHeader text = "Nov 2010" />
<ImageComp src = "6FEF9192-80B2-4CAF-8B03-38248DB55066_resized.jpeg.png" />
<p>Sunshine Action volunteers visited Thailand and with cooperation of SVD & M.C. Thailand, the mission cover food blessing bags for 220 Families Cases mainly with HIV/AIDS; 150 children with cloths, stationeries, gifts, plus covering several adult & orphans at the Hospice. We included not only the patients, but also their families affected by poverty, lack of job and some abandoned elderly group. </p>
<SmallHeader text = "Dec 2009" />
<ImageComp src = "5C6D28C0-7CB5-4B81-BCE6-43989041BF66_resized.jpeg.png" />
<p> Sunshine Action team with 5 volunteers arrived Udon Thani and in cooperation with SVD Fr. Anthony Le Duc and his assistant Fon, the mission covered 150 low-income families with HIV/AIDS patients and elderly people in the villages. We also covered some children & adult patients at the Hospices. We purchased all the basic food items including white rice, sticky rice, soy sauce, fish sauce, sugar, rice noodles, etc, in a whole-sale store near Udon Thani. The children in the M.C. Mother Teresa House for the Children also help in our packing. Many of the cases we visited have members with HIV/AIDS or other severe sickness. Some live completely alone being abandoned by the family; some are elderly taking care of the orphan children.</p>

<BigHeader text = "Klong Toey"/>
<SmallHeader text = "Mar 2008" />
<p>The biggest slum area of Bangkok with nearly 150'000 poor families living in low standard. In March 2008, in association with Duang Prateep Foundation, we have a bit of action from Sunshine with Rice supplies, mainly for the children and their families of the D. P. Kindergarten and some dedicated to the 'Emergency Relief' program.</p>

<BigHeader text = "Plant the Planet"/>
<ImageComp src = "IMG_97F520BB9BFC-1 (1).jpeg" />
<p>In cooperation with the 4 different schools, Sunshine Action planted over 600 Coconut & Mango trees, including the  Prao village school, Kabkaewbuaban Witedesuksa School, Ban Pekfuy School and the Ban Khaw School, with each student adopting a tree to take care and will bring 2-3 fruit trees to be planted at their homes.</p>
</div>
</div>
<Footer />
</>);};