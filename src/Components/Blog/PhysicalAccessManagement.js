import React, { useState } from 'react';
import img1 from './BlogImages/Assets.png';
import img2 from './BlogImages/Blog1.png';
import img3 from './BlogImages/Blog2.png';

import './PhysicalAccessManagement.css'; // Assuming you're keeping your styles in a separate SCSS file

const ManagingSolutions = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div>
            <div className="physicalaccess-banner">
                <span style={{ textAlign: 'center' }} className="physicalaccess-banner-text">
                    Improve physical access management with mobile lift integration solutions
                </span>
            </div>

            <div className="physicalaccess-container">
               
                    <div className="physicalaccess-image-container">
                        <img src={img3} alt="Physical Access Management Graphic" className="physicalaccess-image-under-banner" />
                    </div>
               
               
                    <div className="physicalaccess-card">
                        <h2 className="physicalaccess-card-heading">
                            Improve physical access management with mobile lift integration solutions
                        </h2>
                        <p>Artificial intelligence and mobile lift integration are the future of the smart elevator market.</p>
                        <p>Nebula is an integration solution which helps businesses seamlessly integrate various physical access systems (PACS).</p>
                        <p>Nebula’s approach is simple and effective. It handles synchronizing the cards and the access floors in the mobile application.</p>
                        <p>The application plays a critical role in managing the user profile changes.</p>
                    </div>
            
            </div>

            <div className="physicalaccess-text-container">
                <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>1.&nbsp;</span>
                    Elevators/lift may seem like the most uncomplicated systems but there’s a lot more to them than what meets the eye. They are tricky and are quite distinct from one another. They have the capability to impact the safety of a facility or a building.
                </p>
                <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>2.&nbsp;</span>
                    New types and levels of safety threats call for advanced safety solutions. The access points of the buildings can be managed by managing the elevators correctly. Appropriate access management system can help ensure smooth flow of people in and out of the building. It will also improve the user experience.
                </p>
                <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>3.&nbsp;</span>
                    This requires a dedicated elevator access control system to restrict entry and ensure safety of a multi-floor building. There are numerous ways of managing the access. The most common method is where one “welcome” floor is open to all and the rest are restricted. However, this system raises a lot of concern in buildings that have business houses.
                </p>

                {showMore && (
                    <>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>4.&nbsp;</span>
                            The solutions developed previously focused on monitoring the access management system and troubleshooting if necessary. The solution was functional but had limited capacity.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>5.&nbsp;</span>
                            Today, businesses are striving hard to adopt smart systems to future-proof their buildings and create an effective barrier to threats. With an ever-growing ecosystem, new smart elevator systems are being designed to solve the issues of accessibility and security.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>6.&nbsp;</span>
                            Artificial intelligence and mobile lift integration are the future of the smart elevator market.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>7.&nbsp;</span>
                            There are a lot of Physical Access Management systems (PACS) in place that need to be well-managed and integrated. There exists a visible gap in the ability to secure the buildings and the workplaces. A noteworthy system would be one that is effective for the business and convenient for the user. This requires a solution where the physical access cards of the users, the user profile, and the access to floors can be managed.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>8.&nbsp;</span>
                            Nebula: the mobile lift integration solution you need
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>9.&nbsp;</span>
                            Nebula is an integration solution which helps businesses seamlessly integrate various physical access systems (PACS). It integrates with Pro-Watch, issuing mobile credentials to users. It executes a wide range of workflows based on business requirements. It is backed up by an intelligent architecture which helps it in responding to various PACS events and publish them to other systems efficiently.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>10.&nbsp;</span>
                            Nebula’s approach is simple and effective. It handles synchronizing the cards and the access floors in the mobile application. Users can download the mobile app and create a profile with their credentials. The application will be available both on Android and iOS platforms. The application would have information regarding the floors the user has access to.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>11.&nbsp;</span>
                            At the time of entry, once inside the elevator, the user will need to select the desired floor. He will then need to show the app to the reader. The reader will capture and pass the event to Pro-Watch. Once the Pro-Watch panel receives the event, the output will be activated and the hard wire will be connected to KONE controller.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>12.&nbsp;</span>
                            The application plays a critical role in managing the user profile changes. It allows addition or removal of floor access of an individual through either Pro-watch or Nebula. It is especially useful in situations where the business wishes to revoke a user’s floor access. The simplicity of this important feature improves safety protocols in the long run.
                        </p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '22px' }}>13.&nbsp;</span>
                            Nebula along with the application creates a path to substantially improve the access management system. This gives way to an effective Physical Access Control System that is convenient and reduces everyday hassle.
                        </p>
                    </>
                )}

                {!showMore && (
                    <button onClick={toggleShowMore} className="read-more-btn">
                        Read More
                    </button>
                )}

                {showMore && (
                    <button onClick={toggleShowMore} className="read-more-btn">
                        Show Less
                    </button>
                )}
            </div>

            <div>
                <p className='related-posts'>------------Related Posts-------------</p>
                <div className="physicalaccess-image-row-container">
                    <div className="physicalaccess-image-item-container">
                        <img src={img1} alt="Image 1" className="physicalaccess-image-item" />
                        <h3>Access management integration</h3>
                        <p>With the evolution of software and tech</p>
                    </div>
                    <div className="physicalaccess-image-item-container">
                        <img src={img2} alt="Image 2" className="physicalaccess-image-item" />
                        <h3>Managing airport security with new age solutions</h3>
                        <p>Thousands of people walk in and out of it</p>
                    </div>
                    <div className="physicalaccess-image-item-container">
                        <img src={img3} alt="Image 3" className="physicalaccess-image-item" />
                        <h3>Improve physical access management with mobile lift integration solutions</h3>
                        <p>Elevators/lift may seem like the most u.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagingSolutions;
