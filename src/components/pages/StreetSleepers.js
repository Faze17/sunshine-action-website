import React from 'react';
import '../../App.css';
import './Project.css';

import HeroComp from '../HeroComp';
import Footer from '../Footer';

export default StreetSleepers;

function StreetSleepers() {
    return (
      <>
        <HeroComp name = "STREET-SLEEPERS" />
        
        <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
            <br></br>
            <div className="container">
                <BigHeader text = "Project Info" />
                <li><b>The Street-Sleepers Program distributes dinner boxes, drinks, dry foods, blankets, haircuts, legal aid, and other essential services to street-sleepers. The program also educates youth on the issue of homelessness and raises money to provide services to those in need.</b></li>
                <li>The program has continued providing services during the Covid-19 pandemic, while many other charitable organizations temporarily decreased or stopped providing services. </li>
                <li>The Street-Sleepers Program is the oldest flagship program within Sunshine Action and has been running for over 13 years, starting before the organization was officially founded. </li>
                <li><b>In 2022, Sunshine Action is struggling to financially sustain all programs, including the Street-sleepers Program. Your contribution would mean a lot to us. <a href="/donate">Learn how to donate here.</a></b></li>
                <ImageComp src="../images/street-sleepers-1.jpg" />
                <BigHeader text = "The History of the Street-Sleepers Program" />
                <p>Over 13 years ago, Sunny, the founder of Sunshine Action, was a regular volunteer for a few charity organizations. One evening, he was called to help distribute food to the street-sleepers in the Yau Ma Tei area. The centre supplied volunteers with bread, butter, and drinks for distribution. </p>
                <p>After returning home, Sunny and his best friend decided to continue to distribute food to street-sleepers by themselves. They bought ingredients for sandwiches and distributed them along the same roads for months afterwards. Sunny carried all the sandwiches and his friend carried all the drinks. At that time, they both had full-time jobs, and would pack sandwiches right after office hours. </p>
                <p>Although carrying and distributing goods was difficult for only two people to manage, the two friends continued volunteering for months afterwards. They volunteered on the evenings of major festive holidays, including Parent's Days, the Mid-Autumn Festival, Christmas Eve, and New Year’s Eve because these are the evenings when those in need receive the least help. They decided to always be there, even when no one else would be.</p>
                <p>The program has since expanded to include volunteers from all walks of life, from primary school students to CEOs. It has also grown to provide other services besides food, such as distributing anti-pandemic items, providing haircuts and other services, and providing pro-bono legal aid to street-sleepers. The program also works to educate youth on the issue of street-sleeping and raises money to help those in need.</p>
                <BigHeader text = "Projects Within the Street-Sleepers Program" />
                <p><b><u>Legal Aid:</u></b></p>
                <p>Since January 2021, a group of third-year Law students from the University of Hong Kong have been cooperating with Sunshine Action to link up with lawyers offering pro bono legal aid to street-sleepers in Hong Kong. The program includes temporary storage to help them store personal items while searching for new jobs or other activities. The volunteers will cover all street-sleepers shelters and several other areas of Hong Kong. The project is ongoing and targeted to last approximately 6-12 months.</p>
                <p><b><u>Street Sleepers Simulation in Schools:</u></b></p>
                <p>Sunshine Action have extended this project into schools in Hong Kong, helping educate them on the issue of homelessness and street sleeping as well as raising money for the charity.</p>
                <p>Youth are educated on topics which include:</p> 
                <ul>
                <li>The difference between street-sleepers & homeless and how to classify them. </li>
                <li>The history and evolution of the demographic of street-sleepers in Hong Kong within the last decade. </li>
                <li>The types of street-sleepers in Hong Kong; the difference between locals and those from overseas. </li>
                <li>Whether charity program ideas from overseas work in Hong Kong. </li>
                <li>The mental health issues amongst street-sleepers. </li>
                <li>Possible biases in how young people view street-sleepers.</li>
                <li>The true impact of the Street-Sleeper Program and the importance of educating themselves on poverty. </li>
                <li>The adaptations to the program when doing it under different seasons and environment. </li>
                <li>Understanding which ideas would work when planning to help street-sleepers.</li> 
                </ul>
                <p>Bradbury School and Discovery College ESF have both advocated for the program inside of their schools to raise fund for street-sleepers.</p>
                <ImageComp src="../images/street-sleepers-2.jpg" />
                <BigHeader text = "Volunteers Within the Street-Sleepers Program" />
                <p>Sunshine Action is grateful for all our volunteers, who include students, adults, lawyers, soldiers, CEOs, and many more. </p>
                <li>The first multi-national corporation to volunteer with the program was Bloomberg L.P. For a few years, they helped with distributing after their busy workdays and Sunshine Action remains thankful to have had their support from the beginning. </li>
                <li>CEOs that have joined the Street-sleepers Program include Mr. Neil Harvey from Credit Suisse and Ms. Ligia Torres from BNP Paribas. Clifford Hart Jr. was the first Consul General of the United States to join the program, along with a team of volunteers from the U.S. Consulate. Many members of the U.S. Navy & Marines from different ships have also joined this program. </li>
                <ImageComp src="../images/street-sleepers-3.jpg" />
                <BigHeader text = "Sunshine Action's Response to the Pandemic" />
                <p>During the major crisis in Hong Kong due to the Covid-19 outbreak, many Sunshine Ambassadors and students joined this program. They helped on a weekly basis by distributing essential food and anti-pandemic items. </p>
                <p>Since the first year of the pandemic, a dedicated team of volunteers have been taking care of street-sleepers every Tuesday and Wednesday. They drove around to several spots in Hong Kong and Kowloon side and continued to provide services during the typhoon.</p>
                <br></br>
                <BigHeader text = "Further Donations" />
                <p>Sunshine Action has donated additional food in bulk alongside Sunshine Fortune Bags to several charity centres also helping the homeless in Hong Kong, including:</p> 
                <li>ImpactHK</li>
                <li>MercyHK - by Fr John Wotherspoon O.M.I .</li>  
                <li>Missionaries of Charity Nam Cheong & Prince Edward Centers</li> 
                <li>Society of Rehabilitation & Crime Prevention  </li>
                <li>Street Sleepers' Shelter Society Trustees 3 shelters </li>
                <li>St. Barnabas Home  </li>
                <li>St. James Settlement  </li>


            </div>
        </div>       
        <Footer />
      </>
    );
}

function BigHeader(props) {
    return (
        <div className="p-4 text-dark rounded-3 bigHeader"><h1 className = "mb-0">{props.text}</h1></div>
    )
}
function SmallHeader(props) {
    return (
        <><br /><br /><p className = "smallHeader"><u>{props.text}</u></p></>
    )
}
function ImageComp(props) {
    return (
        <div className = "imageComp my-5 d-flex justify-content-center w-100"><img className = "mx-auto" src = {"images/" + props.src} /></div>
    )
}