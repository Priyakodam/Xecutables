import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { FaArrowUp } from 'react-icons/fa'; // Importing an up arrow icon from FontAwesome
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Product from "./Components/Product/Product";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ProductDetail from './Components/Product/ProductDetail';
import EngineeringService from "./Components/Service/EngineeringService";
import ProfessionalServices from "./Components/Service/ProfessionalServices";
import ServiceAndMaintenance from "./Components/Service/ServiceAndMaintenance";
import AccessManagementIntegration from "./Components/Blog/AccessManagementIntegration";
import ManagingSolutions from "./Components/Blog/ManagingSolutions";
import PhysicalAccessManagement from "./Components/Blog/PhysicalAccessManagement";


const firebaseConfig = {
  apiKey: "AIzaSyAvm8gw5gFla6WNAiiaX8rXEHApbLiMkqk",
  authDomain: "xecutables1.firebaseapp.com",
  projectId: "xecutables1",
  storageBucket: "xecutables1.appspot.com",
  messagingSenderId: "499916339216",
  appId: "1:499916339216:web:32d74fdc531c282f46f295"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, getFirestore, auth };
  
 



function App() {
    const [showScroll, setShowScroll] = useState(false);

  // Function to check the scroll position
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  // Function to scroll the page to the top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Adding event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

    return (
        <div>

        <Router>
            <div>
                <Navbar />
                {/* <ScrollBar /> */}
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/service" element={<Service/>}/> 
                    <Route path="/product" element={<Product/>} />
                    <Route path="/contact" element={<Contact/>} /> 

                    <Route path="/productdetail" element={<ProductDetail/>} /> 
                    
                    

                    <Route path="/engineering-services" element={<EngineeringService/>} /> 
                    <Route path="/professional-services" element={<ProfessionalServices/>} />
                    <Route path="/maintenance" element={<ServiceAndMaintenance/>} />
                    <Route path="/accessmanagementintegration" element={<AccessManagementIntegration/>} /> 
                    <Route path="/managingsolutions" element={<ManagingSolutions/>} />
                    <Route path="/physicalaccessmanagement" element={<PhysicalAccessManagement/>} />

                </Routes>
                <Footer/>

                
                
            </div>
        </Router>
        <FaArrowUp
    className="scrollTop"
    onClick={scrollTop}
    style={{ display: showScroll ? 'flex' : 'none', position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' }}
  />
        </div>
        
    );
   
}

export default App;
