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
                  <a href={window.location.pathname + "#IntroFourty"} className="  text-dark" aria-current="page">
                     Introduction
                  </a>
               </li>
               <li className="text-dark">
                  <a href={window.location.pathname + "#whyjoin"} className=" text-dark" aria-current="page">
                     Why Join Us
                  </a>
               </li>
               <li className="text-dark">
                  <a href={window.location.pathname + "#WhySunshineFourty"} className="  text-dark" aria-current="page">
                     Why Sunshine Action
                  </a>
               </li>
               <li className="text-dark">
                  <a href={window.location.pathname + "#ApplyFourty"} className="  text-dark" aria-current="page">
                     How to Apply
                  </a>
               </li>
               <li className="text-dark">
                  <a href={window.location.pathname + "#SchoolFourty"} className="  text-dark" aria-current="page">

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




      <div className="col-md-1"></div>

      <div className="col-md-8">
         <br />
         <div className="container">
          
            <div id="IntroFourty" className="p-4 text-dark   rounded-3">
               <h1><a href="https://docs.google.com/forms/d/e/1FAIpQLSeAJzLG0YmLfppqIjci_TizgM8i4rzLDHMxYVVYCq9wOGQYdQ/viewform" className='text-black' >Join the Sunshine 45 Club</a></h1>
            </div>
            <br />
            
            {/* making slider */}
            <div className="row">
               <div className="col-md-2"></div>
               <div className="col-md-8">
                  <div id="carouselExampleControls" className="carousel slide card-img-top" data-bs-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                           <div className="item peopleCarouselImg">
                              <img id="three" src="/images/45slide2.jpg" className="d-block w-100"></img>
                           </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                           <div>
                              <div className="item peopleCarouselImg">
                                 <img src="/images/45slide5.jpg" className="d-block w-100"  />
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                           <div>
                              <div className="item peopleCarouselImg">
                                 <img src="/images/45slide3.jpg" className="d-block w-100"  />
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                           <div class="item peopleCarouselImg">
                                 <img src="/images/45slide4.jpg" className="d-block w-100"  />
                           </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                           <div className="d-flex justify-content-center">
                              <div class="item peopleCarouselImg">
                                 <img src="/images/45slide6.jpg" className="d-block w-100"  />
                              </div>
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
            
          
            <p>Sunshine Action is inviting graduates worldwide with:</p>
            <ul>
               <li>45 & 44 points for IB </li>
               <li>3 A*A*A* for A-Level </li>
               <li>3.9-4.0 GPA </li>
               <li>DSE Six 5** </li>
            </ul>
            <p>to join the exclusive Sunshine 45 Club, a student-led charity initiative.
                Members of the club will become Sunshine Ambassadors and will benefit from 
                the vast networking opportunities available through participation in Sunshine Action’s charity programs.</p>
            
            <br/>
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
                  <br/>
                  <img src="images/4.jpeg" className="img-fluid"  />
               </div>
               <div className="col-md-8">
                  <br/>
                  <p>The first task for Club members in 2021 will be to create a project that 
                     help the communities based on analysing the impact of COVID-19 on the general
                      living model of humanity and lifestyle changes.
                  </p>
                  <br />
                </div>
               
                <br/>
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
                  
               <p>Please take note that:
                  <ul>
                     <li>Sunshine 45 Club members will automatically become Sunshine Ambassadors (representing and promoting Sunshine Action at your institution)</li>
                     <li>Programmes will be conducted throughout the year</li>
                  </ul>
               </p>
            
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
               <li>Cooperate with Sunshine 45 Club members worldwide and be part of the global Sunshine Action Network, 
                  where you could meet, interview, and learn from experts of different fields</li>
               <li>Develop a variety of in-demand skills such as Project Management, Strategic Planning, Leadership Skills, Marketing & Promotion, Public Relationship & Social Communication Skills, Raising Funds & Resources, Business Negotiation Skills, Organisational Skills, Team Building & Management, and many more…</li>
            </ul>


            <br />
            <div id="WhySunshineFourty" className="p-4 text-dark   rounded-3">
               <h1>Why Sunshine Action?</h1>
            </div>
            <br />
            <div className="row">
               <div className="col-md-8">
                  <p>Sunshine Action is probably the only charity organization in the 
                     World that has such diversity of programs under one umbrella of 
                     Poverty Relief. Sunshine Action’s programme ranges from helping the 
                     vulnerable to protecting the environment. There are endless possibilities
                     to develop and we are a highly flexible charity organization. We 
                     have cooperated with over 400 charity organizations in 18 countries worldwide. </p>
               </div>
               <div className="col-md-4">
                  <img src="images/2.jpeg" className="img-fluid" />
               </div>
            </div>

            <p>Sunshine Action could be the only 
               charity organization that will back you up on a background-check from major multi-national 
               corporations, and even boost your future career. Even for someone being accused of a crime, 
               the organization could consider to issue an official Certification or Mitigation Letter to the judge,
                specifying his/her contribution to society.  </p>
            <div className="row">
               <div className="col-md-4">
                  <img src="images/3.jpeg" className="img-fluid" />
               </div>
               <div className="col-md-8">
               </div>
            </div>

            <div className="row">
               <div className="col-md-8">
                  <p>Sunshine Action welcomes creative and innovative ideas in the charity 
                     field and gives you the freedom to create your own projects and proposals.
                     We support Sunshine Ambassadors during the planning, coordination and execution
                     of these approved projects, which almost do not exist in other charity organizations. </p>
               </div>
               <div className="col-md-4">
                  <img src="images/1.jpeg" className="img-fluid" />
               </div>
            </div>
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

         <p>Check out some of the Schools that have joined by pressing the button below!</p>

     
         <br />
         <button class="btn btn-info" data-bs-toggle="collapse" type="button" data-bs-target="#schoollist" id="SchoolButton">
            <h1>Schools That Joined</h1>
         </button>
         <div id="schoollist" class="collapse" style={{fontSize:'20px'}}>
         <div className="row"><br />
               University of Cambridge, UK
            </div>
            <div className="row"><br />
               Imperial College London, UK
            </div>
            <div className="row"><br />
               University College London, UK
            </div>
            <div className="row"><br />
               University of Warwick, UK
            </div>
            <div className="row"><br />
               Cardiff University, UK
            </div>
            <div className="row"><br />
               University of Edinburgh, UK
            </div>
            <div className="row"><br />
               University of British Columbia, Canada
            </div>
            <div className="row"><br />
               Diocesan Boys' School, Hong Kong
            </div>
            <div className="row"><br />
               Canadian International School, Hong Kong
            </div>
            <div className="row"><br />
               ESF West Island School, Hong Kong
            </div>
            <div className="row"><br />
               ESF King George V School, Hong Kong
            </div>
            <div className="row"><br />
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


