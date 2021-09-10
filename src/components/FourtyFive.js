import React from 'react';
import './FourtyFive.css';


function FourtyFive() {
    return (
        <div ClassName="fourty-five-page" style={{backgroundColor: 'rgb(82,97,147)'}}>

<div className="container">
   <div className="row">
      <div className="col-md-3">
         <br />
         <div id="sidebar" className="d-flex flex-column flex-shrink-0 p-3 text-dark" style={{width: '100%'}}>
            <img src="/images/logo.png" className="img-fluid" />
            <hr />
            <span className="text-dark fs-4 text-center">Table of Contents</span>
            <ol className="flex-column mb-auto">
               <li className="text-dark">
                  <a href="#IntroFourty" className="  text-dark" aria-current="page">
                     Introduction
                  </a>
               </li>
               <li className="text-dark">
                  <a href="#whyjoin" className=" text-dark" aria-current="page">
                     Why Join Us
                  </a>
               </li>
               <li className="text-dark">
                  <a href="#WhySunshineFourty" className="  text-dark" aria-current="page">
                     Why Sunshine Action
                  </a>
               </li>
               <li className="text-dark">
                  <a href="#ApplyFourty" className="  text-dark" aria-current="page">
                     How to Apply
                  </a>
               </li>
               <li className="text-dark">
                  <a href="#SchoolFourty" className="  text-dark" aria-current="page">

                     Schools That Joined
                  </a>
               </li>
            </ol>

            <hr />
            
            <span class="text-dark fs-4 text-center">Contact</span>
               <hr />
               <span style={{textAlign: 'center', fontSize:'18px'}}><strong>Adrian Yan</strong></span><br />
               <address style={{fontSize: '18px'}}>
                  Email:<br />
                  <a href="mailto:ambassador@sunshine-action.org" class="text-dark">ambassador@sunshine-action.org</a>
                  <br /><br />
                  Whatsapp:<br />
                  (+852) 5544 9656
               </address>


            
            <hr />
            <span className="text-dark fs-4 text-center">Social Media</span>
            <hr />
            Ambassador Media:
            <a href="https://www.youtube.com/watch?v=VSf5sbIsk78&list=PLwSy58i5yYL7DYNpcePL7Ivfoz7UN8E8a&ab_channel=SunshineAction" className="text-dark">
               YouTube
            </a>
            <br />
            <br />
            <span><br />General Media:</span>
            <a href="https://www.facebook.com/SunshineAction/" className="text-dark">
               Facebook
            </a>
            <a href="https://www.instagram.com/sunshineactionhk/" className="text-dark">Instagram</a>
            <a href="https://twitter.com/SunshineAction" className="text-dark">Twitter</a>
            <br /><br />
         </div>

         
         




      </div>




      <div className="col-md-1"></div>

      <div className="col-md-8">
         <br />
         <div className="container">
          
            <div id="IntroFourty" className="p-4 text-dark   rounded-3">
               <h1>Join the Sunshine 45 Club</h1>
            </div>
            <br />
        
            <div className="row">
               <div className="col-md-2"></div>
               <div className="col-md-8">
                  <div id="carouselExampleControls" className="carousel slide card-img-top" data-bs-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                           <div className="d-flex justify-content-center">
                              <img id="three" src="/images/45slide2.jpg" className="d-block w-100"  />
                           </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                           <div className="d-flex justify-content-center">
                              <img src="/images/45slide5.jpg" className="d-block w-100"  />
                           </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                           <div className="d-flex justify-content-center">
                              <img src="/images/45slide3.jpg" className="d-block w-100"  />
                           </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                           <div className="d-flex justify-content-center">
                              <img src="/images/45slide4.jpg" className="d-block w-100"  />
                           </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                           <div className="d-flex justify-content-center">
                              <img src="images/45slide6.jpg" className="d-block w-100"  />
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
            
          
            <p>Sunshine Action is inviting graduates worldwide with 45 & 44 points for IB /  3 A*A*A* for A-Level / 3.9-4.0 GPA / DSE Six 5** to join the exclusive Sunshine 45 Club, a student-led charity initiative. Members of the club will become Sunshine Ambassadors and will benefit from the vast networking opportunities available through participation in Sunshine Action’s charity programs.</p>
            <p>As a Sunshine 45 Club member, you will:
               <ul>
                  <li>Participate in, conduct, create, or execute at least one humanitarian project per year as a team</li>
                  <li>Help to solve global challenges through the Sunshine Action international network</li>
                  <li>Represent Sunshine Action overseas, and help promote and recruit other members to the Sunshine 45 Club </li>
                  <li>Make real sustainable global impact</li>
               </ul>
            </p>
            <div className="row">
               <div className="col-md-4">
                  <br />
                  <img src="images/4.jpeg" className="img-fluid" />
               </div>
               <div className="col-md-8">
                  <p>The first task for Club members in 2021 will be to:
                     <ol>
                        <li>Analyse the impact of COVID-19 on the general living model of humanity</li>
                        <li>Predict lifestyle changes in the post-pandemic era</li>
                        <li>Create a project that will bring real impact to communities in need, based on findings of the research</li>
                     </ol>
                  </p>
                  <p>Please take note that:
                     <ul>
                        <li>Sunshine 45 Club members will automatically become Sunshine Ambassadors (representing and promoting Sunshine Action at your institution)</li>
                        <li>Programmes will be conducted throughout the year</li>
                     </ul>
                  </p>
               </div>
            </div>

          
            <br />
            <div id="whyjoin" className="p-4 text-dark   rounded-3">
               <h1>Why Join Us?</h1>
            </div>
            <br />
            <ul>
               <li>Boost and promote your future career</li>
               <li>Have the freedom to create your own project and proposal</li>
               <li>Be supported as you plan, coordinate, and execute the approved projects</li>
               <li>Cooperate with Sunshine 45 Club members worldwide (from Hong Kong, UK, USA, Australia, and more) in project execution</li>
               <li>Be part of the global Sunshine Action Network, where you could meet, interview, and learn from experts of different fields</li>
               <li>Develop a variety of in-demand skills such as Project Management, Strategic Planning, Leadership Skills, Marketing & Promotion, Public Relationship & Social Communication Skills, Raising Funds & Resources, Business Negotiation Skills, Organisational Skills, Team Building & Management, and many more…</li>
            </ul>


            <br />
            <div id="WhySunshineFourty" className="p-4 text-dark   rounded-3">
               <h1>Why Sunshine Action?</h1>
            </div>
            <br />
            <div className="row">
               <div className="col-md-8">
                  <p>Sunshine Action is probably the only charity organization in the World that has such diversity of programs under one umbrella of Poverty Relief. Assisting from food, construction, medicine, etc… to all sort of targets such as elderly, single parents, the handicapped, the severely sick, poor children, etc... and covering both environmental tree planting programs, restocking the ocean and helping stray dogs too. There are endless possibilities to develop and we are a highly flexible charity organization. We have cooperated with over 400 charity organizations in 18 countries worldwide</p>
               </div>
               <div className="col-md-4">
                  <img src="images/2.jpeg" className="img-fluid" />
               </div>
            </div>

            <p>Sunshine Action is not an average organization that is interested only in asking you to donate or volunteering. In Sunshine Action , you could seriously learn a lot on other areas such as Compassion, Human Sensitivity, Project Management, Strategic Planning, Marketing & Promotion, Social Communication Skills, Funds & Resources-Raising,</p>
            <div className="row">
               <div className="col-md-4">
                  <img src="images/3.jpeg" className="img-fluid" />
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


       
         <b />
         <div id="ApplyFourty" className="p-4 text-dark   rounded-3">
            <h1>How to Apply</h1>
         </div>
         <br />
         <p>If you are interested in becoming a member of the Sunshine 45 Club, please fill in the <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAJzLG0YmLfppqIjci_TizgM8i4rzLDHMxYVVYCq9wOGQYdQ/viewform" className="text-warning">Google Form</a> to apply.
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
         <div id="SchoolFourty" className="p-4 text-dark rounded-3">
            <h1>Schools That Joined</h1>
         </div>

         <div className="row">
            <div className="col-md-4 text-center"><br />
               University of Cambridge, UK
            </div>
            <div className="col-md-4 text-center"><br />
               Imperial College London, UK
            </div>
            <div className="col-md-4 text-center"><br />
               University College London, UK
            </div>
            <div className="col-md-4 text-center"><br />
               University of Warwick, UK
            </div>
            <div className="col-md-4 text-center"><br />
               Cardiff University, UK
            </div>
            <div className="col-md-4 text-center"><br />
               University of Edinburgh, UK
            </div>
            <div className="col-md-4 text-center"><br />
               University of British Columbia, Canada
            </div>
            <div className="col-md-4 text-center"><br />
               Diocesan Boys' School, Hong Kong
            </div>
            <div className="col-md-4 text-center"><br />
               Canadian International School, Hong Kong
            </div>
            <div className="col-md-4 text-center"><br />
               ESF West Island School, Hong Kong
            </div>
            <div className="col-md-4 text-center"><br />
               ESF King George V School, Hong Kong
            </div>
            <div className="col-md-4 text-center"><br />
               Yew Chung International School, Hong Kong
            </div>





         </div>
         <br />
         <br />
      </div>

      <div className="col-md-1"></div>

   </div>

</div>



        </div>
    );
}

export default FourtyFive;


