import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-15 backdrop-blur-lg p-6 text-white z-50">
      <div className="mb-8">
        <img src="/icons/is_logow.svg" alt="Logo" className="w-20" />
      </div>
      {/* <nav>
        <ul className="space-y-20">
          <li>
            <a href="#hero" className="block hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="block hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="block hover:text-gray-300">
              About Me
            </a>
          </li>
          <li>
            <a href="#contact" className="block hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav> */}
    </aside>
  );
};

export default Sidebar;
