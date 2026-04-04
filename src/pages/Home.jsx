import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Home;
