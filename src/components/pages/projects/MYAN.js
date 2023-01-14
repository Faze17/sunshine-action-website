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
export default MYANPage;
function MYANPage() {
return (
<>
<HeroComp name = "MYANMAR" />
      <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
      <div className="container" id = "BEGINREADHERE">
<HomePageLogo />
<BigHeader text = "Asia Volunteering Tour" />
<SmallHeader text = "Nov 2013" />
<ImageComp src = "IMG_5BA33100317D-1_resized.jpeg" />
<p>Four Sunshine Action volunteers went to Yangon & Mae Sot, distributing over 30 tones of food & material through the following several organizations including the Burmese Migrant Worker's Education Committee, Eyes to Burma for the dump site, Boddha Ditta Nun Vihara, Mangalar Parahita Youth Development Center, Tikha Rama nun Vihara,Happy Heaven Humanitarian Project for HIV/AIDS orphans, Mayan Chaung Leprosy village and the Social Action for Women.</p>
<p>In this trip, we also sponsored tuition fee for teachers, solar light, shoes, and many more, estimated to benefit over 2'316 people directly</p>
<p>Our focus is to ensure that as many children and young people as possible have access to a quality education which enriches their lives now, and opens opportunities for them either back in Myanmar, in Thailand or further afield. At the moment we oversee education for approximately 3'500 children in 25 learning centres.</p>

<SmallHeader text = "Living on Landfill" />
<ImageComp src = "IMG_9240_resized.JPG" />
<p>Eyes to Burma is truly fortunate that Australian filmmaker, Helen Newman of Nomad Films, visited the Mae Sot garbage dump and was so moved by what she saw that she made a short documentary. She recently sent a link to the film, and said: "Finally I am able to share the film created from my time on a Thai rubbish dump with Burmese refugees and the wonderful Fred Stockwell from Eyes to Burma. I met so many inspiring, powerful and positive people during this shoot and was reminded again both of the incredible strength of the human spirit and how much difference one person can make."</p>
<p>We met Fred Stockwell, a wonderful man of 70 years old alone taking care of hundreds of people in the dump site of Mae Sot, Thailand.  A garbage dump outside of Mae Sot, Thailand, is home to a group of Burmese people who have been displaced by armed conflicts in Burma.  They are unable to return to their country where many of their villages have been destroyed and are unable to gain legal refugee status in Thailand; thus, their options are very limited. Those living in the Mae Sot Dump, even the children, earn a meager living by picking recyclable plastic from piles of garbage.</p>

</div>
</div>
<Footer />
</>
);
};