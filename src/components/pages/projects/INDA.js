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
export default INDAPage;
function INDAPage() {
return (
<>
<HeroComp name = "INDIA" />

<div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
<div className="container" id = "BEGINREADHERE">

<BigHeader text = "2016-2017 Charity Tour" />
<ImageComp src = "india2017.jpeg" />
<p>On this trip, Sunshine Action partnered with Missionaries of Charity, a Roman Catholic religious congregation founded by Mother Teresa.</p>
<BigHeader text = "2014 Volunteer Tour" />
<SmallHeader text = "February 2014" />
<p>Sunshine Action volunteers traveled to Calcutta, India, and donated food, basic materials, student sponsorship money, clothes, and building construction materials to several local organizations. Volunteers visited four children’s homes which provide aid to handicapped children. A visit to one of these centers, where children once condemned to death are given a second chance, is a profoundly moving experience.</p>
<p>Missionaries of Charity is a Roman Catholic Latin Rite religious congregation established in 1950 by Mother Teresa. It consists of over 4,500 religious sisters and is active in 133 countries. Members of the order designate their affiliation using the order's initials, "M.C." A member of the Congregation must adhere to the vows of chastity, poverty, obedience, and the fourth vow, to give "wholehearted free service to the poorest of the poor."</p>
<BigHeader text = "2012 Volunteer Tour" />
<SmallHeader text = "November 2012" />
<p>Sunshine Action volunteers went to India to donate food, medicine, wheelchairs and other materials. Sunshine Action also contributed to several building projects for those in need.</p>
<p>Volunteers visited Vrindavan, where the Guild of Service has a house to care for displaced widows. Vrindavan is known as the City of Widows due to the large number of widows who move into the town and surrounding area after losing their husbands. According to some Hindu traditions, upper-caste widows may not remarry, so many of those abandoned by their families make their way here.</p>
<p>These efforts are estimated to benefit over 2,360 people through local organizations and centres.</p>
</div>
</div>
<Footer />
</>
);
};