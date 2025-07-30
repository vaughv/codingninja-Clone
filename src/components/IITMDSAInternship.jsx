import React from 'react';
import TrustedByLearnersSection from "./TrustedByLearnersSection";
import PartnershipSection from "./PartnershipSection"; 
import DoubleResolution from "./DoubleResolution";
import { assets } from '../assets';


const IITMDSAInternship = () => {

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            IIT Madras Student Training & Internship (DSA)
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Gain practical Data Structures & Algorithms skills with an IIT Madras certification and internship opportunities.
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
              <img src={assets.dsa} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Master DSA Concepts</h3>
              <p className="text-gray-600">Build a strong foundation in Data Structures and Algorithms for competitive programming and interviews.</p>
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
              <h3 className="text-xl font-semibold mb-2">Module 1: Programming Fundamentals</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Introduction to C++/Java/Python</li>
                <li>Basic Syntax and Control Flow</li>
                <li>Functions and Recursion</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 2: Data Structures</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Arrays, Linked Lists, Stacks, Queues</li>
                <li>Trees (Binary Trees, BSTs)</li>
                <li>Graphs</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 3: Algorithms</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Sorting & Searching Algorithms</li>
                <li>Greedy Algorithms & Dynamic Programming</li>
                <li>Graph Algorithms (DFS, BFS, Dijkstra)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 4: Advanced DSA & Problem Solving</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Tries, Segment Trees, Fenwick Trees</li>
                <li>Competitive Programming Strategies</li>
                <li>Interview Problem Solving</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 5: Internship Project</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Real-world project implementation</li>
                <li>Code Review & Best Practices</li>
                <li>Documentation & Presentation</li>
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
              <img src={assets.teacher3m} alt="Professor Name G" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor G</h3>
              <p className="text-gray-600 text-sm mb-4">IIT Madras Faculty</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Algorithms, Competitive Programming</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher3f} alt="Professor Name H" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor H</h3>
              <p className="text-gray-600 text-sm mb-4">Industry Expert</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Data Structures, System Design</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher2f} alt="Professor Name I" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor I</h3>
              <p className="text-gray-600 text-sm mb-4">IIT Madras Faculty</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Advanced Algorithms, Problem Solving</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Doubt Resolution Section */}
      <DoubleResolution/>
    </div>
  );
};

export default IITMDSAInternship;
