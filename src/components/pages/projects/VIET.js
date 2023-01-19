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
export default VIETPage;
function VIETPage() {
return (
<>
<HeroComp name = "VIETNAM" />
<HomePageLogo />

<div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
<div className="container" id = "BEGINREADHERE">

<BigHeader text = "Sunshine Musical Charity Evening" />
<SmallHeader text = "June 2017" />
<ImageComp src = "IMG_1688.PNG" />
<p>Since 2009, Sunshine Action has been supporting many projects in Vietnam. One of the orphanages, the “Gia dinh Tinh Thuong Te-Phan” orphanage is a very small center taking care mostly mentally & handicapped orphans (69) in the city of Ho Chi Minh. Established in 1985 by Brother Hoàng Văn Bình, “Te-Phan Loving Family Orphanage” has more than 31 years of experience in caring for the disadvantaged people.One of the young performer, a completely blind pianist NHI will play piano on the following evening together with local artists to raise fund in helping the treatments and studies of the orphans </p>
<p>Nhi was born 8 Dec, 2004, left at hospital and was born prematurely and so weak. By the time volunteers from Sunshine Action reached there, it was too late and she lost her sight already. She started to play piano around grade 4 when we were given an old piano. She although is an epilepsy and take medicine everyday but she is talented at musical. With the support from Sunshine Action to study musical, she started to teach others kids in the orphanage like Xuan, An and Nghia to play piano too. In her school, they recognized her talented then chose her for musical’s team of her school. </p>

<BigHeader text = "Charity Tour" />
<SmallHeader text = "January 2016" />
<ImageComp src = "18112408-CA13-475F-AE34-28AFB84FECB2_resized.jpeg.png" />
<p>The mission of this trip was food distribution to the poorest of the poor. Volunteers visited and volunteered for several local organizations, and provided Sunshine Student Sponsorships to poor children.  This program was founded in 2013, and 30 children are sponsored on a yearly basis. Volunteers also visted long-term supported cases of HIV/AIDs and others with disabilities or chronic illness, and evaluated the Microfinance program in Vietnam.</p>

<BigHeader text = "Sunshine Student Sponsership" />
<ImageComp src = "DCD96E95-06C7-4FF8-878D-FB7A98A06C34-resized.jpeg.png" />
<p>This program started in Vietnam in 2013, sponsoring 30 childen on yearly basis and this is the first time we meet them personally in the villages </p>

<BigHeader text = "Sunshine Microfinance Program" />
<ImageComp src = "4B478A32-DB7A-45FD-B349-4EC99DD0BFC6_resized.jpeg.png" />
<p>Sunshine Action started this program in Vietnam in 2014 and started by meeting 2 groups of mainly farmers and labor workers. Each group consisting of 6 people and after assessment and interview, Sunshine Action granted few cows and micro-loans to the group in pursing several projects.</p>

<BigHeader text = "Other Actions" />
<SmallHeader text = "Distribution of materials" />
<ImageComp src = "22211426-4270-4BBC-9C0D-117E5F75B7EE_resized.jpeg.png" />
<p>Following Sunshine Action's 6 years of tradition in distributing rice, packed food, noodles, cooking sauces for over 350 poor families, estimated to benefit some 1,500 people directly.Our target groups are from extremely poor families, including elderly, mentally & physically handicapped, severely sick patients, etc.</p>
<SmallHeader text = "Free Medicine" />
<ImageComp src = "4B478A32-DB7A-45FD-B349-4EC99DD0BFC6_resized.jpeg.png" />
<p>Sunshine Action has been sponsoring free medicine for over 3 years such as giving out free medicine and herbal to the poor families in the villages. Sunshine Action has been sponsoring this program for 3 years.</p>
</div>
</div>
<Footer />
</>
);
};