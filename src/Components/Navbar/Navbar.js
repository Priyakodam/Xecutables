// // // src/Header.js

// // import React, { useState } from 'react';
// // import './Navbar.css'; // Import the CSS for styling

// // const Header = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <header>
// //       <div className="logo">
// //         <h1>Xecutables</h1>
// //       </div>
// //       <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
// //         <a href="/">Home</a>
// //         <a href="/about">About</a>
// //         <a href="/blog">Blog</a>
// //         <a href="/product">Product</a>
// //         <a href="/service">Service</a>
// //         <a href="/contact">Contact Us</a>
// //       </nav>
// //       <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
// //         <div className="bar"></div>
// //         <div className="bar"></div>
// //         <div className="bar"></div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;



// // import React, { useState } from 'react';
// // import './Navbar.css'; // Import the CSS for styling
// // // import company_logo from '../../../public/xecutable.png'

// // const Header = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [dropdownOpen, setDropdownOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const toggleDropdown = () => {
// //     setDropdownOpen(!dropdownOpen);
// //   };

// //   return (
// //     <header>
// //       {/* Logo */}
// //       <div className="logo">
// //       <img src="/xecutable.png" alt="Xecutables Logo" />
// //       </div>

// //       {/* Hamburger toggle button */}
// //       <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
// //         <div className="bar"></div>
// //         <div className="bar"></div>
// //         <div className="bar"></div>
// //       </div>

// //       {/* Navigation links */}
// //       <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
// //         <a href="/">Home</a>
// //         <a href="/about">About Us</a>
// //         <a href="/product">Product</a>

// //         {/* Services dropdown */}
// //         <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
// //           <span>Services ▾</span>
// //           {dropdownOpen && (
// //             <div className="dropdown-content">
// //               <a href="/engineering-services">Engineering Services</a>
// //               <a href="/professional-services">Professional Services</a>
// //               <a href="/maintenance">Service and Maintenance</a>
// //             </div>
// //           )}
// //         </div>

// //         <a href="/blog">Blog</a>
// //         <a href="/contact">Contact Us</a>
// //       </nav>

// //       {/* Buttons aligned to the right */}
// //       <div className="buttons">
// //         <a href="/get-in-touch" className="button primary">Get in touch</a>
// //         <a href="/try-free" className="button secondary">Try for free</a>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;



// import React, { useState } from 'react';
// import './Navbar.css'; // Import the CSS for styling

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <header>
//       {/* Logo */}
//       <div className="logo">
//         <img src="/xecutable.png" alt="Xecutables Logo" />
//       </div>

//       {/* Hamburger toggle button */}
//       <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       {/* Navigation links */}
//       <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
//         <a href="/">Home</a>
//         <a href="/about">About Us</a>
//         <a href="/product">Product</a>

//         {/* Services dropdown */}
//         <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//           <span>Services ▾</span>
//           {dropdownOpen && (
//             <div className="dropdown-content">
//               <a href="/engineering-services">Engineering Services</a>
//               <a href="/professional-services">Professional Services</a>
//               <a href="/maintenance">Service and Maintenance</a>
//             </div>
//           )}
//         </div>

//         <a href="/blog">Blog</a>
//         <a href="/contact">Contact Us</a>
//       </nav>

//       {/* Buttons aligned to the right */}
//       <div className="buttons">
//         <a href="/contact" className="button primary">Get in touch</a>
      
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS for styling
import mainlogo from './logo/xecutable-logo.png'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
      {/* Logo */}
      <div className="logo">
     <img src={mainlogo} alt="Xecutables Logo" />      </div>

      {/* Hamburger toggle button */}
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation links */}
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/product">Product</a>

        {/* Services dropdown with dynamic icon */}
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span>
            Services {dropdownOpen ? '▴' : '▾'} {/* Icon changes based on dropdownOpen state */}
          </span>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="/engineering-services">Engineering Services</a>
              <a href="/professional-services">Professional Services</a>
              <a href="/maintenance">Service and Maintenance</a>
            </div>
          )}
        </div>

        <a href="/blog">Blog</a>
        <a href="/contact">Contact Us</a>
      </nav>

      {/* Buttons aligned to the right */}
      <div className="buttons">
        <a href="/contact" className="button primary">Get in touch</a>
      </div>
    </header>
  );
};

export default Header;

