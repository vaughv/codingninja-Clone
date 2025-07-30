import React from 'react';
import {assets} from '../assets';
import TrustedByLearnersSection from "./TrustedByLearnersSection";
import PartnershipSection from "./PartnershipSection"; 
import DoubleResoultion from "./DoubleResolution";


const DataAnalyticsIITGCertificationPage = () => {

  return (
    <div>
    
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-green-700 text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Data Analytics with IIT Guwahati Certification
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Earn a prestigious certification from IIT Guwahati in Data Analytics.
            Master advanced concepts and industry-leading tools.
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">IIT Guwahati Certification</h3>
              <p className="text-gray-600">Receive a valuable certificate from a top-tier Indian institution.</p>
            </div>
            {/* Highlight Card 2 */}
            <div className="bg-teal-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.data} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Data Science Modules</h3>
              <p className="text-gray-600">Deep dive into advanced statistical methods and machine learning algorithms.</p>
            </div>
            {/* Highlight Card 3 */}
            <div className="bg-teal-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.projects1} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Capstone Project & Case Studies</h3>
              <p className="text-gray-600">Apply your knowledge to solve real-world business problems.</p>
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
              <h3 className="text-xl font-semibold mb-2">Module 1: Data Foundations & SQL</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Relational Databases & SQL</li>
                <li>Data Warehousing Concepts</li>
                <li>Data Modeling</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 2: Python for Data Science</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>NumPy, Pandas, Matplotlib</li>
                <li>Data Cleaning & Preprocessing</li>
                <li>Exploratory Data Analysis</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 3: Statistical Analysis & ML</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Hypothesis Testing</li>
                <li>Regression & Classification</li>
                <li>Clustering Techniques</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 4: Big Data & Cloud Analytics</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Introduction to Big Data Ecosystem</li>
                <li>Cloud Platforms (AWS/Azure/GCP basics)</li>
                <li>Data Streaming Concepts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 5: Advanced Visualization (Power BI/Tableau)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Advanced Dashboard Design</li>
                <li>Interactive Reporting</li>
                <li>Data Storytelling for Business</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 6: Capstone Project & AI Integration</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>End-to-end Data Analytics Project</li>
                <li>Integrating Generative AI for insights</li>
                <li>Deployment Considerations</li>
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
              <img src={assets.teacher3f} alt="Professor Name 1" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor A</h3>
              <p className="text-gray-600 text-sm mb-4">IIT Guwahati Faculty</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Advanced Analytics, ML</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher1m} alt="Professor Name 2" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor B</h3>
              <p className="text-gray-600 text-sm mb-4">IIT Guwahati Faculty</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Data Warehousing, SQL</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher3m} alt="Professor Name 3" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor C</h3>
              <p className="text-gray-600 text-sm mb-4">Industry Expert</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Data Visualization, GenAI</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Doubt Resolution Section */}
      <DoubleResoultion />
    </div>
  );
};

export default DataAnalyticsIITGCertificationPage;
