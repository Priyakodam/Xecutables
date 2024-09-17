import React, { useState, useEffect } from 'react';
import {  useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './About.css'; // For custom styling
import image1 from './Images/aboutus-8.jpg';
import image4 from './Images/aboutus-4.jpg';
import image5 from './Images/aboutus-9.webp';
import image6 from './Images/aboutus-10.jpeg';
import image7 from './Images/aboutus-16.jpeg';
import image8 from './Images/aboutus-12.webp';
import image9 from './Images/aboutus-13.webp';

const About = () => {
 

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Optional: Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.3 } // Adjust threshold as needed (0.3 means 30% of the element is visible)
    );

    const elements = sectionRef.current.querySelectorAll('.sec-4-grid-item');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect(); // Clean up observer
  }, []);

  return (
    <div>
      {/* <h1>About</h1>
      <p>This is the about page. Keep scrolling down to see the up arrow and the content below.</p> */}


      <section className="sec1-banner">
        <img src={image1} alt="Banner" className="sec1-banner-image" />
        <div className="sec1-banner-text">
          <h1 className='sec1-heading'>Welcome to Our Company</h1>
          <strong> <p className='sec1-parah'>Providing futuristic business solutions for a smarter tomorrow.</p></strong>
        </div>
      </section>

      
      <section className="sec-2-container">
     
        <div className="sec-2-text-section">
          <strong >To provide crisp and smart business solutions for a better tomorrow.</strong>
        </div>
       
       
        <div className="sec-2-image-section">
          <img src={image4} alt="Business Solutions" />
        </div>
      

      </section>





      <section className="sec-3-cards-container">
        <div className="sec-3-card mission-card">
          <h1 className='about-mis'>Mission</h1>
          <p>
            To create unimaginable, futuristic and scalable solutions and to take them worldwide.
            We aim to integrate complexity with simplicity into a piece of art. It will be a wonder for our clients to witness them as we create unimaginable and practical solutions.
          </p>
        </div>
        <div className="sec-3-card vision-card">
          <h1 className='about-vis'>Vision</h1>
          <p>
            To innovate solutions that go above and beyond the clients’ expectations and to provide them with end-to-end solutions. We strive to shape dreams into reality.
            The process of developing the solutions is like composing a song or narrating a story. The sole aim is to create value and be able to bring a smile to our clients.

          </p>
        </div>
      </section>




      <section className="sec-4-mission-container"  ref={sectionRef}>
 

        <div className="mission-heading">
          <h1>Our Mission</h1>
          <p>
            We aim to integrate complexity with simplicity into a piece of art. It
            will be a wonder for our clients to witness them as we create
            unimaginable and practical solutions.
          </p>
        </div>

        <div className="sec-4-grid-container">
       

          <div className="sec-4-grid-item">
            <img src={image5} alt="Image 1" />
            <div className="sec-4-grid-text">
              <p>Understand the client’s needs with an open mind and be a part of striking conversation to create intriguing and apt solutions.</p>
              
            </div>
          </div>
       
          <div className="sec-4-grid-item">
            <img src={image6} alt="Image 2" />
            <div className="sec-4-grid-text">
              <p>The process of developing the solutions is like composing a song or narrating a story. The sole aim is to create value and be able to bring a smile to our clients.</p>
            
            </div>
          </div>
   
          
          <div className="sec-4-grid-item">
            <img src={image7} alt="Image 3" style={{height:'214px'}}/>
            <div className="sec-4-grid-text">
              <p>Be accepting and open to receive feedback and strive to constantly retrospect and improve the existing processes for a better future.</p>
            
            </div>
          </div>
        
          <div className="sec-4-grid-item">
            <img src={image8} alt="Image 4" />
            <div className="sec-4-grid-text">
              <p>Thinking the unimaginable and creating next-level solutions are our core skills that set us apart. Executing the impossible is in the DNA of Xecutables.</p>
              
            </div>
          </div>
        

        </div>
      </section>




      {/* <section className="sec-5-Progress-container">
        <div className="row mb-4">
          <div className="col-md-6">
            <h2>We are habituated to creating smart, capable and reliable solutions.</h2>
            <p>
              We assess the client’s requirement and deliver custom solutions. We innovate and understand that
              our valuable ideas are the canvas of dreams that we aim to bring to life.
            </p>
          </div>
          <div className="col-md-6">
            <img src={image9} alt="Smart Solutions" className="img-fluid" />
          </div>
        </div>
        <div className="coloumn">
          <div className="col-md-3">
            <h6>Success Index</h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                100%
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h6>In Time Solution</h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: '99%' }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
                99%
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h6>First Time Right Solutions</h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                95%
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h6>Accuracy</h6>
            <div className="progress">
              <div className="progress-bar  progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                95%
              </div>
            </div>
          </div>
        </div>
      </section>
 */}


<div className="container sec-5 my-5">
      <div className="row main-row">
        {/* First Section */}
        {/* <div className="col-md-4"> */}
        <div className="col-lg-4 col-md-6 col-sm-12 ">

          <div className="content-section">
            <h2>We are habituated to creating smart, capable and reliable solutions.</h2>
            <p>
              We assess the client’s requirement and deliver custom solutions. We innovate and understand that our
              valuable ideas are the canvas of dreams that we aim to bring to life.
            </p>
          </div>
        </div>

        {/* Second Section */}
        {/* <div className="col-md-4 text-center"> */}
        <div className="col-lg-4 col-md-6 col-sm-12">

          <div className="image-section">
            <img src={image9} alt="Smart Solutions" className="img-fluid" style={{height:'240px'}} />
          </div>
        </div>

        {/* Third Section */}
        {/* <div className="col-md-4"> */}
        <div className="col-lg-4 col-md-6 col-sm-12 main-progress">

          <div className="progress-section progress-section-1 ">
            <h6>Success Index</h6>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                role="progressbar"
                style={{ width: '100%' }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                100%
              </div>
            </div>
            <h6>In Time Solution</h6>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                style={{ width: '99%' }}
                aria-valuenow="99"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                99%
              </div>
            </div>
            <h6>First Time Right Solutions</h6>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                role="progressbar"
                style={{ width: '95%' }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                95%
              </div>
            </div>
            <h6>Accuracy</h6>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                role="progressbar"
                style={{ width: '95%' }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                95%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      <section className="container sec-6-keypoints-container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="keypoint card shadow-sm p-4">
              <h2>01 Work with Confidence</h2>
              <p>We promise what we know we can deliver and we deliver what we had promised. This confidence comes from our reliable, integrated work processes and practical and in-time solutions.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="keypoint card shadow-sm p-4 " >
              <h2>02 Ensure Success</h2>
              <p className='key-point-2'>We believe that capabilities are proven when the promises are delivered in time. When reliable, practical and in-time solutions are delivered as a habit, success is guaranteed.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="keypoint card shadow-sm p-4">
              <h2>03 Extra Mile</h2>
              <p>Thinking the unimaginable and creating next-level solutions are our core skills that set us apart. Executing the impossible is in the DNA of Xecutables.  Our business mantra is to be open to feedback.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="keypoint card shadow-sm p-4">
              <h2>04 Lend an Ear</h2>
              <p>Feedback helps us retrospect, evolve and improve for the better. Our business mantra is to be open to feedback. We believe that we can excel more by accepting feedback in its truest form.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add more content to enable scrolling */}
      <div style={{ height: 'auto' }}></div>

     
    </div>
  );
};

export default About;
