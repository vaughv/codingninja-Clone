import React from "react";
import TrustedByLearnersSection from "./TrustedByLearnersSection";
import PartnershipSection from "./PartnershipSection"; 
import DoubleResoultion from "./DoubleResolution";
import { assets } from "../assets";

const PGDataScienceIIT = () => {
  return (
          <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Data Science with IIT Guwahati Certification
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Master Data Science with a prestigious certification from IIT Guwahati.
            Learn advanced ML, Deep Learning, and AI applications.
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
            <div className="bg-red-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.certificate} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">IIT Guwahati Certification</h3>
              <p className="text-gray-600">Receive a valuable certificate from a top-tier Indian institution.</p>
            </div>
            {/* Highlight Card 2 */}
            <div className="bg-red-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.machinelearning} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Machine Learning</h3>
              <p className="text-gray-600">Deep dive into advanced ML algorithms, neural networks, and AI models.</p>
            </div>
            {/* Highlight Card 3 */}
            <div className="bg-red-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.projects} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-world Data Science Projects</h3>
              <p className="text-gray-600">Build a robust portfolio with industry-relevant data science projects.</p>
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
              <h3 className="text-xl font-semibold mb-2">Module 1: Python & Statistics for DS</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Python Programming for Data Science</li>
                <li>Descriptive & Inferential Statistics</li>
                <li>Probability & Distributions</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 2: Machine Learning Fundamentals</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Supervised & Unsupervised Learning</li>
                <li>Regression, Classification, Clustering</li>
                <li>Model Evaluation & Hyperparameter Tuning</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 3: Deep Learning & Neural Networks</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Introduction to Neural Networks</li>
                <li>Convolutional Neural Networks (CNNs)</li>
                <li>Recurrent Neural Networks (RNNs)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 4: Natural Language Processing (NLP)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Text Preprocessing & Feature Extraction</li>
                <li>Sentiment Analysis & Text Classification</li>
                <li>Introduction to Transformers</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 5: Big Data & Cloud for DS</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Distributed Computing (e.g., Apache Spark basics)</li>
                <li>Cloud Platforms for Data Science (AWS/GCP/Azure)</li>
                <li>Deployment of ML Models</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 6: Capstone Project & Responsible AI</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>End-to-end Data Science Project</li>
                <li>Ethics in AI & Bias Detection</li>
                <li>Interpretable AI</li>
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
              <img src={assets.teacher1m} alt="Professor Name X" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor X</h3>
              <p className="text-gray-600 text-sm mb-4">IIT Guwahati Faculty</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Deep Learning, NLP</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher3f} alt="Professor Name Y" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor Y</h3>
              <p className="text-gray-600 text-sm mb-4">IIT Guwahati Faculty</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Machine Learning, Statistics</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher2f} alt="Professor Name Z" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor Z</h3>
              <p className="text-gray-600 text-sm mb-4">Industry Expert</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Big Data, MLOps</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Doubt Resolution Section */}
      <DoubleResoultion/>
    </div>
  );
}

export default PGDataScienceIIT;