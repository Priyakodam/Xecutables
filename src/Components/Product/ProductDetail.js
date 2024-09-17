import React from 'react'
import productbanner from './ProductImages/probanimg2.png';
import productsser from './ProductImages/probimg.avif';
import './ProductDetails.css';

function ProductDetail() {
  const checklistItems = [
    "Event management check",
    "Unscheduled visit check",
    "Schedule pre-registration process check",
    "Mobile card/ QR Code support check",
    "Host an event check",
    "Track a visitor by their last swipe check",
    "Covid norms check",
    "Temp Card check"
  ];
  return (
    <div>

      <div className="productdetails-banner">
        <img src={productbanner} alt="Banner" className="productdetailstbanner-image" />
        <div className="productdetailstbanner-text">
          <h1>Nebula</h1>
        </div>
      </div>

      <div className='prodetails container' >
        <p>Nebula is revolutionizing the world of physical access and its management in an organization. It is a product which seamlessly integrates various facets of physical access in an organization. Every process can now be managed through Nebula. The efficient integration of all tasks improves overall security and productivity of the workplace.</p>
        <p>Every workplace may have a different set of processes that need to be integrated into a singular platform. Nebula provides a custom solution in sync with the company’s processes.</p>
      </div>
      <div >
        <p className='ptext1'>Here are some of the major access management processes that are catered by Nebula</p>
      </div>

      <h2 className='container proheading'>Employee Management</h2>

      <div className='prodetails container' >
        <p>Nebula’s identity portal creates a seamless and crisp application flow. This allows the employees to manage their physical access profile competently. Access requests can be easily managed for individuals and bulk. Adding or removing access cards becomes hassle-free creating an opportunity to approve access requests to specific areas.</p>
        <p>With the automated system, Nebula’s smart workflow orchestration engine can take actions depending on the previous data.

          For example, if a lost card is swiped, the event will flash an alarm in the system. The video surveillance system will be used to connect the dots and create a report of the incident.</p>
      </div>

      <h2 className='container proheading'>Visitor Management</h2>

      <div className='prodetails container' >
        <p>Visitor Management Solution from Executables allows easy management of places with high volume of visitors. This solution is capable of pre-registering the potential visitors, background checks, security checks, access authorization, check-in/ check-out and centralized reporting. It automates the lifecycle of visitors in any company. It provides a seamless experience to the clients, job applicants or any office guests.</p>
      </div>

      {/* <h2 className='container proheading'>Various checks ensure the integrity of the Visitor Management System</h2> */}

      <div className='productlast-section row'>
        <div className='col-md-1'> </div>
        <div className='col-md-5'>
          <img src={productsser} alt="Additional" className="productsser-image" />
        </div>
        <div className='col-md-5'>
          <div className="product-info">
            <h3>Various checks ensure the integrity of the Visitor Management System</h3>
            <ul className='product-features'>
              <li>Event management check</li>
              <li>Unscheduled visit check</li>
              <li>Schedule pre-registration process check</li>
              <li>Mobile card/ QR Code support check</li>
              <li>Host an event check</li>
              <li>Track a visitor by their last swipe check</li>
              <li>Covid norms check</li>
              <li>Temp Card check</li>
            </ul>
          </div>
        </div>
        <div className='col-md-1'> </div>
      </div>

      <div className='prodetails container' >
        <p>Nebula’s unique visitor management system is automated and can deny access if the regulations/protocols are not followed. It will then raise and alarm to the security admin.</p>
        <p>Live feed can be accessed through the video surveillance system which can help identify alarming situations. This acts as a barrier to prevent any security breaches.</p>
      </div>

      <h2 className='container proheading'>Mobile card management</h2>

      <div className='prodetails container' >
        <p>Employees, contractors and visitors can download their credentials into their mobile phones. Nebula integrates the mobile card provision system with their phones and enables them to be used to access the workplace.</p>
      </div>

      <h2 className='container proheading'>Lift management</h2>

      <div className='prodetails container' >
        <p>A mobile card solution can help secure the workplace lifts. It will ensure that the cards can be used to access specific floors by tapping the card. This is a touch-less solution, to manage the security of the lifts in the premises.</p>
      </div>

      <h2 className='container proheading'>Parking management</h2>

      <div className='prodetails container' >
        <p>The parking management system can track vehicles by name plate and allow the visitors to auto check-in the premises. This automates and secures the process of parking facilities in a workplace.</p>
        <p>The physical security and access management can be seamlessly integrated through Nebula’s platform. The processes will be seen as a whole and have improved functionality.</p>
      </div>

    </div>
  )
}

export default ProductDetail