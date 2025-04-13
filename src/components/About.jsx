import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    out: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    out: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    out: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 px-8 md:px-12 lg:px-16 text-white">
      <motion.div 
        className="max-w-5xl w-full backdrop-blur-[2px] rounded-2xl p-8 md:p-12 shadow-xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        whileOutOfView="out"
        viewport={{ margin: "-100px" }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-10 text-center gradient-text"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <br />
        
        <div className="grid md:grid-cols-5 gap-10">
          {/* Left column - Image/Info */}
          <motion.div 
            className="md:col-span-2 flex flex-col items-center space-y-4"
            variants={containerVariants}
          >
            <motion.div 
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg mb-4"
              variants={imageVariants}
            >
              <img 
                src="/profile.jpg" 
                alt="Ishan Siddhartha" 
                className="w-full h-50% object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="text-center space-y-2"
              variants={itemVariants}
            >
              <p className="text-purple-300">Computer Science Student</p>
              <p className="text-sm">Varanasi, India</p>
            </motion.div>
          </motion.div>
          
          {/* Right column - Bio */}
          <motion.div 
            className="md:col-span-3 text-lg leading-relaxed space-y-6"
            variants={containerVariants}
          >
            <motion.p 
              className="first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-purple-300"
              variants={itemVariants}
            >
              Hi, I'm a passionate tech enthusiast currently pursuing a B.Tech in Computer Science at Birla Institute of Technology Mesra, Ranchi. Born and raised in Varanasi, I've always loved creating new things
            </motion.p>
            <br />
            <motion.p variants={itemVariants}>
              My programming journey spans multiple languages including <span className="text-purple-300">C, C++, Javascript, Java, and Python</span>. I'm actively expanding my skills in web development with <span className="text-purple-300">HTML, CSS, JavaScript, React and Node.js</span>.
            </motion.p>
            <br />
            <motion.p variants={itemVariants}>
              My academic background includes coursework in <span className="text-purple-300">operating systems, object-oriented programming, database management, and computer networking</span>. I've also completed a machine learning specialization which sparked my interest in artificial intelligence.
            </motion.p>
            <br />
            <motion.p variants={itemVariants}>
              I enjoy exploring innovative technologies, contributing to open-source projects, and continuously challenging myself to push the boundaries of what and who i am.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
