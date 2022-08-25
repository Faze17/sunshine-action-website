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

export default ukfortunebagsPage;

function ukfortunebagsPage() {
return (
<>
<HeroComp name = "Fortune Bags" />
<HomePageLogo />
<div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
<div className="container" id = "BEGINREADHERE">
<BigHeader text = "Project Info" />
<ul>
<li><b>The Fortune Bag Program packs and distributes bags full of rice, pasta, dry foods, sauces, toiletries, and other necessities to low-income individuals supported by our partner beneficiaries.</b></li>
<li>The Sunshine Fortune Bag Program is the biggest program in the organization, which focuses on poverty relief.</li>
<li><b>In 2022, Sunshine Action is struggling to financially sustain all programs, including the Fortune Bag Program. Your contribution would mean a lot to us. <a href="/donate">Learn how to donate here.</a></b></li>
</ul>
<ImageComp src = "fortunebaguk1.jpeg" />
<BigHeader text = "History of the UK Fortune Bag Program" />
<p>On the 11th of December, the UK Sunshine Ambassadors packed the Christmas Sunshine fortune bags for the first time. Christmas chocolates were included in our bags to add 
    a bit of festivity. Furthermore, anti-pandemic items, including hand gels, were also provided to protect
    families from the Omicron outbreak.</p>
<p>The packed bags were then donated and delivered to the centers of <b>Feast with Us</b>, where they will be further delivered to families in need.</p>
<p>SUNSHINE ACTION UK is newly stablished with the support from <b>MAYER BROWN UK</b> <a href = "https://www.mayerbrown.com/en/locations/london?tab=overview" target = "_blank">https://www.mayerbrown.com/en/locations/london?tab=overview</a></p>
{/* <ImageComp src = "fortunebaguk.jpeg" /> */}
<div className="row">
    <div className="col-md-2"></div>
        <div className="col-md-8" id='ukcarosel'>
            <div id="carouselExampleControls" className="carousel slide card-img-top" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="500">
                    <div className="d-flex justify-content-center">
                            <img src="images/ukfortunebag1.JPG" className="d-block w-100" />
                    </div>
                </div>
                
                <div className="carousel-item" data-bs-interval="3000">
                    <div className="d-flex justify-content-center">
                    <img src="images/ukfortunebag2.JPG" className="d-block w-100"  />
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <div className="d-flex justify-content-center">
                    <img src="images/ukfortunebag3.jpg" className="d-block w-100"  />
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <div className="d-flex justify-content-center">
                    <img src="images/ukfortunebag4.jpg" className="d-block w-100"  />
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <div className="d-flex justify-content-center">
                    <img src="images/ukfortunebag5.jpg" className="d-block w-100"  />
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <div className="d-flex justify-content-center">
                    <img src="images/ukfortunebag6.jpg" className="d-block w-100"  />
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            
        </div>
</div>
</div>
<br></br>
</div>


<Footer />
</>
);
};