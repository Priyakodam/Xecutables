import React from 'react';
import './ProfessionalServices.css'; // Assuming you are using a separate CSS file

function ProfessionalServices() {
  return (
    <div className="services-container">
      {/* <h2 className="services-header">
        Global verification. <br />
        <span>Powerful automation.</span>
      </h2> */}
     
        <div className="services-grid">
          <div className="service-card">
            <div className="icon-placeholder">🛠️</div>
            <h3>Engineering Services</h3>
            <p>Innovation through precision engineering drives the world forward.</p>
            <a href="/engineering-services" className="cta-link">Drive growth &rarr;</a>
          </div>

          <div className="service-card">
            <div className="icon-placeholder">🧑‍💼</div>
            <h3>Professional Services</h3>
            <p>Expert guidance, tailored solutions for every challenge.</p>
            <a href="/professional-services" className="cta-link">Meet compliance &rarr;</a>
          </div>

          <div className="service-card">
            <div className="icon-placeholder">🤝</div>
            <h3>Blog</h3>
            <p>Let customers in and keep fraud out with AI-powered automation.</p>
            <a href="/blog" className="cta-link">Prevent fraud &rarr;</a>
          </div>

          <div className="service-card">
            <div className="icon-placeholder">🧑‍🔧</div>
            <h3>Maintenance</h3>
            <p>Increase operational efficiency by orchestrating global workflows.</p>
            <a href="/maintenance" className="cta-link">Lower costs &rarr;</a>
          </div>
        </div>
     
    </div>
  );
}

export default ProfessionalServices;
