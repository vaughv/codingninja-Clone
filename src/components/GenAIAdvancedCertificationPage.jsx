import React from "react";
import TrustedByLearnersSection from "./TrustedByLearnersSection";
import PartnershipSection from "./PartnershipSection"; 
import DoubleResoultion from "./DoubleResolution";
import { assets } from "../assets";

const GenAIAdvancedCertificationPage = () => {    
  return (
    <div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-800 text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Generative AI Advanced Certification
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Deep dive into advanced Generative AI models, fine-tuning, and deployment strategies.
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
            <div className="bg-green-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.genAI1} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced GenAI Architectures</h3>
              <p className="text-gray-600">Explore cutting-edge models like GANs, Transformers, and Diffusion Models.</p>
            </div>
            {/* Highlight Card 2 */}
            <div className="bg-green-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.deploy} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Model Fine-tuning & Deployment</h3>
              <p className="text-gray-600">Learn to customize and deploy GenAI models for specific use cases.</p>
            </div>
            {/* Highlight Card 3 */}
            <div className="bg-green-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={assets.ethicalai} alt="Icon" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ethical AI & Responsible Development</h3>
              <p className="text-gray-600">Understand the societal impact and ethical considerations of advanced AI.</p>
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
            Advanced Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 1: Deep Dive into Transformers</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Attention Mechanism & Encoder-Decoder</li>
                <li>BERT, GPT, and their variants</li>
                <li>Applications in NLP</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 2: Generative Adversarial Networks (GANs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>GAN Architectures & Training</li>
                <li>Image Generation & Style Transfer</li>
                <li>Conditional GANs</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 3: Diffusion Models</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Understanding Diffusion Process</li>
                <li>Image & Video Generation with Diffusion</li>
                <li>Practical Implementations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 4: Model Fine-tuning & Customization</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Transfer Learning for GenAI</li>
                <li>Low-Rank Adaptation (LoRA)</li>
                <li>Dataset Preparation for Fine-tuning</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 5: Deployment & MLOps for GenAI</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Cloud Deployment Strategies (AWS, GCP, Azure)</li>
                <li>Monitoring & Maintenance of GenAI Models</li>
                <li>Scalability & Performance Optimization</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Module 6: Capstone Project & Research Trends</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Build an advanced GenAI application</li>
                <li>Explore latest research papers & breakthroughs</li>
                <li>Ethical AI in practice</li>
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
              <img src={assets.teacher2f} alt="Professor Name D" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor D</h3>
              <p className="text-gray-600 text-sm mb-4">AI Research Scientist</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Transformers, NLP</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher3f} alt="Professor Name E" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor E</h3>
              <p className="text-gray-600 text-sm mb-4">ML Engineer & Architect</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: GANs, Diffusion Models</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Profile ↗</a>
            </div>
            {/* Faculty Card 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <img src={assets.teacher3m} alt="Professor Name F" className="h-32 w-32 rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-semibold text-gray-800">Professor F</h3>
              <p className="text-gray-600 text-sm mb-4">AI Ethics & Policy Expert</p>
              <p className="text-gray-700 text-sm mb-4">Specialization: Responsible AI, MLOps</p>
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

export default GenAIAdvancedCertificationPage;