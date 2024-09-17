import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import img from "../Images/img3.jpeg";
import './Products.css'; // Import the CSS file

function Products() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/product');  // Navigate to /about route
  };

  return (
    <div className="container">
      <div className="image-container fade-in-right">
        <img
          src={img}
          alt="Account Opening in Financial Services"
          className="responsive-image"
        />
      </div>
     
     
      <div className="text-container fade-in-left">
        <h1>Product</h1>
        <p>
        Nebula is a product that integrates various facets of physical access and
         management in an organisation. It creates a seamless platform to access 
         all the major domains like visitor management, parking management, employee
          management, mobile card management, etc.
        </p>
       
        <button className="product-button" onClick={handleNavigation}>
        Explore More
            </button>
      </div>
     
    </div>
  );
}

export default Products;
