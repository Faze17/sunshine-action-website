import React from 'react';
import './AmbassadorPage.css';


function VoluntaryPage() {
    // function renderEmail() {
    //     switch (props.country) {
    //       case "hk":
    //         return <li>Sunny: <a href="mailto:sunshine@sunshine-action.org" class="text-white">sunshine@sunshine-action.org</a> </li>;
    //         break;
    //       case "uk":
    //         return <li>Adrian: <a href="mailto:ambassador@sunshine-action.org" class="text-white">ambassador@sunshine-action.org</a></li>;
    //         break;
    //       case "us":
    //         return <li>Adrian: <a href="mailto:ambassador@sunshine-action.org" class="text-white">ambassador@sunshine-action.org</a></li>;
    //         break;
    //     }
    //   }
    return (
        <div className="homepageinfo" style={{ background: 'rgb(82,97,147' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>

                    <div className="col-md-8">
                        <div className="container">
                            <br />
                            <br />
                            <br />
                            <div id="ourstory" className="p-4 text-dark rounded-3">
                                <h1><strong>Volunteer with us!</strong></h1> </div>


                            <div className="row">
                                <div>
                                    <br />
                                    <p>Sunshine Action is always looking for new people to get involved! One of the ways you can help is by volunteering at one of our events. Follow our social media accounts or look through the calendar below to find out when the next event is happening near you. </p>
                                    
                                    <div class="calendar-container">
                                        <iframe
                                            src="https://embed.styledcalendar.com/#xzEKIxtp5WEa4FcLug71" 
                                            title="Styled Calendar" 
                                            class="styled-calendar-container" 
                                            style={{ width: '100%', border: 'none'}} 
                                            data-cy="calendar-embed-iframe">
                                        </iframe>
                                        <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                                    </div>

                                    <h3><b>What does being a volunteer involve?  </b></h3>

                                    <p>Most of our upcoming events will focus on food poverty
                                        relief for homeless people and low-income families. These events
                                        require lots of volunteers to assemble, pack and distribute our food bags.
                                        For each event you will be needed for a few hours over one or two consecutive days.  </p>

                                    <br />

                                    <p>We are keen to encourage long-term commitment amongst
                                        volunteers as our goal is to help people on a regular
                                        basis. Taking part in our events is great fun as you
                                        get to meet lots of other like-minded volunteers whilst
                                        helping the most vulnerable in society.</p>
                                    <br />

                                    <p>We also run international volunteering tours and overseas
                                        programs. In the past we have typically visited around 3-5
                                        countries per year. These trips allow us to carry out a local
                                        assessment in target areas to understand the situation on
                                        the ground so that we can then provide to the groups in need.
                                        These trips are great opportunities to provide food and material
                                        support to the people around the world who really need it most! </p>
                                    <br />

                                    <p>If you are interested in becoming a volunteer with us, please email </p>
                                    <p>HongKong:</p>
                                    <ul>
                                        <li>Sunny: <a href="mailto:sunshine@sunshine-action.org" class="text-white">sunshine@sunshine-action.org</a> </li>
                                    </ul>
                                    <p>Others:</p>
                                    <ul>
                                        <li>Adrian: <a href="mailto:ambassador@sunshine-action.org" class="text-white">ambassador@sunshine-action.org</a></li>
                                    </ul>
                                    <br></br>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-md-1'></div>

                </div>

            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"> </script>


        </div>


    )
}

export default VoluntaryPage;



