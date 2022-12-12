import React from 'react';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Home from './Home';
import NavBar from './NavBar';
import OnlineCertification from './OnlineCertication';
import Portfolio from './Portfolio';
import SocialLinks from './SocialLinks';

const HomePage = () => {
    return (
        <div>
            <NavBar></NavBar>

                  <Home />
      <About />
      
      <Portfolio />
      <Experience />
      <OnlineCertification></OnlineCertification>
      <Contact />
      

      <SocialLinks />
            
        </div>
    );
};

export default HomePage;