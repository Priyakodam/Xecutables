import React from 'react';
import engbanner from "./images/engbanner2.png";
import proban from "./images/probanner.jpg";
import proimg from "./images/proimg1.jpg";
import proimg1 from "./images/proimg2.jpg";
import proimg2 from "./images/proimg3.jpg";
import picon from "./images/picon1.png";
import picon1 from "./images/picon2.png";
import picon2 from "./images/picon3.png";
import proimg4 from "./images/proimg4.jpg";
import './EngineeringService.css';

import './ProfessionalService.css';

function ProfessionalServices() {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <img className='pservicebanimg' src={proban} alt="engbanner"/>
      <h1 className='professionalheading'>
      Professional Services
      </h1>
      <div className='maindiv'>
        
          <div className="container-pro">
            <h3>Deployment Consulting</h3>
            <div className="links">
              <a href="#">Building Access &gt;</a>
              <br />
              <a href="#">IT Access &gt;</a>
            </div>
            <div className="divider"></div>
            <p>
            We consult the business during the creation and deployment of the strategies. Clear strategic intent is used to deliver the strategy. An actionable and complete goal cascade is ensured with the creation of possibilities to retrospect and improve the process.
            </p>
            <div className="content">
              <img src={proimg} alt="engbanner" style={{ width: '100%' }} />
            </div>
          </div>
       

          <div className="container-pro">
            <h3>Data migration</h3>
            <div className="links">
              <a href="#">Building Access &gt;</a>
              <br />
              <a href="#">IT Access &gt;</a>
            </div>
            <div className="divider"></div>
            <p>
            We develop devise a custom plan to migrate a company's data from external systems into a Product suite. Based on the number of external systems involved, the eco-space is then prepared for the testing of user experience or production deployment.
            </p>
            <div className="content">
              <img src={proimg1} alt="engbanner" style={{ width: '100%' }} />
            </div>
          </div>
       

      
          <div className="container-pro">
            <h3>Unique Business Solutions</h3>
            <div className="links">
              <a href="#">Building Access &gt;</a>
              <br />
              <a href="#">IT Access &gt;</a>
            </div>
            <div className="divider"></div>
            <p>
            We develop devise a custom plan to migrate a company’s data from external systems into a Product suite. Based on the number of external systems involved, the eco-space is then prepared for the testing of user experience or production deployment.
            </p>
            <div className="content">
              <img src={proimg2} alt="engbanner" style={{ width: '100%' }} />
            </div>
          </div>
     
      </div>

      {/* New section to replicate the image design */}
     
      <div className="stats-section">
   
        <div className="stats-container">
          <div className="stat-card">
            <i className="fas fa-users"></i>
            <img src={picon} alt="engbanner" style={{ width: '25%' }} />
            <h2>Take over from the presales</h2>
            <p>The project is undertaken and the scope of the software deployment is analyzed. The gap between the existing and the level required is ascertained and that defines the level of customization required.</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-check-circle"></i>
            <img src={picon1} alt="engbanner" style={{ width: '25%' }} />
            <h2>Devise a project plan</h2>
            <p>The scope of the project is determined to manage the complexity of the external systems. A custom solution is devised and then the project plan is put into action. The external systems are integrated in sync with the client’s requirements.</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-shield-alt"></i>
            <img src={picon2} alt="engbanner" style={{ width: '25%' }} />
            <h2>Post-production deployment monitoring</h2>
            <p>Assessment of the post-production environment ensures a smooth customer experience and measure the effectiveness of the application. After satisfactory findings, the project is handed over to the support team.</p>
          </div>
        </div>
      
      </div>
     

      {/* <div className="container1"> */}
  
      <div className="left-section">
      <img className='proimban' src={proimg4} alt="engbanner"  />
      </div>
 

    
      <div className="right-section">
        <h2>Professional services can help a business to</h2>
        <p>
        Get consultation on the system integration’s scope and process.
        </p>
        <p>
        Get consultations for business purposes and then ascertain the customization as per the requirements.
        </p>
        <p>
        Get started with the data migration process. This process allows the data to be efficiently shifted from the external system to the company’s product suite.
        </p>
        <p>
        Avail tailor-made workflow management systems.
        </p>
        <p>
        Receive customized configuration in sync with the business needs.
        </p>
        
       
      </div>
    
    {/* </div> */}

    </div>
  );
}

export default ProfessionalServices;
