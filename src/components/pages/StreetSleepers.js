import React from 'react';
import '../../App.css';
import './Project.css';

import HeroComp from '../HeroComp';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
export default StreetSleepers;

function BigHeader(props) {
    return (
        <div className="p-4 text-dark rounded-3 bigHeader"><h1 className="mb-0"><strong>{props.text}</strong></h1></div>
    )
}
function SmallHeader(props) {
    return (
        <><br /><br /><p className="smallHeader"><u>{props.text}</u></p></>
    )
}
function ImageComp(props) {
    return (
        <div className="imageComp my-5 d-flex justify-content-center w-100"><img className="mx-auto" src={"images/" + props.src} /></div>
    )
}
function TwoImages({ leftImagePath, rightImagePath, heightPx, marginPx }) {
    /* MY FAILED ATTEMPT AT MAKING THE TWO IMAGES RESPONSIVE TO THE WIDTH OF THE SCREEN/WINDOW

    const [leftWidth, setLeftWidth] = React.useState(0);
    const [rightWidth, setRightWidth] = React.useState(0);

    React.useEffect(() => {
        const leftImage = new Image();
        leftImage.src = leftImagePath;
        leftImage.onload = () => {
            const newLeftWidth = (heightPx / leftImage.height) * leftImage.width;
            if (!isNaN(newLeftWidth)) {
                setLeftWidth(newLeftWidth);
            }
        };

        const rightImage = new Image();
        rightImage.src = rightImagePath;
        rightImage.onload = () => {
            const newRightWidth = (heightPx / rightImage.height) * rightImage.width;
            if (!isNaN(newRightWidth)) {
                setRightWidth(newRightWidth);
            }
        };
    }, [leftImagePath, rightImagePath, heightPx]);

    const totalWidth = parseFloat(leftWidth) + parseFloat(marginPx) + parseFloat(rightWidth);
    */

    return (
        <div class="twoImage-container" style={{ display: "flex", height: `${heightPx}px`, justifyContent: "center", marginBottom: `${heightPx * 0.1}px` }}>
            <img src={leftImagePath} style={{ height: "100%", marginRight: `${marginPx}px` }} />
            <img src={rightImagePath} style={{ height: "100%" }} />
            {/* PART 2 OF MY FAILED ATTEMPT
            <style>
                {`
                    @media (max-width: ${totalWidth}px) {
                        .twoImage-container {
                            flex-direction: column;
                            height: ${heightPx * 1.6}px;
                        }
                        .twoImage-container img {
                            margin-bottom: ${heightPx * 0.1}px;
                        }
                    }
                `}
            </style>
            */}
        </div>
    );
}

function ThreeImages({ leftImagePath, centerImagePath, rightImagePath, heightPx, marginPx }) {
    return (
        <div class="threeImage-container" style={{ display: "flex", height: `${heightPx}px`, justifyContent: "center", marginBottom: `${heightPx * 0.1}px` }}>
            <img src={leftImagePath} style={{ height: "100%", marginRight: `${marginPx}px` }} />
            <img src={centerImagePath} style={{ height: "100%" }} />
            <img src={rightImagePath} style={{ height: "100%", marginLeft: `${marginPx}px` }} />
        </div>
    );
}

function SideImage({ text, imagePath, imageWidth }) {
    return (
        <div className="sideImage-container" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flexGrow: 1, marginRight: `${imageWidth * 0.1}px`, marginLeft: 'auto' }} dangerouslySetInnerHTML={{ __html: text }}></div>
            <div style={{ flexShrink: 0 }}>
                <img src={imagePath} style={{ width: imageWidth, marginLeft: 'auto' }} />
            </div>
        </div>
    );
}

function StreetSleepers() {
    return (
        <>
            <HeroComp name="STREET-SLEEPERS" />
            <HomePageLogo />
            <div className="projectBanner" style={{ background: 'rgb(82,97,147' }}>
                <br></br>
                <div className="container">
                    <BigHeader text="Project Info" />
                    <li><b>The Street-Sleepers Program distributes dinner boxes, drinks, dry foods, blankets, haircuts, legal aid, and other essential services to street-sleepers. The program also educates youth on the issue of homelessness and raises money to provide services to those in need.</b></li>
                    <li>The program has continued providing services during the Covid-19 pandemic, while many other charitable organizations temporarily decreased or stopped providing services. </li>
                    <li>The Street-Sleepers Program is the oldest flagship program within Sunshine Action and has been running for over 13 years, starting before the organization was officially founded. </li>
                    <li><b>In 2022, Sunshine Action is struggling to financially sustain all programs, including the Street-sleepers Program. Your contribution would mean a lot to us. <a href="/donate">Learn how to donate here.</a></b></li>
                    <TwoImages leftImagePath="../images/street-sleepers-1.jpg" rightImagePath="../images/street-sleepers-3.jpg" heightPx="500" marginPx="50" />
                    <BigHeader text="The History of the Street-Sleepers Program" />
                    <p>Over 13 years ago, Sunny, the founder of Sunshine Action, was a regular volunteer for a few charity organizations. One evening, he was called to help distribute food to the street-sleepers in the Yau Ma Tei area. The centre supplied volunteers with bread, butter, and drinks for distribution. </p>
                    <p>After returning home, Sunny and his best friend decided to continue to distribute food to street-sleepers by themselves. They bought ingredients for sandwiches and distributed them along the same roads for months afterwards. Sunny carried all the sandwiches and his friend carried all the drinks. At that time, they both had full-time jobs, and would pack sandwiches right after office hours. </p>
                    <p>Although carrying and distributing goods was difficult for only two people to manage, the two friends continued volunteering for months afterwards. They volunteered on the evenings of major festive holidays, including Parent's Days, the Mid-Autumn Festival, Christmas Eve, and New Year’s Eve because these are the evenings when those in need receive the least help. They decided to always be there, even when no one else would be.</p>
                    <ThreeImages leftImagePath="../images/street-sleepers-4.jpg" centerImagePath="../images/street-sleepers-6.jpg" rightImagePath="../images/street-sleepers-5.jpg" heightPx="300" marginPx="30" />
                    <p>The program has since expanded to include volunteers from all walks of life, from primary school students to CEOs. It has also grown to provide other services besides food, such as distributing anti-pandemic items, providing haircuts and other services, and providing pro-bono legal aid to street-sleepers. The program also works to educate youth on the issue of street-sleeping and raises money to help those in need.</p>
                    <br></br>
                    <BigHeader text="Projects Within the Street-Sleepers Program" />
                    <SideImage 
                        text={
                        '<p><b><u>Legal Aid:</u></b></p><p>Since January 2021, a group of third-year Law students from the University of Hong Kong have been cooperating with Sunshine Action to link up with lawyers offering pro bono legal aid to street-sleepers in Hong Kong. The program includes temporary storage to help them store personal items while searching for new jobs or other activities. The volunteers will cover all street-sleepers shelters and several other areas of Hong Kong. The project is ongoing and targeted to last approximately 6-12 months.</p>' }
                        imagePath="../images/street-sleepers-10.jpg"
                        imageWidth={470}
                    />
                    <br></br>
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
                    <TwoImages leftImagePath="../images/street-sleepers-2.jpg" rightImagePath="../images/street-sleepers-12.jpg" heightPx="250" marginPx="25" />
                    <BigHeader text="How We Can Help" />
                    <SideImage 
                        text={
                        '<li style={{ marginBottom: "25px" }}><strong>Understand who the homeless are</strong> – Help dispel the stereotypes about the homeless. Learn about the different reasons for homelessness, and remember, every situation is unique. One of the first steps in helping people is to see them as individuals and to find out what they need. Notice them; talk to them. Most are starved for attention.</li><li style={{ marginBottom: "25px" }}><strong>Educate yourself about the homeless</strong> – Learn about the long-term solutions for ending homelessness, or sometimes fast, immediate assistance.</li><li style={{ marginBottom: "25px" }}><strong>Understand who the homeless are</strong> – Help dispel the stereotypes about the homeless. Learn about the different reasons for homelessness, and remember, every situation is unique. One of the first steps in helping people is to see them as individuals and to find out what they need. Notice them; talk to them. Most are starved for attention.</li>' }
                        imagePath="../images/street-sleepers-7.jpg"
                        imageWidth={490}
                    />
                    
                    <li style={{ marginBottom: "25px" }}><strong>Educate yourself about the homeless</strong> – Learn about the long-term solutions for ending homelessness, or sometimes fast, immediate assistance.</li>
                    <li style={{ marginBottom: "25px" }}><strong>Respond with kindness</strong> – We can make quite a difference in the lives of the homeless when we respond to them, rather than ignore or dismiss them. Try a kind word and a smile.</li>
                    <li style={{ marginBottom: "25px" }}><strong>Develop lists of shelters</strong> – Carry a card that lists local shelters so you can hand them out to the homeless. You can find shelters in Hong Kong: Sham Shui Po - Wanchai - Yau Ma Tei - Nam Cheong.</li>
                    <li style={{ marginBottom: "25px" }}><strong>Bring food</strong> – It’s as simple as taking a few extra sandwiches when you go out. When you pass someone who asks for change, offer him or her something to eat. If you take a lunch, pack a little extra. When you eat at a restaurant, order something to take with you when you leave.</li>
                    <TwoImages leftImagePath="../images/street-sleepers-8.jpg" rightImagePath="../images/street-sleepers-9.jpg" heightPx="325" marginPx="70" />

                    <BigHeader text="Volunteers Within the Street-Sleepers Program" />
                    <p>Sunshine Action is grateful for all our volunteers, who include students, adults, lawyers, soldiers, CEOs, and many more. </p>
                    <li>The first multi-national corporation to volunteer with the program was Bloomberg L.P. For a few years, they helped with distributing after their busy workdays and Sunshine Action remains thankful to have had their support from the beginning. </li>
                    <li>CEOs that have joined the Street-sleepers Program include Mr. Neil Harvey from Credit Suisse and Ms. Ligia Torres from BNP Paribas. Clifford Hart Jr. was the first Consul General of the United States to join the program, along with a team of volunteers from the U.S. Consulate. Many members of the U.S. Navy & Marines from different ships have also joined this program. </li>
                    <br></br>
                    <BigHeader text="Sunshine Action's Response to the Pandemic" />
                    <p>During the major crisis in Hong Kong due to the Covid-19 outbreak, many Sunshine Ambassadors and students joined this program. They helped on a weekly basis by distributing essential food and anti-pandemic items. </p>
                    <p>Since the first year of the pandemic, a dedicated team of volunteers have been taking care of street-sleepers every Tuesday and Wednesday. They drove around to several spots in Hong Kong and Kowloon side and continued to provide services during the typhoon.</p>
                    <br></br>
                    <BigHeader text="Further Donations" />
                    <SideImage 
                        text={'<p>Sunshine Action has donated additional food in bulk alongside Sunshine Fortune Bags to several charity centres also helping the homeless in Hong Kong, including:</p><li>ImpactHK</li><li>MercyHK - by Fr John Wotherspoon O.M.I .</li><li>Missionaries of Charity Nam Cheong & Prince Edward Centers</li><li>Society of Rehabilitation & Crime Prevention  </li><li>Street Sleepers\' Shelter Society Trustees 3 shelters </li><li>St. Barnabas Home  </li><li>St. James Settlement  </li>'} imagePath="../images/street-sleepers-11.jpg" 
                        imageWidth={380} 
                    />
                    <br></br>
                    <br></br>
                </div>
            </div>
            <Footer />
        </>
    );
}
