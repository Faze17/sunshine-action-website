import React from 'react';
import './AmbassadorPage.css';



function AmbassadorPage() {
    return(
<div className="AmbassadorPage" style={{backgroundColor: 'rgb(82,97,147)'}}>
      <div className="container">
         <div className="row">
            <div className="col-md-3">
            <div className="sticky-top">
               <br />
               <div id="sidebar" className="d-flex flex-column flex-shrink-0 p-3 text-dark" style={{width: '100%'}}>

                  <img src="images/logo.png" className="img-fluid" />
                  <hr />

            <span className="text-dark fs-4 text-center">Table of Contents</span>
                  <ol className="flex-column mb-auto">
                     <li className="text-dark">
                        <a href="#intro" className="  text-dark" aria-current="page">
                           Intro
                        </a>
                     </li>
                     <li className="text-dark">
                        <a href="#why" className="  text-dark" aria-current="page">
                           Why Join Us
                        </a>
                     </li>
                     <li className="text-dark">
                        <a href="#why-SA" className="  text-dark" aria-current="page">
                           Why Sunshine Action
                        </a>
                     </li>
                     <li className="text-dark">
                        <a href="#apply" className="  text-dark" aria-current="page">
                           How to Apply
                        </a>
                     </li>
                     <li className="text-dark">
                        <a href="#university" className="  text-dark" aria-current="page">
                           Universities&nbsp;That <br/> Joined
                        </a>
                     </li>
                     <li className="text-dark">
                        <a href="#schools" className="  text-dark" aria-current="page">

                           Schools That Joined
                        </a>
                     </li>
                  </ol>

                  <hr />
                  
                  <span className="text-dark fs-4 text-center"> <a href="/contact-us" className="  text-dark" aria-current="page">Contact Us</a></span>
                  <hr />



               
                  <hr />
                  <span className="text-dark fs-4 text-center">Social Media</span>
                  <hr />
                  <span style={{fontSize: '18px'}}>Ambassador Media:</span>
                  <a style={{fontSize: '18px'}} href="https://www.youtube.com/watch?v=VSf5sbIsk78&list=PLwSy58i5yYL7DYNpcePL7Ivfoz7UN8E8a&ab_channel=SunshineAction" className="text-dark">
                     YouTube
                  </a>


               </div>               
               </div>


               </div>









         <div className="col-md-1"></div>

      

         
         <div className="col-md-8">
            <br />
            <div className="container">
           
               <div id="intro" className="p-4 text-dark   rounded-3">
                  <h1>Become a Sunshine Ambassador</h1>
               </div>
               <br />
        
               <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                     <div id="carouselExampleControls" className="carousel slide card-img-top" data-bs-ride="carousel">
                        <div className="carousel-inner">
                           <div className="carousel-item active" data-bs-interval="500">
                              <div className="d-flex justify-content-center">
                                 <img id="one" src="images/ambassadorHKMain.jpg" className="d-block w-100" />
                              </div>
                           </div>
                          
                           <div className="carousel-item" data-bs-interval="3000">
                           <div className="d-flex justify-content-center">
                           <img id="two" src="images/slide2.jpg" className="d-block w-100"  />
                        </div>
                     </div>
               
                  <div className="carousel-item" data-bs-interval="3000">
                     <div className="d-flex justify-content-center">
                        <img id="three" src="images/slide3.jpg" className="d-block w-100"  />
                     </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                     <div className="d-flex justify-content-center">
                        <img id="four" src="images/slide4.jpg" className="d-block w-100"  />
                     </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                     <div className="d-flex justify-content-center">
                        <img id="five" src="images/slide5.jpg" className="d-block w-100"  />
                     </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                     <div className="d-flex justify-content-center">
                        <img id="six" src="images/slide6.jpg" className="d-block w-100"  />
                     </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                     <div className="d-flex justify-content-center">
                        <img id="seven" src="images/slide7.jpg" className="d-block w-100"  />
                     </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                     <div className="d-flex justify-content-center">
                        <img id="eight" src="images/slide8.jpg" className="d-block w-100"  />
                     </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                     <div className="d-flex justify-content-center">
                        <img id="nine" src="images/slide9.jpg" className="d-block w-100"  />
                     </div>
                  </div>
             
                  <div className="carousel-item" data-bs-interval="3000">
                  <div className="d-flex justify-content-center">
                  <img id="ten" src="images/slide10.jpg" className="d-block w-100"  />
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
<div className="col-md-2"></div>
</div>
<br />

<p>We are looking for committed secondary school and university students to become our next Sunshine Ambassador, who will be trained as leaders capable in creating true positive impact through our charity organisation, for the benefit of humanity, sustainability of our planet’s resources, and charity to the poor.</p>
<div className="row">
   <div className="col-md-4">
      <img src="images/ambassadHK-1.jpg" className="img-fluid" />
   </div>
   <div className="col-md-8">
      <p>If you want to see your effort turn into direct action, join us! We are looking for committed secondary school and university students. As a Sunshine Ambassador, you will:
         <ul>
            <li>Extend the reputation of Sunshine Action at your institution</li>
            <li>Gather volunteers and promote Sunshine Action events</li>
            <li>Create and lead your own projects that help the local community</li>
            <li>Learn more about the workings of a charity organisation</li>
            <li>Make real sustainable global impact</li>
         </ul>
      </p>
   </div>
</div>




<br />
<div id="why" className="p-4 text-dark   rounded-3">
   <h1>Why Join Us?</h1>
</div>
<br />
<ul>
   <li>Boost and promote your future career</li>
   <li>Have the freedom to create your own project and proposal</li>
   <li>Be supported as you plan, coordinate, and execute the approved projects</li>
   <li>Cooperate with Sunshine Ambassadors worldwide (from Hong Kong, UK, USA, Australia, and more) in project execution</li>
   <li>Be part of the global Sunshine Action Network, where you could meet, interview, and learn from experts of different fields</li>
   <li>Develop a variety of in-demand skills such as Project Management, Strategic Planning, Leadership Skills, Marketing & Promotion, Public Relationship & Social Communication Skills, Raising Funds & Resources, Business Negotiation Skills, Organisational Skills, Team Building & Management, and many more…</li>
</ul>







<br />
<div id="why-SA" className="p-4 text-dark   rounded-3">
   <h1>Why Sunshine Action?</h1>
</div>
<br />
<div className="row">
   <div className="col-md-8">
      <p>Sunshine Action is probably the only charity organization in the World that has such diversity of programs under one umbrella of Poverty Relief. Assisting from food, construction, medicine, etc… to all sort of targets such as elderly, single parents, the handicapped, the severely sick, poor children, etc... and covering both environmental tree planting programs, restocking the ocean and helping stray dogs too. There are endless possibilities to develop and we are a highly flexible charity organization. We have cooperated with over 400 charity organizations in 18 countries worldwide</p>
   </div>
   <div className="col-md-4">
      <img src="images/ambassadHK-2.jpg" className="img-fluid" />
   </div>
</div>

<p>Sunshine Action is not an average organization that is interested only in asking you to donate or volunteering. In Sunshine Action , you could seriously learn a lot on other areas such as Compassion, Human Sensitivity, Project Management, Strategic Planning, Marketing & Promotion, Social Communication Skills, Funds & Resources-Raising,</p>
<div className="row">
   <div className="col-md-4">
      <img src="images/ambassadHK-3.jpg" className="img-fluid" />
   </div>
   <div className="col-md-8">
      <p>Business Negotiation Skills, Multi-layers Leadership, Legal Aspects, Import & Export, Multinational Culture learning, Public Relationship & Communication, Organizational Skills, Team Building & Management, Global Environment & understanding and many more…from real-life projects –instead of theory- with the final purpose of training leaders capable in create true positive impacts for the benefit of humanity, sustainability of the resources in this planet and charity to the poor.</p>
   </div>
</div>

<p>Being Sunshine Ambassadors, it’s a life-long advantage of being connected to the Sunshine Action Network, you could meet, interview and learn from VIPs of different fields, from politic, finance, legal, etc… and have the responsibility to connect other Sunshine Ambassadors and cooperate in different projects globally in the future.</p>
<div className="row">
   <div className="col-md-8">
      <p>Sunshine Action could be the only charity organization that will back you up on background-check from major multi-national corporations, help to boost & promote your future career and even if you are being accused of a crime, the organization could consider to issue the official Certification or Mitigation Letter to the judge, specifying your contribution to the society. Of course, all these depends on how much you have contributed to Sunshine Action as Sunshine Ambassadors and also the nature of the crime. Sunshine Action has issued only 3 letters of this type in the last 10 years. One of them was requested by a mother for his son who volunteered previously.</p>
   </div>
   <div className="col-md-4">
      <img src="images/1.jpeg" className="img-fluid" />
   </div>
</div>
<p>Sunshine Action welcome creative & innovative ideas in the charity field and give you the freedom to create your own project and proposal. We support the Sunshine Ambassadors during the planning, coordination and execution of these approved projects. So, you don’t need to always only follow Sunshine Action own original programs, but have this rare freedom almost non-existing in others charity organizations.</p>
</div>



<br />
<div id="apply" className="p-4 text-dark rounded-3">
   <h1>How to Apply</h1>
</div>
<br />
<p>If you are interested in and think you have what it takes to become our next Sunshine Ambassador, please fill in the <a href="https://forms.gle/Rb4buXPGUSmxMzea9" className="text-warning">Google Form</a> to apply.
   <br /><br />Please note that this is a long-term role, as we at Sunshine Action value long-term networking.
   <br /><br />If you have any further questions, contact Adrian Yan at ambassador@sunshine-action.org or WhatsApp (+852) 5544 9656 for more information. We hope to hear from you soon!
</p>
<br />
<p>Some of the skills & qualities we look for in our Sunshine Ambassadors:
   <ul>
      <li>Leadership</li>
      <li>Takes initiative</li>
      <li>Responsible & committed</li>
      <li>Project management</li>
      <li>Good social communication</li>
      <li>Problem solving</li>
      <li>Team building & management</li>
   </ul>
</p>



<br />
<div id="university" className="p-4 text-dark rounded-3">
   <h1>Universities That Joined</h1>
</div>

<div className="row" style={{fontSize:'20px'}}>

   <div className="col-md-3 text-center"><br />
      University of Oxford, UK
   </div>
   <div className="col-md-3 text-center"><br />
      University of Cambridge, UK
   </div>
   <div className="col-md-3 text-center"><br />
      Imperial College London, UK
   </div>
   <div className="col-md-3 text-center"><br />
      University College London, UK
   </div>
   <div className="col-md-3 text-center"><br />
      University of Hong Kong, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      University of Warwick, UK
   </div>
   <div className="col-md-3 text-center"><br />
      University of Keele, UK
   </div>
   <div className="col-md-3 text-center"><br />
      University of Queen Mary, UK
   </div>
   <div className="col-md-3 text-center"><br />
      University of Southampton, UK
   </div>


</div>
<br />
<br />

<br />
<div id="schools" className="p-4 text-dark rounded-3">
   <h1>Schools That Joined</h1>
</div>
<div className="row" style={{fontSize:'20px'}}>

   <div className="col-md-3 text-center"><br />
      Diocesan Boys’ School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      ESF King George V School, UK
   </div>
   <div className="col-md-3 text-center"><br />
      ESF Discovery College, UK
   </div>
   <div className="col-md-3 text-center"><br />
      ESF West Island School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      Canadian International School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      Hong Kong International School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      Yew Chung International School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      St. Paul’s Convent School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      German Swiss International School, Hong Kong
   </div>


</div>
</div>
<br />
<br />
<div className="col-md-1"></div>
<br />
<br />

</div>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"> </script>


</div>
    );
}

export default AmbassadorPage;
