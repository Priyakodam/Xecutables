import React from 'react'
import img from "../Images/img2.jpeg";
import { useNavigate } from 'react-router-dom';
import './ServiceMaintenance.css';

function ServiceMaintenance() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/engineering-services");  
  };

  return (
    <div className="homecontainer mt-5">
      <div className="background-homecontainer">
        <img src={img} alt="Laptop" className="product-image" />
        <div
          className="text-content bg-white p-5 "
          style={{ textAlign: "justify" }}
        >

          <h1 >service</h1>
          <p>
          Engineering services cover and manage various business processes. 
          These services help provide end-to-end, customised solutions for 
          all the work processes. The business workflow of these processes 
          is then managed to improve the overall efficiency of business operations.
          </p>

          <a href="/products" style={{ textDecoration: 'none' }}>
            <div className="button-homecontainer">
              <button className="btn btn-primary narrow-button" onClick={handleNavigation} style={{ background: "linear-gradient(to bottom right, #007bff, #ff073a)", color: "white" }}>Explore More</button>
            </div>
          </a>


        </div>
      </div>
    </div>
  )
}

export default ServiceMaintenance
