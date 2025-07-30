import React from 'react';
import TrustedByLearnersSection from './TrustedByLearnersSection';
import PartnershipSection from './PartnershipSection';
import DoubtResolutionSection from './DoubleResolution';
import { assets } from '../assets';

// DoubtResolutionSection component (from previous request)
const DataAnalytics = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Data Analytics Bootcamp with GenAI
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Become a job-ready Data Analyst with Generative AI skills.
            Master Python, SQL, Tableau, and more.
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
            <div className="bg-purple-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.industrytools} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry-Recognized Tools</h3>
              <p className="text-gray-600">Gain expertise in Python, SQL, Tableau, and Excel to build impactful dashboards.</p>
            </div>
            {/* Highlight Card 2 */}
            <div className="bg-purple-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.projects} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Portfolio-Ready Projects</h3>
              <p className="text-gray-600">Work on real-world case studies and projects to build a strong portfolio.</p>
            </div>
            {/* Highlight Card 3 */}
            <div className="bg-purple-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.mentorship1} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Mentorship</h3>
              <p className="text-gray-600">Receive expert guidance on resume building, interview prep, and job search.</p>
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
              <h3 className="text-xl font-semibold mb-2">Module 1: Foundations</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>SQL & Database Fundamentals</li>
                <li>Python for Data Analysis</li>
                <li>Excel & Spreadsheet Modeling</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 2: Visualization & Storytelling</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Data Visualization with Tableau</li>
                <li>Creating Interactive Dashboards</li>
                <li>Data Storytelling Techniques</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 3: Advanced Analytics</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Statistical Analysis</li>
                <li>Introduction to Machine Learning</li>
                <li>Data-driven Decision Making</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 4: Generative AI in Data Analytics</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Leveraging AI for Data Preprocessing</li>
                <li>Automating Insights with GenAI</li>
                <li>AI-powered Reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section (Placeholder) */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Meet the Mentors
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-start gap-8">
            {/* Faculty Card 1 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher1f} alt="Kritika Gupta" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Kritika Gupta</h3>
              <p className="text-gray-600 text-sm mb-4">Data Scientist</p>
              <p className="text-gray-700 text-sm mb-4">Teaches: Python for Data Science, Machine Learning, Data Analytics</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">LinkedIn profile ↗</a>
            </div>
            {/* Faculty Card 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher1m} alt="Aayush Bhardwaj" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Aayush Bhardwaj</h3>
              <p className="text-gray-600 text-sm mb-4">Senior Data Analyst</p>
              <p className="text-gray-700 text-sm mb-4">Teaches: SQL, Tableau, Power BI, Business Analytics</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">LinkedIn profile ↗</a>
            </div>
            {/* Faculty Card 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher2m} alt="Aditya Verma" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Aditya Verma</h3>
              <p className="text-gray-600 text-sm mb-4">Data Science Mentor</p>
              <p className="text-gray-700 text-sm mb-4">Teaches: Advanced Statistics, Python Libraries, Data Warehousing</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">LinkedIn profile ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Doubt Resolution Section */}
      <DoubtResolutionSection />
    </div>
  );
};

export default DataAnalytics;
