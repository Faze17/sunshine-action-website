import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './PerformanceGeneral.css';

function PerformanceGeneral() {
    return (
      <div className="ReportContainer">
        <iframe src='../../documents/reportGeneral.pdf' style={{ width: "100%", height: "1000px" }}></iframe>
        <Footer />
      </div>
    );
  }
  
  export default PerformanceGeneral;