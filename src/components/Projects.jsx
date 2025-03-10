import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 px-8 md:px-12 lg:px-16 text-white">
      {/* Increased padding from p-8 md:p-12 to p-10 md:p-16 to give content more space */}
      <div className="max-w-5xl w-full backdrop-blur-[2px] rounded-2xl p-10 md:p-16 shadow-xl">
        {/* Added more bottom margin and improved line height */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text leading-relaxed">My Projects</h2>
        
        {/* Portfolio Project */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left column - Project Image */}
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-lg overflow-hidden border-2 border-purple-500 shadow-lg mb-6 w-full">
              <img src="/portfolio-screenshot.jpg" alt="Portfolio Website" className="w-full h-auto object-cover" />
            </div>
          </div>
          
          {/* Right column - Project details */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-semibold text-purple-300">Portfolio Website</h3>
            
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                A modern, responsive personal portfolio website built from scratch to showcase my projects, skills, and experience. Features a clean, dark-themed design with interactive elements and smooth scrolling.
              </p>
              
              <div>
                <h4 className="text-xl font-medium mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-sm">Styled Components</span>
                  <span className="px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-sm">Material UI</span>
                </div>
              </div>
              
              <br />

              <div className="pt-4">
                <a 
                  href="https://ishan-siddhartha.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors duration-300"
                >
                  <span>Visit Website</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
