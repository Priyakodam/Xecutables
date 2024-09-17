import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Product.css';
import productbanner from './ProductImages/probanimg2.png';
import productsideimg from './ProductImages/productsideimg1.jpeg';
import productsideimg1 from './ProductImages/productsideimg2.jpeg';
import mobilecard from './ProductImages/Mobile card management.png';
import Parking from './ProductImages/Parking management.png';
import Lift from './ProductImages/Lift management.png';
import productsser from './ProductImages/probimg.avif';
import Education from './ProductImages/Education.webp';

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

      <div className="container">
       
          <div className="image-container">
            <img
              src={productsideimg}
              alt="Account Opening in Financial Services"
              className="productresponsive-image"
            />
          </div>
       
     
          <div className="text-container">
            <h1>Employee Management</h1>
            <p>
              The management of employees’ physical identity and access is crucial for any organisation’s safety. The employee management helps with all the major areas including card readers, biometrics, video surveillance, etc. All the major functions are integrated in a single platform.
            </p>


          </div>
     
      </div>


      <section className="product-section">
        <div className="product-container">
         
            <div className="product-content">
              <h2>Visitor Management</h2>

              <p>
                Nebula’s visitor management system is a critical for an organisation as it automates the lifecycle of visitors in any company. It is capable of pre-registering the potential visitors, background checks, security checks, access authorization, check-in/ check-out and centralized reporting.
              </p>


            </div>
         
        
            <div className="product1-image">
              <img src={productsideimg1} alt="Agency Story" />
            </div>
        
        </div>
      </section>

      <div className="prostats-section">
       
          <div className="stats-container">
            <div className="productstat-card">
              <i className="fas fa-users"></i>
              <img src={mobilecard} alt="engbanner" style={{ width: '25%' }} />
              <h2>Mobile card management</h2>
              <p>Integrating mobile card provision system which can be used by employees, visitors and contractors to download their credentials into their mobiles.</p>
            </div>
            <div className="productstat-card">
              <i className="fas fa-check-circle"></i>
              <img src={Lift} alt="engbanner" style={{ width: '25%' }} />
              <h2>Lift management</h2>
              <p>Touchless solutions to make lifts in the workplace secure by deploy access card usage in the lifts.</p>
            </div>
            <div className="productstat-card">
              <i className="fas fa-shield-alt"></i>
              <img src={Parking} alt="engbanner" style={{ width: '25%' }} />
              <h2>Parking management</h2>
              <p>A reimagined parking management can help track vehicles by name place and make the visitor check-in process automated.</p>
            </div>
          </div>
    
      </div>

      <div className='last-section-product'>
   
          <div className="productleft-section">
            <img className='product-img' src={productsser} alt="engbanner" />
          </div>
  


       
          <div className="productright-section">
            <h2>Nebula integrates various facets in an organisation into one platform including</h2>
            <p>
              Desk Booking system.
            </p>
            <p>
              Access Card inventory management..
            </p>
            <p>
              Contractor management and external registration portal.
            </p>
            <p>
              Tenant management system.
            </p>


          </div>
        
      </div>


      <div className='text-center productbutton-section'>
        <button className='custom-button' onClick={handleReadMore}>READ MORE</button>
      </div>

    </div>
  );
};

export default Product;
