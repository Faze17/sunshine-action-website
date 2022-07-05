import React from 'react';
import '../../App.css';
import './Project.css';

import HeroComp from '../HeroComp';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';

// IMPORTANT Remember to rename this template component (including the filename) when you use it!
// Rename: filename, line 12, line 16, line 21

// There are three re-usable components: BigHeader, SmallHeader, and ImageComp. Paragraphs and lists can be added normally.
// BigHeader and SmallHeader have one property: text
// ImageComp has one property: src. This automatically points to the /public/images directory so you should only put the filename of the image itself here.

export default INDAPage;

function INDAPage() {
    return (
      <>
        <HeroComp name = "INDIA" />
        <HomePageLogo />
        <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
            <div className="container">
                <BigHeader text = "2017 Volunteer Tour" />
                <ImageComp src = "india2017.jpeg" />
                <p>這個農曆新年旅程嘅經歷係非筆墨可形容！好有意義！首先在Calcutta 加爾各答 "Nirmal Hriday垂死者之家”做義工和捐贈食物衣服，然後在泰姬陵 Taj Mahal 過新年行大運... 之後，第二天捐贈藥物到在Seemapuri 的麻瘋中心... 最後去孟買Mumbai的仁愛之家，再捐贈過.. 超開心..2個星期去了5城市 : Kolkata - New Delhi - Agra - Mumbai - Fatehpur Sikri</p>
                <BigHeader text = "2014 Volunteer Tour" />
                <p>FEB 2014, four Sunshine Action volunteers went to Calcutta INDIA donating food, basic materials, building construction, student sponsorship fee, clothes, etc... to several local organizations.</p>
                <p>Missionaries of Charity is a Roman Catholic Latin Rite religious congregation established in 1950 by Mother Teresa. It consists of over 4,500 religious sisters and is active in 133 countries. Members of the order designate their affiliation using the order's initials, "M.C." A member of the Congregation must adhere to the vows of chastity, poverty, obedience, and the fourth vow, to give "wholehearted free service to the poorest of the poor."</p>
                <SmallHeader text = "Shuktara Trusts - Shuktara Cakes"></SmallHeader>
                <ul>
                    <li>Many of the young people living in the boys’ house have reached an age when they can look for a job, but for years they have struggled to find work.</li>
                    <li>In 2013 this all changed. Two years previously Alain Cojean had spent some very special days at shuktara with the boys and he decided to help them. “I was so very impressed by so much love, they were like a family, so lovely, always taking care of one another, I felt immediately involved and I wanted to do something for them and David” said Alain, who runs a chain of restaurants in Paris called Cojean and a Foundation called Nourrir, Aimer, Donner (Eat, Love, Give) which supports other projects around the world. “David told me he was worried about what would become of the boys after him,” he continued. He was so touched by what he saw, that he decided to start a French Patisserie Training Centre to help the boys with their employment and training. Seven of the older boys (Sanjay, Ashok, Raju, Pinku, Vijay, Ramesh and Bapi), were taught baking and the art of French patisserie by a team including Fabien Rouillard, Head Executive Pastry Chef from Fauchön, a gourmet food company in Paris and on 10th March 2013, Shuktara Cakes was officially launched at the French Consulate in Kolkata.</li>
                    <li>Shuktara Cakes makes a selection of five cakes as well as financiers, a traditional French recipe shaped like small gold ingot, and madeleines, famous for their shell-like shape and the delicate baking. The shuktara boys are responsible for weighing the ingredients, operating the machinery and overseeing the complete production process. “My favourite job is cutting the baking paper in different sizes,” says Bapi.”I use equipment like the weighing machine and the brush to put non-stick oil in the moulds.” Sanjay enjoys being responsible for one of the most important items in the kitchen: “I start the oven, set the temperature and the timing of it,” he says. Raju and Ramesh prefer the task of accurately measuring out the different cake ingredients.</li>
                </ul>
                <ImageComp src = "India14-45.jpeg" />
                <SmallHeader text = "Howarh South Point" />
                <p>Howrah South Point has 2 formal schools and a centre for handicapped in the Howrah province right next to Calcutta. The Lalkuthi home in Howrah accommodates 78 handicapped boys and girls. Two experienced physiotherapists are permanently on site to attend the children and provide training to the responsible for their care. A pediatrician monitors the health of the children with weekly visits.</p>
                <ImageComp src = "India14-17.jpeg" />
                <p>Three other homes located in Jalpaiguri, North Bengal, provide homes for an additional 100 handicapped children. There, in the magnificent foothills of the Himalayas, the children learn to surmount their handicaps through educational facilities, workshops, and farming. A visit to one of those centers, where the odds are beaten every day, where children once condemned to death are given a marvelous second chance, is a profoundly moving experience.</p>
                <BigHeader text = "2012 Volunteer Tour" />
                <p>Nov 2012, seven Sunshine Action volunteers went to India with program to donate basic food, material, medicines, wheel chairs, building projects estimated to benefit over 2'360 people through the following 10 centers/orgs:</p>
                <ul>
                    <li>Nirmal Hriday 垂死者之家- Mother Teresa's Home for the Dying Destitute</li>
                    <li>Prem Dam M.C.</li>
                    <li>Titagarh Leprocy Village - Gandhiji Prem Nivas</li>
                    <li>Raigarh M.C. for the Leprosy</li>
                    <li>Gangarampur M.C.</li>
                    <li>Tomorrow's Foundation for the Street Children</li>
                    <li>Catholic Diocese of Baruipur</li>
                    <li>Dum Dum M.C. for the female with mental disability</li>
                    <li>Donjour Children Welfare Association</li>
                    <li>Maria Poly M.C.</li>
                </ul>
                <ImageComp src = "India 180.jpeg" />
                <ImageComp src = "India 145.jpeg" />
                <BigHeader text = "2009 Volunteer Tour" />
                <ImageComp src = "India 72.jpeg" />
                <p>Nov 2009, 4 Sunshine Action volunteers went to Kolkata, New Delhi, Agra and Vrindavan for the Charity Mission with over 3'000 kg of Rice, over 1'000 kg of DAL, 800 kg of Potatoes, others food products, medicines and first Sunshine Action Medical Camp in the poorest village of India. Covering 1'725 cases/families, estimated to benefit 2'174 people</p>
                <ul>
                    <li>M.C. Nirmal Hriday - Kalighat ~ House for the Dyeing</li>
                    <li>Tomorrow's Foundation - Kolkata</li>
                    <li>Guild of Service of Widow Village - Vrindavan</li>
                    <li>M.C. Premdam - House for the severely sick - Kolkata</li>
                    <li>M.C. Prem Nagar Leprosy Center, Seemapuri</li>
                    <li>Rotary Club of Kolkata India - Medical mission in Village- West Bengel</li>
                    <li>Country Women's Assoc.of India - Medical mission in Village in West Bengel.</li>
                </ul>
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