import React from 'react';
import '../../App.css';
import '../Project.css';
import DryHeader from '../DryHeader';
import Footer from '../Footer';
import '../Reports.css';

function BigHeader(props) {
    return (<div className="p-4 text-dark rounded-3 bigHeader"><h1 className="mb-0" style={{ fontWeight: 'bold' }}>{props.text}</h1></div>)
}
function SmallHeader(props) {
    return (<><br /><br /><p className="smallHeader"><u>{props.text}</u></p></>)
}
function ImageComp(props) {
    return (<div className="imageComp my-5 d-flex justify-content-center w-100"><img className="mx-auto" src={"images/" + props.src} /></div>)
}
export default reportsPage;

function reportsPage() {
    return (
        <>
            <DryHeader name="Performance Reports" />
            <div className="projectBanner" style={{ background: 'rgb(82,97,147' }}>
                <div className="container" id="BEGINREADHERE">
                    <a href='../PerformanceGeneral.js' target="_blank"><BigHeader text="General" /></a>
                    <a href='../Performance23.js' target="_blank"><BigHeader text="2023" /></a>
                    <a href='../Performance22.js' target="_blank"><BigHeader text="2022" /></a>
                    <a href='../Performance21.js' target="_blank"><BigHeader text="2021" /></a>
                    <a href='../Performance20.js' target="_blank"><BigHeader text="2020" /></a>
                </div>
            </div>
            <Footer />
        </>
    );
};