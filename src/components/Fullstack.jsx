import React from "react";
import TrustedByLearnersSection from "./TrustedByLearnersSection";
import PartnershipSection from "./PartnershipSection"; 
import DoubleResoultion from "./DoubleResolution";
import { assets } from "../assets";

const Fullstack = () => {

  return (
    <div className="relative min-h-screen"> {/* Ensure relative for fixed bot positioning */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Full Stack Web Development Bootcamp with GenAI
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Become a job-ready Full Stack Developer with Generative AI skills.
            Master MERN stack, Data Structures, Algorithms, and more.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg">
            Explore Offerings
          </button>
        </div>
      </section>

      {/* Program Highlights/Features Section */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Why Choose This Bootcamp?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Highlight Card 1 */}
            <div className="bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.curriculum} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry-Relevant Curriculum</h3>
              <p className="text-gray-600">Learn the latest technologies and frameworks demanded by top companies.</p>
            </div>
            {/* Highlight Card 2 */}
            <div className="bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.projects1} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hands-on Projects</h3>
              <p className="text-gray-600">Build real-world applications to solidify your understanding and portfolio.</p>
            </div>
            {/* Highlight Card 3 */}
            <div className="bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.mentorship2} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dedicated Mentorship</h3>
              <p className="text-gray-600">Get personalized guidance from experienced industry professionals.</p>
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
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 1: Foundations of Web Development</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>HTML5 & CSS3</li>
                <li>JavaScript Basics</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 2: Frontend Development (React)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>React Fundamentals</li>
                <li>State Management (Redux/Context API)</li>
                <li>Component-Based Architecture</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 3: Backend Development (Node.js & Express)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Node.js & npm</li>
                <li>Express.js Framework</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 4: Databases (MongoDB)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>NoSQL Databases</li>
                <li>MongoDB & Mongoose</li>
                <li>Database Integration</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 5: Generative AI Integration</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Introduction to GenAI</li>
                <li>Integrating AI APIs (e.g., Gemini)</li>
                <li>Building AI-powered features</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 6: Data Structures & Algorithms</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Essential DSA concepts</li>
                <li>Problem Solving</li>
                <li>Interview Preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section (Placeholder) */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Faculty that brings out the best in you
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-start gap-8">
            {/* Faculty Card 1 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher3m} alt="Ankush Singla" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Ankush Singla</h3>
              <p className="text-gray-600 text-sm mb-4">Co-Founder & Instructor</p>
              <p className="text-gray-700 text-sm mb-4">Teaches: Basics of C++ with DSA, Data Science & Machine Learning, Competitive Programming</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">LinkedIn profile ↗</a>
            </div>
            {/* Faculty Card 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher2f} alt="Parikh Jain" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Parikh Jain</h3>
              <p className="text-gray-600 text-sm mb-4">Instructor & Founding Member at Coding Ninjas</p>
              <p className="text-gray-700 text-sm mb-4">Teaches: Basics of Python with DSA, Competitive Programming, Product Companies Interview Prep</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">LinkedIn profile ↗</a>
            </div>
            {/* Faculty Card 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher3f} alt="Nidhi Agarwal" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Nidhi Agarwal</h3>
              <p className="text-gray-600 text-sm mb-4">Founding member & Prod. Manager at Coding Ninjas</p>
              <p className="text-gray-700 text-sm mb-4">Teaches: Basics of C++ with DSA, Data Science & Machine Learning, Data Analytics Course</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">LinkedIn profile ↗</a>
            </div>
          </div>
        </div>
      </section>

      <DoubleResoultion />
    
    </div>
  );
};

export default Fullstack;