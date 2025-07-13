import React from 'react';
import Navbar from '../component/navbar';
import HeroSection from '../component/herosection';
import ProjectSection from '../component/projectsection';
import ClientSection from '../component/clientsection';
import RetailerSection from '../component/RetailerSection';
import WhyChooseUs from '../component/WhyChooseUs';
import AboutUs from '../component/aboutUs';
import NewsletterSection from '../component/NewsletterSection';
import ContactForm from '../component/ContactForm';
import Footer from '../component/Footer';


function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <RetailerSection/>
      <WhyChooseUs/>
      <AboutUs/>
      <ProjectSection/>
      <ClientSection />
      
      <ContactForm/>
      <Footer/>


      
    </main>
  );
}

export default Home;
