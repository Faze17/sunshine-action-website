import React from 'react';
import '../../App.css';
import '../Project.css';
import DryHeader from '../DryHeader';
import Footer from '../Footer';
import '../Reports.css';
import ReportGeneral from '../../documents/reportGeneral.pdf';
import Report2023 from '../../documents/report2023.pdf';
import Report2022 from '../../documents/report2022.pdf';
import Report2021 from '../../documents/report2021.pdf';
import Report2020 from '../../documents/report2020.pdf';

function BigHeader(props) {
    return (<div className="p-4 text-dark rounded-3 bigHeader"><h1 className="mb-0" style={{ fontWeight: 'bold' }}>{props.text}</h1></div>)
}
function SmallHeader(props) {
    return (<><br /><br /><p className="smallHeader"><u>{props.text}</u></p></>)
}
function ImageComp(props) {
    return (<div className="imageComp my-5 d-flex justify-content-center w-100"><img className="mx-auto" src={"images/" + props.src} /></div>)
}

function reportsPage() {
    return (
        <>
            <DryHeader name="Performance Reports" />
            <div className="projectBanner" style={{ background: 'rgb(82,97,147' }}>
                <div className="container" id="BEGINREADHERE">
                    <a href={ReportGeneral} target="_blank"><BigHeader text="General" /></a>
                    <a href={Report2023} target="_blank"><BigHeader text="2023" /></a>
                    <a href={Report2022} target="_blank"><BigHeader text="2022" /></a>
                    <a href={Report2021} target="_blank"><BigHeader text="2021" /></a>
                    <a href={Report2020} target="_blank"><BigHeader text="2020" /></a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default reportsPage;