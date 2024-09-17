import React from 'react';
import engbanner from "./images/engbanner2.png";
import engservice1 from "./images/engservice2.jpg";
import engservice2 from "./images/engservice3.jpg";
import engservice3 from "./images/engservice4.jpg";
import icon from "./images/icon1.png";
import icon1 from "./images/icon2.png";
import icon2 from "./images/icon3.png";
import engimg1 from "./images/engimg.png";
import './EngineeringService.css';


function EngineeringService() {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <img className='engbanimg' src={engbanner} alt="engbanner"  />
      <h1 className='engineeringheading'>
        Engineering Service
      </h1>
      <div className='maindiv'>
       
          <div className="container-eng">
            <h3>Business Workflow</h3>
            <div className="links">
              <a href="#">Building Access &gt;</a>
              <br />
              <a href="#">IT Access &gt;</a>
            </div>
            <div className="divider"></div>
            <p>
              It's time to wipe out silos across HR, IT, OT, and physical security and keep identity at the core of your physical access management strategy.
            </p>
            <div className="content">
              <img src={engservice3} alt="engbanner" style={{ width: '100%' }} />
            </div>
          </div>
       

       
          <div className="container-eng">
            <h3>Business Customisation</h3>
            <div className="links">
              <a href="#">Building Access &gt;</a>
              <br />
              <a href="#">IT Access &gt;</a>
            </div>
            <div className="divider"></div>
            <p>
              It's time to wipe out silos across HR, IT, OT, and physical security and keep identity at the core of your physical access management strategy.
            </p>
            <div className="content">
              <img src={engservice1} alt="engbanner" style={{ width: '100%' }} />
            </div>
          </div>
       

        
          <div className="container-eng">
            <h3>Unique Business Solutions</h3>
            <div className="links">
              <a href="#">Building Access &gt;</a>
              <br />
              <a href="#">IT Access &gt;</a>
            </div>
            <div className="divider"></div>
            <p>
              It's time to wipe out silos across HR, IT, OT, and physical security and keep identity at the core of your physical access management strategy.
            </p>
            <div className="content">
              <img src={engservice2} alt="engbanner" style={{ width: '100%' }} />
            </div>
          </div>
       
      </div>

      {/* New section to replicate the image design */}
      <div className="stats-section">
    
        <div className="stats-container">
          <div className="stat-card-eng">
            <i className="fas fa-users"></i>
            <img src={icon} alt="engbanner" style={{ width: '25%' }} />
            <h2>Visitor Management</h2>
            <p>Manage the visitors in the business premises efficiently with Visitor Management. It manages pre-registration, background and security checks, access authorization, check-in/ check-out, etc.</p>
          </div>
          <div className="stat-card-eng">
            <i className="fas fa-check-circle"></i>
            <img src={icon1} alt="engbanner" style={{ width: '25%' }} />
            <h2>Physical Identity and Access Management</h2>
            <p>Safeguard your workplace by ensuring the right people access the right places at the right time. Tailor-made PIAM solutions manage the identity and access of all visitors.</p>
          </div>
          <div className="stat-card-eng">
            <i className="fas fa-shield-alt"></i>
            <img src={icon2} alt="engbanner" style={{ width: '25%' }} />
            <h2>Physical Security and Incident Management</h2>
            <p>Securing a business organisation against physical and cyber threats by integrating physical security and cyber security in a single platform.</p>
          </div>
        </div>
       
      </div>

      {/* <div className="container1"> */}
    
      <div className="left-section-eng">
      <img className='engimban' src={engimg1} alt="engbanner"  />
      </div>
   

    
      <div className="right-section-eng">
        <h2>Engineering services can help a business to</h2>
        <p>
        Easily configure and customize business policies
        </p>
        <p>
        Report critical events with actions taken and outcomes.
        </p>
        <p>
        Act on the workflows and be better equipped for the future.
        </p>
        <p>
        Get notified about the event thresholds.
        </p>
        <p>
        Get application modules tailor-made to the business requirements.
        </p>
        <p>
        Initiate new business modules.
        </p>
       
      </div>
      
    {/* </div> */}

    </div>
  );
}

export default EngineeringService;
