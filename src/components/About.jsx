import React from 'react';
import { motion } from 'framer-motion';

const About = ({ id }) => {
  return (
    <section id={id} className="about">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Passionate developer with 7+ years of enterprise experience
        </motion.p>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Turning Ideas into Reality</h3>
            <p>
              I'm a full-stack developer specializing in React and .NET Core. 
              With a keen eye for design and a passion for clean code, I create 
              digital experiences that are both beautiful and functional.
            </p>
            <p>
              My journey in web development started 7 years ago, and I've been 
              constantly learning and adapting to new technologies ever since.
            </p>
            
            {/* About Me Button */}
            <motion.button
              className="cta-button"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ marginTop: '2rem' }}
            >
              Get In Touch ↓
            </motion.button>
          </motion.div>

          <motion.div 
            className="skills-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="skill-item">
              <h4>Frontend</h4>
              <p>React, JavaScript, TypeScript, CSS, HTML</p>
            </div>
            <div className="skill-item">
              <h4>Backend</h4>
              <p>.NET Core, Node.js, SQL Server, MongoDB</p>
            </div>
            <div className="skill-item">
              <h4>Tools</h4>
              <p>Git, Docker, Azure, VS Code, Visual Studio</p>
            </div>
            <div className="skill-item">
              <h4>Soft Skills</h4>
              <p>Problem Solving, Team Collaboration, Agile</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;