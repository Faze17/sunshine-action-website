import React from 'react';
import './HomePageInfo.css';


function HomePageInfo() {
    return (
        <div className="homepageinfo" style={{background: 'rgb(82,97,147'}}>
    <div className="container">
      <div className="row">
         <div className="col-md-2"></div>

         <div className="col-md-12">
            <div className="container">
            <br />
            {/* The round text box */}
                <div class='float-center'>
                    <p class="numberCircle" id="c1" > <b>210,000</b><br></br>PEOPLE HELPED</p>
                    <p class="numberCircle" id="c2"><b>19</b><br></br> COUNTRIES</p>
                    <p class="numberCircle" id="c3">NON-POLITICAL<br></br>NON-RELIGIOUS</p>
                    <p class="numberCircle" id="c4"><b>100%</b> <br></br>FUNDING FROM THE PUBLIC</p>
                    <p class="numberCircle" id="c5"><b>10,000</b> <br></br>VOLUNTEERS</p>
                    <p class="numberCircle" id="c6">ENTIRELY VOLUNTEER RUN</p>
                </div> 
            </div>
        </div>
        </div>
    </div>
    {/* We help section */}
        <div id ='wehelp'>
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                    <div className="col-md-4">
                     <img className="img-fluid" id = 'roundimg' src="../images/Screenshot 2022-07-10 at 21.58.23.png" />
                     </div>

                     <div className="col-md-8">
                     <div id ='helptext'>
                        <h1><b>HOW WE HELP</b></h1>
                        <br></br>
                        <p>We ensure our donations go towards programs
                            providing packaged food, medicine and
                            necessities to people in need.</p>
                        <br></br>
                        <p>
                        Our volunteers to participate in overseas volunteering
                            tours to assist other countries where
                            they are too, in need.
                        </p>
                    </div>
                    </div>


                
            
        </div>

    </div>
    </div>   
 </div>   
 {/* issure we tackle section */}
 <div className="wetackle">
        <div class='left_half'>
            <div className ='container'>
            <div className="col-md-12">
            <h1>135 MILLION</h1>
            <p> are facing acute hunger worldwide</p> 
            <p>UN,2020</p>
            </div>
            </div>
        </div>
    
        <div class='right_half'>
            <div className ='container'>
            <div className="col-md-12">
            <h1>ISSURE WE TACKLE</h1>
            <p>We work to tackle the global issue of
            poverty. </p>
            <p>&#8216;Around the world, 821 million people do
            not have enough of the food they need to
            live an active, healthy life. One in every
            nine people goes to bed hungry each night,
            including 20 million people currently at
            risk of famine in South Sudan, Somalia,
            Yemen and Nigeria.&#8217; (Mercy Corps 2020)</p>
            </div>
            </div>
        </div>
    
 </div>
           

            

<div className="col-md-1"></div>





<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"> </script>


</div> 


    );
}

export default HomePageInfo;