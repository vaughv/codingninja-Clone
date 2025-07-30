import React from 'react';
import {assets} from '../assets';
import TrustedByLearnersSection from './TrustedByLearnersSection';
import PartnershipSection from './PartnershipSection';
import DoubleResolution from './DoubleResolution';


const IITMFSWDInternship = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            IIT Madras Student Training & Internship - Full Stack Web Development
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Gain practical Full Stack Web Development skills with an IIT Madras certification and internship opportunities.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg">
            Download Brochure
          </button>
        </div>
      </section>

      {/* Program Highlights/Features Section */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Program Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Highlight Card 1 */}
            <div className="bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.certificate} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">IIT Madras Certification</h3>
              <p className="text-gray-600">Receive a valuable certificate from a top-tier Indian institution.</p>
            </div>
            {/* Highlight Card 2 */}
            <div className="bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.intern} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Guaranteed Internship</h3>
              <p className="text-gray-600">Secure practical experience with a guaranteed internship opportunity.</p>
            </div>
            {/* Highlight Card 3 */}
            <div className="bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.fullstack} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Master MERN Stack</h3>
              <p className="text-gray-600">Build a strong foundation in MongoDB, Express.js, React, and Node.js.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Learners Section */}
      <TrustedByLearnersSection />

      {/* Partnership Section */}
      <PartnershipSection />

      {/* Curriculum Section (Placeholder) */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Comprehensive Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 1: Frontend Fundamentals</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>HTML5, CSS3, JavaScript</li>
                <li>Responsive Web Design</li>
                <li>Introduction to React</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 2: React.js Deep Dive</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>React Components & Hooks</li>
                <li>State Management (Context API/Redux)</li>
                <li>React Router</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 3: Backend with Node.js & Express.js</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Node.js Basics & npm</li>
                <li>Building RESTful APIs with Express.js</li>
                <li>Authentication & Authorization</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 4: Databases with MongoDB</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>NoSQL Database Concepts</li>
                <li>MongoDB & Mongoose ODM</li>
                <li>Database Integration with Node.js</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 5: Full Stack Project & Deployment</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>End-to-end MERN Stack Project</li>
                <li>Deployment on Cloud Platforms</li>
                <li>Version Control (Git)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 6: Internship & Career Prep</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Internship Project Guidance</li>
                <li>Resume Building & Interview Preparation</li>
                <li>Soft Skills for Developers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section (Placeholder) */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Meet Your Instructors
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-start gap-8">
            {/* Faculty Card 1 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher1m} alt="Professor Name M" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor M</h3>
              <p className="text-gray-600 text-sm mb-4">IIT Madras Faculty</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Frontend Architectures, React</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher3f} alt="Professor Name N" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor N</h3>
              <p className="text-gray-600 text-sm mb-4">Industry Expert</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Backend Development, Databases</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher2f} alt="Professor Name O" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor O</h3>
              <p className="text-gray-600 text-sm mb-4">IIT Madras Faculty</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Full Stack Systems, Cloud Deployment</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Doubt Resolution Section */}
      <DoubleResolution />
    </div>
  );
};

export default IITMFSWDInternship;
