import React from 'react';
import '../../App.css';
import './Project.css';

import HeroComp from '../HeroComp';
import Footer from '../Footer';

export default CHD;

function CHD() { 
    return (
      <>
        <HeroComp name = "CONGENITAL HEART DISEASE" />
        
        <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
            <div className="container">
                <BigHeader text = "Project Info" />
                <li><b>Sunshine Action raises money to give children with congenital heart defects (CHD) access to lifesaving surgery and medication.</b></li>
                <li>To date, 60 surgeries have been completed thanks to funding from Sunshine Action. Donors can personally visit the patients they donate to, both before and after the surgery.</li>
                <li>Recipients of surgeries are often those who could not afford surgery without help.</li>
                <li><b>In 2022, Sunshine Action is struggling to financially sustain all programs, including the CHD Program. Your contribution would mean a lot to us. <a href="/donate">Learn how to donate here.</a></b></li>
                <ImageComp src="CHD-1.jpg" alt="CHD 1" />
                <BigHeader text = "What is CHD?" />
                <p>A congenital heart defect (CHD) is a defect in the structure of the heart and great vessels which is present at birth. The term CHD refers to many types of defects, most of which either obstruct blood flow in the heart or vessels near it, or cause blood to flow through the heart in an abnormal pattern. Other defects, such as long QT syndrome, affect the heart's rhythm. Heart defects are among the most common birth defects and are the leading cause of birth defect-related deaths. Approximately 9 people in 1000 are born with a congenital heart defect. Some complex congenital heart defects require medication or surgery. In China, as many as 8/1000 people are born with CHD, meaning that more than 10 million Chinese people are affected by these conditions.</p>
                <BigHeader text = "Patient Stories" />
                <ImageComp src="mu-lar-kway.jpg" alt="Mar Lu Kway" float="left" />
                <p>Mu Lar Kway was a 14-year-old girl when she came to Sunshine Action with a congenital cardiac disease known as Tetralogy of Fallot (TOF). TOF accounts for about 10% of congenital heart diseases and is characterized by a ventricular septal defect, or a hole in the muscle wall that separates the two lower chambers of the heart. This hole allows oxygen-rich blood to mix with oxygen-poor blood, and results in a decreased efficiency of the heart. The blood picks up less oxygen from the lungs, and oxygen-poor blood circulates through the body.</p>
                <p>Prior to her surgery, Mu Lar Kway lived in Burma with her brother, parents, and niece. She attended grade 5 at her local school. She enjoyed going to school but often had to miss class because of extreme fatigue. Due to her condition, the simplest tasks, including the 20 minute walk to school, exhausted her. Because her blood supply was deficient in oxygen, her skin, lips and fingernails had a blue tint. Her condition also stunted her growth, giving her the appearance of looking much younger. Her parents were paddy farmers earning around USD $200 a month. After education and food costs her family was unable to put away money for savings and could not afford the treatment that she needed for her condition. Fortunately, she received surgery thanks to funding from Sunshine Action. </p>
                <ImageComp src="kyaw-linn-niang.jpg" alt="Kyaw Linn Naing" float="left" />
                <p>Kyaw Linn Naing was 15 years old when he was referred to Sunshine Action with a congenital heart disease known as Rheumatic Heart Disease (RHD). RHD is the most common acquired heart disease in children in many countries of the world, especially in developing countries such as Burma. Kyaw Linn Naing was first diagnosed at 11-years-old and experienced heart palpitations, difficulty breathing and cyanosis. He also could not walk for longer than 10 minutes at a time. Kyaw Linn Naing lives with his parents, siblings, and grandmother in Burma. His parents were vegetable growers and stated that Kway Linn Naing's medical treatment is very expensive in Burma and costs more than they could ever afford.</p>
                <p>Under the care of Burma Children Medical Fund (BCMF), an organization which helps Burmese refugees in Thailand, Kyaw Linn Naing received lifesaving surgery. He has since made a full recovery. His family is very grateful to BCMF and his doctors who helped him. When he is older, he would like to be a doctor to give others the gift of good health.</p>
                <BigHeader text = "Walkathon" />
                <p>In past years Sunshine Action has organized the China Walkathon to DuLongJiang, a major walkathon which raises money for children with congenital heart disease in China. The Walkathon location is along the Dulong River, located in the northwest section of Yunnan Nujiang Lisu Autonomous Prefecture. The Dulong River Valley is inhabited by the Dulong people, one of the smallest ethnic groups in China. Many children living in the Dulong River Valley and other sparsely populated areas cannot afford treatment for congenital heart disease, which is why the Walkathon is so important to raise money and awareness for those in need.</p>
                <p>Along with other international efforts, Sunshine Action has paused the Walkathons due to travel restrictions caused by the Covid-19 pandemic.</p>
                <ImageComp src="fortune-bags-3.jpg" alt="Fortune Bags 3" />
            </div>
        </div>       
        <Footer />
      </>
    );
}

function BigHeader(props) {
    return (
        <div className="p-4 text-dark rounded-3 bigHeader"><h1 className = "mb-0">{props.text}</h1></div>
    )
}
function SmallHeader(props) {
    return (
        <><br /><br /><p className = "smallHeader"><u>{props.text}</u></p></>
    )
}
function ImageComp(props) {
    return (
        <div className = "imageComp my-5 d-flex justify-content-center w-100"><img className = "mx-auto" src = {"images/" + props.src} /></div>
    )
}