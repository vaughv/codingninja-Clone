import React from "react";
import TrustedByLearnersSection from "./TrustedByLearnersSection";
import PartnershipSection from "./PartnershipSection"; 
import DoubleResoultion from "./DoubleResolution";
import { assets } from "../assets";


const DataAnalyticsInternship = () => {

  return (
    <div>
      

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-fuchsia-900 text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Student Training cum Internship Certification - Data Analytics
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Gain hands-on experience in Data Analytics with a comprehensive training program and guaranteed internship.
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
            <div className="bg-purple-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.call} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Practical Training</h3>
              <p className="text-gray-600">Focus on real-world data analysis techniques and tools.</p>
            </div>
            {/* Highlight Card 2 */}
            <div className="bg-purple-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.intern} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Guaranteed Internship</h3>
              <p className="text-gray-600">Secure valuable industry experience with a guaranteed internship.</p>
            </div>
            {/* Highlight Card 3 */}
            <div className="bg-purple-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.certificate} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Certification</h3>
              <p className="text-gray-600">Receive a recognized certification upon successful completion.</p>
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
              <h3 className="text-xl font-semibold mb-2">Module 1: Data Foundations</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Introduction to Data Analytics</li>
                <li>Excel for Data Analysis</li>
                <li>SQL for Data Management</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 2: Data Visualization</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Tableau/Power BI Fundamentals</li>
                <li>Creating Interactive Dashboards</li>
                <li>Data Storytelling</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 3: Python for Data Analysis</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Python Basics & Libraries (Pandas, NumPy)</li>
                <li>Data Cleaning & Preprocessing</li>
                <li>Exploratory Data Analysis</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 4: Statistical Analysis & Reporting</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Basic Statistics for Data Analysts</li>
                <li>Report Generation & Presentation</li>
                <li>Business Intelligence Concepts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 5: Internship Project</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Real-world Data Analytics Project</li>
                <li>Problem Solving & Implementation</li>
                <li>Project Presentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section (Placeholder) */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Meet Your Mentors
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-start gap-8">
            {/* Faculty Card 1 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher1f} alt="Mentor Name J" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Mentor J</h3>
              <p className="text-gray-600 text-sm mb-4">Lead Data Analyst</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: SQL, Tableau</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher1m} alt="Mentor Name K" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Mentor K</h3>
              <p className="text-gray-600 text-sm mb-4">Data Science Consultant</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Python, Machine Learning</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher2f} alt="Mentor Name L" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Mentor L</h3>
              <p className="text-gray-600 text-sm mb-4">Business Intelligence Expert</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Excel, Power BI</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Doubt Resolution Section */}
      <DoubleResoultion/>
    </div>
  );
};

export default DataAnalyticsInternship;
