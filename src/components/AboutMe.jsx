import React from 'react';
import './AboutMe.css';

const AboutMe = ({ id }) => {
  return (
    <>
    <div id={id} className="aboutme-container mx-5 lg:mx-10 pt-1 overflow-x-hidden">
      <h1 className="mb-14 pt-24 text-center text-4xl" data-aos="zoom-in">About Me</h1>
      <div className="aboutme-content flex flex-col lg:flex-row justify-center items-center lg:items-start">
        <div className="aboutme-text" data-aos="fade-left" data-aos-duration="1500">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <div className="education-section">
            <p className="education-item mb-4 text-neutral-400">
              <strong>Bachelor of Engineering in Information Technology</strong><br />
              Government Engineering College Gandhinagar, 2021 - 2025<br />
              CGPA: 8.78
            </p>
            <p className="education-item mb-4 text-neutral-400">
              <strong>Higher Secondary School Certificate (HSC):</strong><br />
              SETT RJJ High School Valsad, May - 2021<br />
              Percentage: 82.80%
            </p>
            <p className="education-item mb-4 text-neutral-400">
              <strong>Secondary School Certificate (SSC):</strong><br />
              Shrmajivi Madhyamik Shala Valsad, March - 2019<br />
              Percentage: 82.66%
            </p>
          </div>
        </div>
      </div>
    </div>
      <div className="w-[85%] mx-auto border-b-2 border-purple-900 border-opacity-20"></div>
      </>
  );
};

export default AboutMe;
