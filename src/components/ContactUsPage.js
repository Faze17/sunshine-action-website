import React from 'react';
import './ContactUsPage.css';


function ContactUsPage() {
    return (

        <div ClassName="contact-us-page" style={{backgroundColor: 'rgb(82,97,147)'}}>

<div className="container">
   <div className="row">
      <div className="col-md-3">
         <br />

         
         




      </div>




      <div className="col-md-1"></div>

      <div className="col-md-8">
         <br />
         <div className="container">
          
            <div id="ContactUs" className="p-4 text-dark rounded-3">
               <h1>Contact Us</h1>
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
                              <img id="six" src="/images/45slide5.jpg" className="d-block w-100"  />
                           </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                           <div className="d-flex justify-content-center">
                              <img id="four" src="/images/45slide3.jpg" className="d-block w-100"  />
                           </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                           <div className="d-flex justify-content-center">
                              <img id="five" src="/images/45slide4.jpg" className="d-block w-100"  />
                           </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                           <div className="d-flex justify-content-center">
                              <img id="seven" src="images/45slide6.jpg" className="d-block w-100"  />
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
            
          
            <p style={{color:'rgb(253, 137, 4)'}}>Sunny Mak - Founder and Director </p>   
                <ul>
                  <li>Email: <a href="mailto:sunshine@sunshine-action.org" class="text-light" style={{textDecoration: 'none'}}>sunshine@sunshine-action.org</a> </li>
                  <li>Whatsapp: (+852) 6888 4028</li>
               </ul>
               
               <br />
            <p style={{color:'rgb(253, 137, 4)'}}>Adrian Yan - Director and Head of Sunshine Ambassadors  </p>
               <ul>
                  <li>Email: <a href="mailto:ambassador@sunshine-action.org" class="text-light" style={{textDecoration: 'none'}}>ambassador@sunshine-action.org</a> </li>
                  <li>Whatsapp: (+852) 5544 9656</li>
                  </ul>
              
      
            

          
            <br />
            <div id="HowToDonate" className="p-4 text-dark   rounded-3">
               <h1>How to Donate</h1>
            </div>
            <br />
            <p>To donate to Sunshine Action, there are serveral methods to do so:</p>
            <p style={{color: 'rgb(253, 137, 4)'}}>Bank Wire Transfer:   
                <ul style={{listStyleType: 'none'}}>
                    <li>HSBC:</li>
                    <li style={{marginLeft: '20px'}}>  Account No.:  400-595989-838 </li>
                     <li style={{marginLeft: '20px'}}>  Swift: HSBCHKHHHKH </li>
                     <li style={{marginLeft: '20px'}}>  Bank I.D.: 400 </li>
                     <li style={{marginLeft: '20px'}}>  Beneficiary I.D.: 595989-838 </li>
                     <li style={{marginLeft: '20px'}}>  Bank Address: 1 Queen's Road, Central Hong Kong </li>
                     <li style={{marginLeft: '20px'}}>  Bank Tel: 2748 8288 </li>    
                </ul>

                <ul style={{listStyleType: 'none'}}>
                    <li>Bank of China:</li>
                    <li style={{marginLeft: '20px'}}>  Account No.:  012  926  1  018415  6 </li>
                     <li style={{marginLeft: '20px'}}>  Swift:  BKCHHKHHXXX </li>
                     <li style={{marginLeft: '20px'}}>  Bank I.D.: 012 </li>
                     <li style={{marginLeft: '20px'}}>  Branch I.D.:  926 </li>
                     <li style={{marginLeft: '20px'}}>  Beneficiary I.D.: 10184156 </li>
                     <li style={{marginLeft: '20px'}}>  Bank Address:  Head Office 1 Garden Road, Hong Kong </li>
                     <li style={{marginLeft: '20px'}}>  Bank Tel: (852)-2826-6888 </li>    
                </ul>
                </p>

                <p style={{color: 'rgb(253, 137, 4)'}}>Cheque:</p>
                    <ul style={{listStyleType: 'none'}}>
                        <li>Crossed check with payee 'SUNSHINE ACTION Ltd.', please attach the donor name, contact telephone and complete address for tax-deductible receipt. </li>
                        <br />
                        <li style={{color: 'rgb(253, 137, 4)', textAlign: 'center'}}>Mailing Address: Room D, 13/F Wing Kin Industrial Building, 4-6 Wing Kin Road, Kwai Chung </li>
                    </ul>

                    <p style={{color: 'rgb(253, 137, 4)'}}>Donation of Items:
                    <p>At Sunshine Action we welcome enterprises and donors to donate the following items:</p>   
                <ul style={{listStyleType: 'none'}}>
                    <li>Food Items:</li>
                    <li style={{marginLeft: '20px'}}> - White/Brown Rice, Oats, Nuts </li>
                     <li style={{marginLeft: '20px'}}> - Canned Food with 6 months of expiry date </li>
                     <li style={{marginLeft: '20px'}}> - Pasta, Noodles, etc.</li>
                     <li style={{marginLeft: '20px'}}> - Cooking Oils such as Canola, Coconut, Vegetable, etc.</li>
                     <li style={{marginLeft: '20px'}}> - Any form of Condiments </li>
                     <li style={{marginLeft: '20px'}}> - Juices and any Type of Healthy Drinks </li>    
                </ul>

                <ul style={{listStyleType: 'none'}}>
                    <li>Non-Food Items</li>
                    <li style={{marginLeft: '20px'}}> - Detergents </li>
                     <li style={{marginLeft: '20px'}}> - Shampoo & Conditioners </li>
                     <li style={{marginLeft: '20px'}}> - Face & Moisturising Cream </li>
                     <li style={{marginLeft: '20px'}}> - Toilet Paper & Tissue </li>
                     <li style={{marginLeft: '20px'}}> - Notebooks & General Stationery </li>
                     <li style={{marginLeft: '20px'}}> - Children & Adult Clothing (New & Second Hand in Good Condition) </li>
                     <li style={{marginLeft: '20px'}}>   </li>    
                </ul>
                </p>
                <br /> <br />

            
                    
                   



<p style={{textAlign: 'center'}}>Sunshine Action is NOT subvented by Hong Kong Government or any Government, the Community Chest of HK, neither the Lottery Fund of Jockey Club of HK. All 100% funding come from general public only and corporations only.
In average, 98% of the food, materials and contribution from SUNSHINE ACTION to the final beneficiaries are purchased, only less than 2% are donation in kind </p>
               
     </div>
         


     
         <br />
         <div id="SchoolContact" className="p-4 text-dark rounded-3">
            <h1>Schools That Joined</h1>
         </div>

         <div className="row" style={{fontSize:'20px'}}>

   <div className="col-md-3 text-center"><br />
      Canadian International School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      Cardiff Sixth Form College, UK
   </div>
   <div className="col-md-3 text-center"><br />
      Cardiff University, UK
   </div>
   <div className="col-md-3 text-center"><br />
      Delia School of Canada, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      Diocesan Boys' School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      ESF Discovery College, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      ESF King George V School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      ESF West Island School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      French International School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      German Swiss International School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      Hong Kong International School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      Hong Kong University, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      Hong Kong University of Science & Technology, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      Imperial College London, UK
   </div>
   <div className="col-md-3 text-center"><br />
      Independent School Foundation, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      King’s College London, UK
   </div>
   <div className="col-md-3 text-center"><br />
      La Salle College, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      Li Po Chun United World College, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      Po Leung Kuk Choi Kai Yau School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      Queen Mary University of London, UK
   </div>
   <div className="col-md-3 text-center"><br />
      St. Paul’s Co-Ed College, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      St. Paul’s Convent School, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
      University College London, UK
   </div>
   <div className="col-md-3 text-center"><br />
      University of Queensland, Australia
   </div>
   <div className="col-md-3 text-center"><br />
      University of Keele, UK
   </div>
   <div className="col-md-3 text-center"><br />
      University of British Columbia, Canada
   </div>
   <div className="col-md-3 text-center"><br />
      University of Cambridge, UK
   </div>
   <div className="col-md-3 text-center"><br />
      University of Chicago, USA
   </div>
   <div className="col-md-3 text-center"><br />
      University of East Anglia, UK
   </div>
   <div className="col-md-3 text-center"><br />
      University of Oxford, UK
   </div>
   <div className="col-md-3 text-center"><br />
      University of Toronto, Canada
   </div>
   <div className="col-md-3 text-center"><br />
      University of Warwick, UK
   </div>
   <div className="col-md-3 text-center"><br />
      University of Waterloo, Canada
   </div>
   <div className="col-md-3 text-center"><br />
      University of Southampton, UK
   </div>
   <div className="col-md-3 text-center"><br />
      Wa Ying College, Hong Kong
   </div>
   <div className="col-md-3 text-center"><br />
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

export default ContactUsPage;

