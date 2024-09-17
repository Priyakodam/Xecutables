import React from 'react';
import './ServiceAndMaintenance.css'; // Importing a separate CSS file for styling



const ServiceAndMaintenance = () => {
  return (
    <div>
      <div className="service-maintenance-banner">
        {/* <p className="ser-banner-text">Service And Maintenance</p> */}
        <span className="ser-banner-text">Service And Maintenance</span>
      </div>
   

      <div className="service-maintenance-container">
        <h1 className="service-heading">Choose Your Plan</h1>

        <div className="plans-container">
         
            <div className="plan silver">
              <h2>Silver</h2>
              <p>Optimized account and links to raise support ticket for bugs and service requests.</p>
              <ul style={{ marginBottom: '110px' }}>
                <li>Hotfixes and Product fixes</li>
                <li>Custom upgrades as per contracts</li>
              </ul>
              <button style={{ borderRadius: '50px' }} className="buy-btn silver-btn">Buy Now</button>
            </div>
          

            <div className="plan gold recommended">
              <p><span className="recommended-badge">Recommended</span></p>
              <h2>Gold </h2>
              <p>Priority support and extended office-time services with contractual SLAs.</p>
              <ul>
                <li>Hotfixes and Product fixes</li>
                <li>Office-time support and live consults</li>
                <li>Data fixes and service requests</li>
                <li>Status tracking and deployment support</li>
              </ul>
              <button style={{ borderRadius: '50px' }} className="buy-btn gold-btn">Buy Now</button>
            </div>
         

            <div className="plan platinum">
              <h2>Platinum</h2>
              <p>Premium support with dedicated individual assistance and hotline services.</p>
              <ul>
                <li>Hotfixes and Product fixes</li>
                <li>Office-time support and live consults</li>
                <li>Data fixes with contractual SLAs</li>
                <li>Status tracking and deployment support</li>
                <li>Free upgrades up to 1 year</li>
              </ul>
              <button style={{ borderRadius: '50px' }} className="buy-btn platinum-btn">Buy Now</button>
            </div>
         

        </div>
      </div>
    </div>

  );
};

export default ServiceAndMaintenance;
