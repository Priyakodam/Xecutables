import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Product.css';
import productbanner from './ProductImages/productbanner.jpg';
import product1 from './ProductImages/product1.png'; 
import Mobile from './ProductImages/Mobile card management.png';
import Parking from './ProductImages/Parking management.png';
import Lift from './ProductImages/Lift management.png';
import productsser from './ProductImages/productsser.png';

const Product = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  // Function to handle the 'Read More' button click
  const handleReadMore = () => {
    navigate('/productdetail'); // Navigate to the ProductDetail page
  };

  return (
    <div>
      <div className="product-banner">
        <img src={productbanner} alt="Banner" className="productbanner-image" />
        <div className="productbanner-text">
          <h1>Nebula</h1>  
        </div>
      </div>

      <div className="product-section">
        <img src={product1} alt="Additional" className="product-image" />
      </div>
      <div className="content-section">
        <div className="column">
          <h2>Employee Management</h2>
          <p>
            The management of employees’ physical identity and access is crucial for any organisation’s safety. The employee management helps with all the major areas including card readers, biometrics, video surveillance, etc. All the major functions are integrated in a single platform.
          </p>
        </div>
        <div className="column">
          <h2>Visitor Management</h2>
          <p>
            Nebula’s visitor management system is critical for an organisation as it automates the lifecycle of visitors in any company. It is capable of pre-registering the potential visitors, background checks, security checks, access authorization, check-in/ check-out, and centralized reporting.
          </p>
        </div>
      </div>
      <div className='productmanagement-section'>
        <div className="productmanagement-item">
          <img src={Mobile} alt="Mobile Card Management" />
          <h3>Mobile Card Management</h3>
          <p>Integrating mobile card provision system which can be used by employees, visitors and contractors to download their credentials into their mobiles.</p>
        </div>
        <div className="productmanagement-item">
          <img src={Lift} alt="Lift Management" />
          <h3>Lift Management</h3>
          <p> Touchless solutions to make lifts in the workplace secure by deploy access card usage in the lifts.</p>
        </div>
        <div className="productmanagement-item">
          <img src={Parking} alt="Parking Management" />
          <h3>Parking Management</h3>
          <p>A reimagined parking management can help track vehicles by name place and make the visitor check-in process automated.</p>
        </div>
      </div>

      <div className='productlast-section row'>
        <div className='col-md-1'> </div>
        <div className='col-md-5'>
          <img src={productsser} alt="Additional" className="productsser-image" />
        </div>
        <div className='col-md-5'>
          <div className="product-info">
            <h3>Nebula integrates various facets in an organisation into one platform including</h3>
            <ul className='product-features'>
              <li>Desk Booking system.</li>
              <li>Access Card inventory management.</li>
              <li>Contractor management and external registration portal.</li>
              <li>Tenant management system.</li>
            </ul>
          </div>
        </div>
        <div className='col-md-1'> </div>
      </div>

      <div className='text-center productbutton-section'>
        <button className='custom-button' onClick={handleReadMore}>READ MORE</button>
      </div>

      

     

      

    </div>
  );
};

export default Product;
