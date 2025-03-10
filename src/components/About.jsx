import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 px-8 md:px-12 lg:px-16 text-white ">
      <div className="max-w-5xl w-full backdrop-blur-[2px] rounded-2xl p-8 md:p-12 shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center gradient-text">About Me</h2>
        <br />
        
        <div className="grid md:grid-cols-5 gap-10">
          {/* Left column - Image/Info */}
          <div className="md:col-span-2 flex flex-col items-center space-y-4">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg mb-4">
              <img 
                src="/profile.jpg" 
                alt="Ishan Siddhartha" 
                className="w-full h-50% object-cover"
              />
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-purple-300">Computer Science Student</p>
              <p className="text-sm">Varanasi, India</p>
            </div>
          </div>
          
          {/* Right column - Bio */}
          <div className="md:col-span-3 text-lg leading-relaxed space-y-6">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-purple-300">
              Hi, I'm a passionate tech enthusiast currently pursuing a B.Tech in Computer Science at Birla Institute of Technology Mesra, Ranchi. Born and raised in Varanasi, I've always loved creating new things
            </p>
            <br />
            <p>
              My programming journey spans multiple languages including <span className="text-purple-300">C, C++, Javascript, Java, and Python</span>. I'm actively expanding my skills in web development with <span className="text-purple-300">HTML, CSS, JavaScript, React and Node.js</span>.
            </p>
            <br />
            <p>
              My academic background includes coursework in <span className="text-purple-300">operating systems, object-oriented programming, database management, and computer networking</span>. I've also completed a machine learning specialization which sparked my interest in artificial intelligence.
            </p>
            <br />
            <p>
              I enjoy exploring innovative technologies, contributing to open-source projects, and continuously challenging myself to push the boundaries of what and who i am.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
