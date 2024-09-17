import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import video1 from "../Images/video1.mp4";
import video2 from "../Images/video2.mp4";
import video3 from "../Images/video3.mp4";
import "./Hero.css"

const Hero = () => {
  const videoRef = useRef(null);

  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
        className="carousel"
        dynamicHeight={true}
        
      >
        {/* Repeat the video in each slide */}
        <div className="video-background-container">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            src={video1}
            className="video-background"
          >
            Your browser does not support the video tag.
          </video>
          <div className="textcontainer">
            <div className="main-text">
              <span className="line1">Innovative Solutions for a Smarter Tomorrow</span>
            </div>
            <div className="sub-text">
              <span className="subline1">Transforming ideas into cutting-edge realities.</span>
            </div>
          </div>
        </div>

        <div className="video-background-container">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            src={video2}
            className="video-background"
          >
            Your browser does not support the video tag.
          </video>
          <div className="textcontainer">
            <div className="main-text">
              <span className="line1">Practical Technologies Shaping the Future</span>
            </div>
            <div className="sub-text">
              <span className="subline1">Bridging innovation with real-world applications.</span>
            </div>
          </div>
        </div>

        <div className="video-background-container">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            src={video3}
            className="video-background"
          >
            Your browser does not support the video tag.
          </video>
          <div className="textcontainer">
            <div className="main-text">
              <span className="line1">Innovative Solutions for a Smarter Tomorrow</span>
            </div>
            <div className="sub-text">
              <span className="subline1">Seamlessly connecting solutions for lasting impact.</span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Hero;
