import React, { useState } from "react";
import learn from "../assets/learn.webp";
import excel from "../assets/excel.webp";
import standout from "../assets/standout.webp";
import { assets } from "../assets";
 

const Homepage = ({ navigateTo }) => {
  const [hoveredSection, setHoveredSection] = useState("learn");

  const getImage = () => {
    switch (hoveredSection) {
      case "learn":
        return learn ; 
      case "excel":
        return excel;
      case "standout":
        return standout;
      default:
        return learn; // Default image
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="text-blue-500 font-semibold">Restricted by opportunities?</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Get the tech career you deserve. Faster.
        </h1>
        <p className="text-orange-500 mt-4">
          Structured Coding Courses that get you there Faster with Confidence
        </p>
        <button className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-lg"
          onClick={() => navigateTo('home')} >
          Explore Offerings
        </button>
      </section>

      {/* Offerings Section */}
      <section  className="bg-white text-black px-6 py-16">
        <h2 className="text-center text-5xl font-bold text-gray-300 mb-12">
          OUR OFFERINGS
        </h2>

        <div className="space-y-12">
          {/* Job Bootcamp */}
         
          <div className="mb-12">
            <div className="flex items-center gap-3 text-xl font-semibold mb-6">
              <img src={assets.bootcamp} alt="job bootcamp" className="h-10 w-10 rounded shadow-lg bg-white p-2" />
              <span>Job Bootcamp</span>
              <span className="ml-4 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-base font-medium">For graduates</span>
            </div>
            <div className="flex flex-wrap gap-8 justify-center">
  
            {/* Card 1 */}
            <div className="bg-blue-50 rounded-2xl shadow-lg w-full max-w-md flex flex-col" >
              <div  onClick={() => navigateTo('Fullstack')} className="flex items-center gap-4 px-8 py-8 cursor-pointer">
                <img src={assets.fullstack} alt="Full Stack Web Development" className="h-16 w-16 rounded-xl bg-white shadow" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Full Stack Web Development with GenAI
                </h3>
              </div>
              <div className="flex justify-between px-8 py-4 bg-white rounded-b-2xl text-gray-600 text-base font-medium">
                  <div>140+ Hrs of content</div>
                    <div>600+ Problems</div>
                      <div>10k+ Learners</div>
                      </div>
                    </div>
             {/* Card 2 */}
                  <div className="bg-blue-50 rounded-2xl shadow-lg w-full max-w-md flex flex-col">
                      <div onClick={() => navigateTo('DataAnalytics')} className="flex items-center gap-4 px-8 py-8 cursor-pointer">
                      <img src={assets.data} alt="Data Analytics with GenAI" className="h-16 w-16 rounded-xl bg-white shadow" />
                     <h3 className="text-xl font-semibold text-gray-800">
                        Data Analytics with GenAI
                     </h3>
                   </div>
                 <div className="flex justify-between px-8 py-4 bg-white rounded-b-2xl text-gray-600 text-base font-medium">
                   <div>100+ Hrs of content</div>
                   <div>300+ Problems</div>
                   <div>2000+ Learners</div>
                 </div>
              </div>
            </div>
          </div>

          {/* IIT Certifications */}

          <div>
            <div className="flex items-center gap-3 text-xl font-semibold mb-2">
             <span><img src={assets.certified} alt="IIT Certifications for graduates" className="h-12 w-auto" /></span>
             <span>IIT Certifications</span>
             <span className="ml-4 px-4 py-1 bg-blue-200 text-blue-700 rounded-full text-base font-medium">For graduates</span>
            </div>
              <div className="flex flex-wrap gap-8 justify-center">
                       {/* Card 1 */}
                <div onClick={() => navigateTo('DataAnalyticsIITGCertificationPage')} className="bg-blue-50 rounded-2xl p-6 flex flex-col items-center w-80 shadow cursor-pointer">
                    <img src={assets.iit1} alt="PG Certification in Data Analytics" className="h-20 w-full object-cover mb-4 rounded" />
                    <h3 className="text-base font-semibold text-center mb-2">
                     PG Certification in Data Analytics with GenAI by E&ICT IIT Guwahati
                    </h3>
                    <span className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full mb-2">6 months</span>
                </div>
                        {/* Card 2 */}
                <div onClick={() => navigateTo('PGDataScienceIIT')}  className="bg-blue-50 rounded-2xl p-6 flex flex-col items-center w-80 shadow cursor-pointer">
                    <img src={assets.iit1} alt="PG Certification in Data Analytics" className="h-20 w-full object-cover mb-4 rounded" />
                    <h3 className="text-base font-semibold text-center mb-2">
                     PG Certification in Data Analytics with GenAI by E&ICT IIT Guwahati
                    </h3>
                    <span className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full mb-2">9 months</span>
                    </div>
                       {/* Card 3 */}
                    <div onClick={() => navigateTo('PGnonTechGenAI')}  className="bg-blue-50 rounded-2xl p-6 flex flex-col items-center w-80 shadow cursor-pointer">
                    <img src={assets.iit2} alt="Advanced Certification in GenAI" className="h-20 w-full object-cover mb-4 rounded" />
                    <h3 className="text-base font-semibold text-center mb-2">
                      Advanced Certification in GenAI for Non-tech
                    </h3>
                    <span className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full mb-2">6 months</span>
                </div>
             </div>
          </div>

          {/* College Students IIT Certifications */}
          <div>
            <div className="flex items-center gap-3 text-xl font-semibold mb-2">
             <span><img src={assets.certified} alt="IIT Certifications for College Students" className="h-12 w-auto" /></span>
             <span>IIT Certifications</span>
             <span className="ml-4 px-4 py-1 bg-blue-200 text-blue-700 rounded-full text-base font-medium">For College Students</span>
            </div>
              <div className="flex flex-wrap gap-8 justify-center">
                       {/* Card 1 */}
                <div onClick={() => navigateTo('IITMDSAInternship')} className="bg-blue-50 rounded-2xl p-6 flex flex-col items-center w-80 shadow cursor-pointer">
                    <img src={assets.iit1} alt="Training and Internship Certification in Advanced DSA" className="h-20 w-full object-cover mb-4 rounded" />
                    <h3 className="text-base font-semibold text-center mb-2">
                     Training and Internship Certification in Advanced DSA
                    </h3>
                    <span className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full mb-2">4 months</span>
                </div>
                        {/* Card 2 */}
                <div onClick={() => navigateTo('DataAnalyticsInternship')} className="bg-blue-50 rounded-2xl p-6 flex flex-col items-center w-80 shadow cursor-pointer">
                    <img src={assets.iit1} alt="Training cum Internship Program in Data Analytics" className="h-20 w-full object-cover mb-4 rounded" />
                    <h3 className="text-base font-semibold text-center mb-2">
                     Training cum Internship Program in Data Analytics
                    </h3>
                    <span className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full mb-2">6 months</span>
                    </div>
                       {/* Card 3 */}
                    <div onClick={() => navigateTo('IITMFSWDInternship')} className="bg-blue-50 rounded-2xl p-6 flex flex-col items-center w-80 shadow cursor-pointer">
                    <img src={assets.iit2} alt="Training and Internship in Full Stack Web Development" className="h-20 w-full object-cover mb-4 rounded" />
                    <h3 className="text-base font-semibold text-center mb-2">
                      Training and Internship in Full Stack Web Development
                    </h3>
                    <span className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full mb-2">9 months</span>
                </div>
             </div>
          </div>

          {/* New Launches */}
          
          <div className="mb-12">
           <div className="flex items-center gap-3 text-xl font-semibold mb-6">
             <img src={assets.star} alt="New Launches" className="h-10 w-10 rounded shadow-lg bg-white p-2" />
             <span>New Launches</span>
             <span className="ml-4 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-base font-medium">For graduates</span>
           </div>
          <div onClick={() => navigateTo('GenAIAdvancedCertificationPage')} className="flex flex-col items-center cursor-pointer">
          <div  className="bg-blue-50 rounded-2xl shadow-lg w-full max-w-3xl">
          <div className="flex items-center gap-4 px-8 py-8">
               <img src={assets.genAI} alt="GenAI & Multi Agent Systems" className="h-16 w-auto rounded-full bg-white shadow" />
               <h3 className="text-2xl font-semibold text-gray-800">
                 Advanced Certification in GenAI & Multi Agent Systems
               </h3>
          </div>
          <div className="flex justify-between px-8 py-4 bg-white rounded-b-2xl text-gray-600 text-base font-medium">
          <div>100+ Hrs of content</div>
          <div>300+ Problems</div>
          <div>500+ Learners</div>
          </div>
          </div>
          </div>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-16 text-7xl">
          Your dream role, faster and with confidence!
        </p>
      </section>

      {/* Coding Ninjas Advantage */}
      <section className="bg-black text-white py-16 px-6">
        <h2 className="text-center text-blue-400 font-bold mb-8">
          The Coding Ninjas advantage
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-center border-separate border-spacing-y-4">
            <thead>
              <tr>
                <th></th>
                <th className="text-orange-500">Coding Ninja </th>
                <th>Free Resources</th>
                <th>Other Courses</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Structured + problem solving based",
                "Fastest 1:1 doubt support",
                "Integrated prep platform",
                "Profiles highlighted on Naukri",
              ].map((item, index) => (
                <tr key={index} className="text-white">
                  <td className="text-left pl-2">{item}</td>
                  <td>✅</td>
                  <td>{index === 0 ? "❌" : "❌"}</td>
                  <td>{index === 0 ? "✅" : "❌"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            1,00,000+ Coding Ninja Alumni from 1,100+ Companies & 4,400+ colleges working in Top product Companies
          </p>
          <div className="flex justify-center gap-8 mt-4 text-yellow-400">
                    {/* Rating Card 1 */}
          <div className="bg-black rounded-xl shadow-lg p-6 w-full max-w-sm flex flex-col items-center text-center">
            <div className="flex items-center justify-center mb-4">
              {/* You might use an actual icon here, or just text */}
              <img src={assets.facebook} alt="Google Rating" className="h-12 w-12 rounded-full mr-2" />
              <span className="text-4xl font-bold text-yellow-400">4.9</span>
            </div>
            <p className="text-lg text-gray-700">700+ reviews</p>
          </div>

          {/* Rating Card 2 (Google) */}
          <div className="bg-black rounded-xl shadow-lg p-6 w-full max-w-sm flex flex-col items-center text-center">
            <div className="flex items-center justify-center mb-4">
              <img src={assets.google} alt="Google Rating" className="h-12 w-12 rounded-full mr-2" />
              <span className="text-4xl font-bold text-yellow-400">4.7</span>
            </div>
            <p className="text-lg text-gray-700">2300+ reviews</p>
          </div>

          {/* Rating Card 3 (Course Rating) */}
          <div className="bg-black rounded-xl shadow-lg p-6 w-full max-w-sm flex flex-col items-center text-center">
            <div className="flex items-center justify-center mb-4">
              <img src={assets.codingninja} alt="Course Rating" className="h-12 w-12 rounded-full mr-2" />
              <span className="text-4xl font-bold text-yellow-400">4.8</span>
            </div>
            <p className="text-lg text-gray-700">Course rating</p>
          </div>  
          </div>
        </div>
      </section>

      
      {/* 3-Stage Learning Model Section */}
      <section className="bg-white text-black py-16 px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-lg font-semibold mb-6">
              A 3-stage learning model to turn you into coding ninja
            </h3>
            <ul className="space-y-6">
              <li
                onMouseEnter={() => setHoveredSection("learn")}
                className="cursor-pointer border-l-4 pl-3 hover:text-blue-600"
              >
                <strong>Learn</strong>
                <p className="text-sm text-gray-600">
                  Experience seamless learning with problem solving modules, leaderboard and awards.
                </p>
              </li>
              <li
                onMouseEnter={() => setHoveredSection("excel")}
                className="cursor-pointer border-l-4 pl-3 hover:text-blue-600"
              >
                <strong>Excel</strong>
                <p className="text-sm text-gray-600">
                  Track your skill level and make meaningful progress for you to grow
                </p>
              </li>
              <li
                onMouseEnter={() => setHoveredSection("standout")}
                className="cursor-pointer border-l-4 pl-3 hover:text-blue-600"
              >
                <strong>Standout</strong>
                <p className="text-sm text-gray-600">
                  Standout to recruiters, showcase ratings, get feedback and interview insights.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <img src={getImage()} alt="stage-illustration" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Doubt Resolution Section */}
      <section className="bg-black text-white text-center px-6 py-16">
        <div className="flex items-center gap-4 px-8 py-8">
                      <img src={assets.heart} alt="Data Analytics with GenAI" className="h-10 w-auto rounded-2xl bg-white shadow" />
                     <h3 className="text-xl font-semibold text-amber-200">
                        Always available when you get stuck
                     </h3>
          </div>
        <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight px-24 text-emerald-300 hover:text-blue-50 transition-colors duration-300">
              Resolve doubts any time through chat, voice notes or calling.
        </h3>
        <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight px-24 text-emerald-300 hover:text-blue-50 transition-colors duration-300">
          500+ dedicated Teaching Assistants to resolve your doubts quickly
        </h3>
        <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight px-24 text-emerald-300 hover:text-blue-50 transition-colors duration-300">
          5/5 rating for 90% doubt resolutions
        </h3>
      </section>

      {/* NSDC Partnership Section */}
      <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Certificate Image */}
          <div className="flex-shrink-0">
            <img
              src={assets.certificate}
              alt="Certificate of Partnership"
              className="w-full md:w-auto h-48 md:h-64 object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-xl">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
              We are an approved training partner of NSDC under their scheme for market led fee-based services
            </p>
          </div>
        </div>
      </div>
      </section>
    </div>
    
  );
};

export default Homepage;
