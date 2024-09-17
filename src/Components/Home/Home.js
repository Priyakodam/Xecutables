import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero/Hero'
import AboutUs from './AboutUs/AboutUs'
import Products from './Products/Products'
import ProfessionalServices from './ProfessionalServices/ProfessionalServices'
import ServiceMaintenance from './ServiceMaintenance/ServiceMaintenance'




const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutUs />
      <Products />     
      <ServiceMaintenance />
      <ProfessionalServices />
    </div>
  )
}

export default Home