import React, { useState } from 'react';
import img1 from './BlogImages/Assets.png';
import img2 from './BlogImages/Blog1.png';
import img3 from './BlogImages/Blog2.png';

import './ManagingSolutions.css'; // Assuming you're keeping your styles in a separate SCSS file

const ManagingSolutions = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div>
            <div className="managesolution-banner">
                <span style={{ textAlign: 'center' }} className="managesolution-banner-text">Managing airport security with new age solutions</span>
            </div>

            <div className="managesolution-container">
              
                    <div className="managesolution-image-container">
                        <img src={img2} alt="managesolution Management Graphic" className="managesolution-image-under-banner" />
                    </div>
             
                    <div className="managesolution-card">
                        <h2 className="managesolution-card-heading">Managing airport security with new age solutions</h2>
                        <p>Thousands of people walk in and out of the airports every day.</p>
                        <p>This makes airports a critical place to be secured and to reduce any suspicious activities.</p>
                        <p>The application then notifies these events through emails and dashboards.</p>
                        <p>Nebula’s application has a built-in video streaming framework.</p>
                    </div>
            
            </div>

            <div className="managesolution-text-container">
                {/* Display only the first three paragraphs initially */}
                <p><span style={{ fontWeight: 'bold', fontSize: '22px', color:'black' }}>1.&nbsp;</span>
                    Thousands of people walk in and out of the airports every day. This makes airports a critical place to be secured and to reduce any suspicious activities.
                    Maintaining safety at airports requires a lot of systems which have continued to improve in the past. To mitigate the risks, there are processes to manage every step. The passengers and their baggage undergo strict monitoring and screening to ensure that no suspicious goods arrive at the airport. Even with the strict monitoring and screening processes in place, mishaps happen. This brings to light that the airports are vulnerable and prone to threats.
                    With a robust growth of the aviation industry, the air travel and traffic are continually on the rise. The passengers expect a seamless journey and the airport authorities wish to keep the premises secure. This has increased the need for improved communications, automation, and safety procedures.
                </p>
                <p><span style={{ fontWeight: 'bold', fontSize: '22px', color:'black' }}>2.&nbsp;</span>
                    Various systems have been developed and deployed to screen the passengers. From behavioral profiling to ticket-purchase data analysis, every effort was proven ineffective.
                </p>
                <p><span style={{ fontWeight: 'bold', fontSize: '22px', color:'black' }}>3.&nbsp;</span>
                    However, one aspect has always been a grave concern for the airport authorities-- high-risk fliers. This is assessed after checking their biographical data against terrorist or criminal databases. These high-risk individuals include suspected or known terrorists, smugglers, criminals, and others. The “no-fly” lists were also created to prevent suspicious individuals from boarding aircrafts.
                </p>

                {/* Conditionally render additional paragraphs based on the state */}
                {showMore && (
                    <>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px', color:'black' }}>4.&nbsp;</span>
                            Voice alarm, intelligent video, and fire solutions help airports master the security, safety, and communication challenges. However, due to the sheer volume of people constantly on the move, keeping airports secure is a daunting task.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px', color:'black' }}>5.&nbsp;</span>
                            Physical checkpoints and manual screening were the only methods of managing this earlier. However, everything is evolving and so is the security process. A lot of efforts have been made to prevent the high-risk fliers from boarding an aircraft.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px', color:'black' }}>6.&nbsp;</span>
                            Nebula is an innovative solution working in this direction. It is a Physical Identity and Access Management (PIAM) solution with an ability to integrate various Physical Access Control Systems (PACS).
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px', color:'black' }}>7.&nbsp;</span>
                            It solves the major identity management challenges faced by the organizations, including onboarding and badging, access management, visitor management, and compliance. It helps the organization manage the identities of the visitors and their access to the physical security systems. This system is critical in the airport domain where it is used to ensure that the individuals on the no-fly list are unable to board an aircraft.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px', color:'black' }}>8.&nbsp;</span>
                            Nebula has a proprietary workflow “Object of Interest” that helps the airports in implementing an active watchlist feature. The administrators can freely manage identity profiles with Nebula’s application. They can look up a profile and then have the capacity to alter, add, or delete access to a certain card.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px', color:'black' }}>9.&nbsp;</span>
                            Nebula’s application has a built-in video streaming framework. It takes various categories of watchlist images and trains its streaming layer. It integrates various video surveillance systems via live and/or recorded streams.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px', color:'black' }}>10.&nbsp;</span>
                            After this integration process, the watchlist images are identified from these streams by the application and an event is raised. The application then notifies these events through emails and dashboards.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px', color:'black' }}>11.&nbsp;</span>
                            Nebula’s machine learning (ML) and artificial intelligence (AI) engine empowers the clients with dashboards with which they can visualize and take the right decisions. It helps in improving the efficiency of the processes like identifying from reference images and learning from video streams.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px', color:'black' }}>12.&nbsp;</span>
                            It also reflects with workflows action of raising alarms in the application dashboard for site map(s). It even allows the users to color-code the alarms and watch the video of the event during the alarm period. The application and the workflow process can be crafted as per the custom business requirements.
                            Nebula’s proprietary workflow provides a systematic and new-age technology to effectively secure the airports from high-risk fliers. It also helps manage incidents by allowing quick response to potential threats and by monitoring critical areas.
                        </p>
                    </>
                )}

                {/* Button to toggle additional paragraphs */}
                {!showMore ? (
                    <button onClick={toggleShowMore} className="read-more-btn">Read More</button>
                ) : (
                    <button onClick={toggleShowMore} className="read-more-btn">Show Less</button>
                )}
            </div>

            <div>
                <p className='related-posts'>-------------Related Posts-------------</p>
                <div className="managesolution-image-row-container">
                    <div className="managesolution-image-item-container">
                        <img src={img1} alt="Image 1" className="managesolution-image-item" />
                        <h3>Access management integration</h3>
                        <p>With the evolution of software and tech</p>
                    </div>
                    <div className="managesolution-image-item-container">
                        <img src={img2} alt="Image 2" className="managesolution-image-item" />
                        <h3>Managing airport security with new age solutions</h3>
                        <p>Thousands of people walk in and out of it</p>
                    </div>
                    <div className="managesolution-image-item-container">
                        <img src={img3} alt="Image 3" className="managesolution-image-item" />
                        <h3>Improve physical access management with mobile lift integration solutions</h3>
                        <p>Elevators/lift may seem like the most u.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagingSolutions;
