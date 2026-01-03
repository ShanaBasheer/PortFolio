import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <motion.nav className="navbar">
      <div className="nav-content">
        <div className="logo" onClick={() => scrollToSection('home')}>
          Shana Basheer
        </div>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;