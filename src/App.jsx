import React, { useState } from 'react'; // Import useState here too
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import './styles/App.css';



function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
     
      <Navbar scrollToSection={scrollToSection} />
      <Hero id="home" />
      <About id="about" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Chatbot />
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Shana Basheer PV. All rights reserved.</p>
          <div className="social-links">
            <a href="https://linkedin.com/in/shana-basheer" className="social-link">LinkedIn</a>
            <a href="https://github.com/yourusername" className="social-link">GitHub</a>
            <a href="mailto:shana4658@gmail.com" className="social-link">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;