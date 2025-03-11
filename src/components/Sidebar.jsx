import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

import "./Sidebar.css";

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState('#hero');

  useEffect(() => {
    // Function to determine which section is currently in view
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Adding offset for better UX
      
      // Find the current section by checking their positions
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const topPosition = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= topPosition && scrollPosition < topPosition + height) {
            setActiveNav(`#${section}`);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set the active section on page load
    handleScroll();
    
    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling when clicking navigation items
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveNav(id);
    
    const element = document.getElementById(id.substring(1)); // Remove # from the id
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-1 z-10">
        <img
          src="/icons/is_logow.svg"
          alt="ishan siddhartha logo"
          className="logo"
          style={{ width: "60px"}}
        />
      </div>
      <nav>
        <a 
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className={activeNav === '#hero' ? 'active' : ''}
        >
          <Typography>
            Home
          </Typography>
        </a>
        <a 
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <Typography>
            About
          </Typography>
        </a>
        <a 
          href="#projects"
          onClick={(e) => handleNavClick(e, '#projects')}
          className={activeNav === '#projects' ? 'active' : ''}
        >
          <Typography>
            Projects
          </Typography>
        </a>
        <a 
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <Typography>
            Contact
          </Typography>
        </a>
      </nav>
      
      {/* Resume Link - Positioned at bottom right with enhanced hover effect */}
      <div className="fixed bottom-5 left-1 z-10">
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-transparent px-4 py-2 rounded-full 
                     hover:bg-opacity-50 hover:shadow-lg hover:scale-105 
                     transition-all duration-300 ease-in-out"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width='24'
            height='24'
            className="transform transition-transform duration-300 hover:rotate-3"
          >
            <path fillRule='evenodd' d="M4 4V20C4 21.1046 4.89543 22 6 22L18 22C19.1046 22 20 21.1046 20 20V8.34162C20 7.8034 19.7831 7.28789 19.3982 6.91161L14.9579 2.56999C14.5842 2.20459 14.0824 2 13.5597 2L6 2C4.89543 2 4 2.89543 4 4Z" stroke="#7d2ae8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule='evenodd' d="M14 2V6C14 7.10457 14.8954 8 16 8H20" stroke="#7d2ae8" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <span className="text-white font-medium hover:text-purple-300 transition-colors duration-300">Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;