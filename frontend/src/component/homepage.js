import React from 'react';
import Navbar from '../component/navbar';
import HeroSection from '../component/herosection';
import ProjectSection from '../component/projectsection';
import ClientSection from '../component/clientsection';
import RetailerSection from '../component/RetailerSection';
import WhyChooseUs from '../component/WhyChooseUs';
import AboutUs from '../component/aboutUs';


function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <RetailerSection/>
      <WhyChooseUs/>
      <AboutUs/>
      <ProjectSection />
      <ClientSection />

      
    </main>
  );
}

export default Home;
