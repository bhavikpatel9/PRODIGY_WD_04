import React,{useEffect} from "react";
import heroimage from "../assets/profile-pic.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = ({ id }) => {
  useEffect(() => {
    AOS.init({
      duration : "700",
    });
  }, [])
  return (
    <>
    <div>
    <div
        id={id}
        className="grid grid-cols-1 sm:grid-cols-3 md:h-[88vh] lg:gap-8 py-8 "
      >
        <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
          <img src={heroimage} alt="hero image" data-aos="fade-right"/>
        </div>

        <div className="col-span-2 px-5 my-auto" data-aos="fade-left">
          <h1 className="text-white mt-3 text-3xl sm:text-5xl lg:text-7xl font-extralight">
            <span className="primary-color">Hello, I'm a</span>
            <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-white text-sm my-4 lg:text-lg">
            I am a passionate full stack web developer. I have enhanced my skills
            in front-end technology like React, as well as back-end technologies
            like Node.js and MongoDB. My goal is to leverage my expertise to
            create innovative solutions that derive bussiness growth and deliver
            exceptional user experiences.
          </p>

          <div className="my-8">
            {/* <a href="/" className='cursor-pointer px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-purple-400 to-purple-700 text-white'>Download CV</a> */}
            <Link
              to="contact"
              smooth={true}
              className="cursor-pointer px-6 py-3 w-full rounded-xl border border-purple-400 bg-gradient-to-br from-purple-400 to-purple-700 text-white hover:border-purple-400 hover:bg-transparent hover:bg-none hover:text-purple-400"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[85%] mx-auto border-b-2 border-purple-900 border-opacity-20"></div>
    </div>

    </>
  );
};

export default Hero;
