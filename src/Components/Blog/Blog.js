import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';
import blogbanner from './BlogImages/blogban-1.png';
import Blog1 from './BlogImages/Blog1.png';
import Blog2 from './BlogImages/Blog2.png';
import Assets from './BlogImages/Assets.png'

const Product = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div className="blog-banner">
        <img src={blogbanner} alt="Banner" className="blogbanner-image" />
        <div className="blogbanner-text">
          <span className='blog-head'>Blog</span>
        </div>
      </div>

      <div className="blogcontainer mb-5">
        <div className="background-blogcontainer d-flex align-items-center">
          <div className="blogtext-content">
            <h2 style={{ fontSize: '30px', textAlign: 'center' }}>Access management integration</h2>
            <p className='content-text'>
              With the evolution of software and technology, access management has also evolved to become more secure. Keycards, also known as swipe cards, prox cards, or fobs, are used to grant access through electrically-powered doors. The access may be granted by tapping, swiping, or inserting the card in the slot. This has made the traditional metal key redundant in most spaces.The access may be granted by tapping, swiping, or inserting the card in the slot.
            </p>
            <div className="button-blogcontainer">
            <button className="btn" onClick={() => handleNavigate('/accessmanagementintegration')}>Explore More</button>
            </div>
          </div>
          <img src={Blog2} alt="People working" className="blog-image" />
        </div>

        <div className="background-blogcontainer d-flex align-items-center">
          <img src={Blog1} alt="People working" className="blog-image1" />
          <div className="blogtext-content">
            <h2 style={{ fontSize: '30px', textAlign: 'center' }}>Managing airport security with new age solutions</h2>
            <p>
              Thousands of people walk in and out of the airports every day. This makes airports a critical place to be secured and to reduce any suspicious activities. Maintaining safety at airports requires a lot of systems which have continued to improve in the past. To mitigate the risks, there are processes to manage every step.
            </p>
            <div className="button-blogcontainer">
            <button className="btn" onClick={() => handleNavigate('/managingsolutions')}>Explore More</button>
            </div>
          </div>
        </div>
      </div>


      <div className="blog_container mt-5">
        <div className="blogcard">
          <div className="blogcard-body">
            <div className="row last-text-img">
              <div className="col-md-6 sm-12 leftcard" style={{ textAlign: "justify" }}>
                <h2 style={{ fontSize: '30px', textAlign: 'center' }} className="text-center subheading1">Improve physical access management with mobile lift integration solutions</h2>
                <p style={{ fontSize: '19px'}}>
                  Elevators/lift may seem like the most uncomplicated systems but there’s a lot more to them than what meets the eye. They are tricky and are quite distinct from one another. They have the capability to impact the safety of a facility or a building.
                  New types and levels of safety threats call for advanced safety solutions.The access points of the buildings can be managed by managing the elevators correctly. Appropriate access management system can help ensure smooth flow of people in and out of the building. It will also improve the user experience.
                </p>
                <div className="button-blogcontainer">
                <button className="btn last-btn" onClick={() => handleNavigate('/physicalaccessmanagement')}>Explore More</button>
                </div>



              </div>
              <div className="col-md-6 rightcard">
                <img src={Assets} alt="People working" className="blog-image2" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
