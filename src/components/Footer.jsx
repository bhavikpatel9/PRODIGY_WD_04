import React from 'react';
import { FaLinkedin, FaFacebookSquare,FaTwitter, FaInstagram  } from "react-icons/fa";
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <footer className="bg-[#24234d] text-white py-3 pt-10" style={{ clipPath: 'polygon(30% 0, 100% 20%, 100% 100%, 0 100%, 0 15% )' }}>
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold mb-4">Bhavik Patel</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <Link to="home" smooth={true} offset={-90} className="cursor-pointer hover:text-purple-400">Home</Link>
          <Link to="skills" smooth={true} className="cursor-pointer hover:text-purple-400">Skills</Link>
          <Link to="projects" smooth={true} className="cursor-pointer hover:text-purple-400">Projects</Link>
          <Link to="contact" smooth={true} className="cursor-pointer hover:text-purple-400">Contact</Link>
        </div>
        <div className="flex justify-center space-x-7 mb-4">
          <a href="https://www.facebook.com/profile.php?id=100035173445118" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400'>
          <FaFacebookSquare size={25}/>
          </a>
          <a href="https://x.com/BhavikPatel2004" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400'>
          <FaTwitter size={25}/>
          </a>
          <a href="https://www.linkedin.com/in/bhavik-patel-15990524b/" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400'>
            <FaLinkedin size={25}/>
          </a>
          <a href="https://www.instagram.com/bhavik_patel.22?igsh=MjA0dzB6OGswZXY=" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400'>
          <FaInstagram size={25}/>
          </a>
        </div>
        <p className="text-sm">&copy; 2024 Bhavik Patel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
