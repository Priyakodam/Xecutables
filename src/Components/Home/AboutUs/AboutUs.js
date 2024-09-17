import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import img from "../Images/img1.jpeg"; // Replace this with your image import
import './AboutUs.css'; // CSS for styling

function AboutUs() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/about');  // Navigate to /about route
  };

  return (
    <section className="about-us-section">
      <div className="about-us-container" >
        
        <div className="about-us-content  fade-in-right">
          <h2>About</h2>
          <p>Check out our company story and work process</p>
          <p>
            Xecutables is a company dedicated to create business solutions that are practical,
            scalable and reliable. We have created a unique platform to integrate numerous 
            critical services at one place. With Artificial Intelligence (AI) as a critical 
            layer, business-specific solutions are created and deployed. They help in improving
            the efficiency of the processes that are critical to the business.
          </p>
          <button className="about-us-button" onClick={handleNavigation}>
            Explore More
          </button>
        </div>
        
        <div className="about-us-image fade-in-left">
          <img src={img} alt="Agency Story" />
        </div>
        
      </div>
    </section>
  );
}

export default AboutUs;
