import React from "react";
import TrustedByLearnersSection from "./TrustedByLearnersSection";
import PartnershipSection from "./PartnershipSection"; 
import DoubleResoultion from "./DoubleResolution";
import { assets } from "../assets";

const PGnonTechGenAI = () => {
  return (
        <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-cyan-800 text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Generative AI for Non-Tech Professionals with IIT Madras Certification
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Empower your career with practical Generative AI skills. No prior tech knowledge needed!
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
            <div className="bg-teal-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.certificate} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">IIT Madras Certification</h3>
              <p className="text-gray-600">Gain a prestigious certification from a leading Indian institution.</p>
            </div>
            {/* Highlight Card 2 */}
            <div className="bg-teal-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.AI} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Practical AI Applications</h3>
              <p className="text-gray-600">Learn to apply GenAI tools to enhance productivity in your domain.</p>
            </div>
            {/* Highlight Card 3 */}
            <div className="bg-teal-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.newcomer} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Prior Tech Knowledge Required</h3>
              <p className="text-gray-600">Designed for professionals from diverse backgrounds.</p>
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
            Program Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 1: Introduction to AI & GenAI</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>What is AI and Machine Learning?</li>
                <li>Understanding Generative AI</li>
                <li>Key Concepts and Applications</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 2: GenAI Tools & Platforms</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Exploring Popular GenAI Tools (e.g., ChatGPT, Midjourney)</li>
                <li>Prompt Engineering Basics</li>
                <li>Ethical Considerations in AI</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 3: GenAI for Business Productivity</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Automating Content Creation</li>
                <li>Enhancing Marketing & Sales</li>
                <li>Streamlining Operations with AI</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 4: AI in Specific Industries</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Case Studies: AI in Finance, Healthcare, Education</li>
                <li>Identifying AI Opportunities in Your Domain</li>
                <li>Future Trends in Generative AI</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 5: Capstone Project & Presentation</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Develop an AI-powered solution for a real-world problem</li>
                <li>Project Planning & Execution</li>
                <li>Presentation & Communication Skills</li>
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
              <img src={assets.teacher1m} alt="Professor Name A" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor A</h3>
              <p className="text-gray-600 text-sm mb-4">IIT Madras Faculty</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: AI Ethics, NLP</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher2m} alt="Professor Name B" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor B</h3>
              <p className="text-gray-600 text-sm mb-4">Industry Expert</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Business Applications of AI</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher3m} alt="Professor Name C" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor C</h3>
              <p className="text-gray-600 text-sm mb-4">IIT Madras Faculty</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Prompt Engineering, AI Tools</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Doubt Resolution Section */}
      <DoubleResoultion />
    </div>
  );
}

export default PGnonTechGenAI;