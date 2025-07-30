import React, { useState } from 'react'
import {assets} from '../assets'

const Navbar = ({ navigateTo }) => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-4 flex justify-between items-center font-sans z-50">
      {/* Logo */}
      <div className="text-xl font-semibold flex items-center space-x-2">
        <div><img src={assets.logo} className="h-10 w-auto" /></div>
        <span onClick={() => navigateTo('Homepage')} className="text-gray-800">codingninjas</span>
      </div>

      {/* Center Menu */}
      <div className="flex space-x-6 text-gray-800 font-medium relative">
        {/* Job Bootcamp */}
        <div
          className="relative"
          onMouseEnter={() => setHoveredMenu('bootcamp')}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <button className="flex items-center gap-1">
            Job Bootcamp <span>▼</span>
          </button>
          {hoveredMenu === 'bootcamp' && (
            <div className="absolute top-full left-0 w-72 bg-white shadow-lg rounded-md p-4 z-50">
              <div onClick={() => navigateTo('Fullstack')}  className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Full Stack Web Development with GenAI</div>
              <div onClick={() => navigateTo('DataAnalytics')} className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Data Analytics with GenAI</div>
            </div>
          )}
        </div>

        {/* IIT Certifications */}
        <div
          className="relative"
          onMouseEnter={() => setHoveredMenu('iit')}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <button className="flex items-center gap-1">
            IIT Certifications <span>▼</span>
          </button>
          {hoveredMenu === 'iit' && (
            <div className="absolute top-full left-0  w-96 bg-white shadow-lg rounded-md p-4 z-50">
              <div className="font-semibold text-gray-500 mb-2">For graduates</div>
              <div onClick={() => navigateTo('DataAnalyticsIITGCertificationPage')} className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                PG Certification in Data Analytics with GenAI
              </div>
              <div onClick={() => navigateTo('PGDataScienceIIT')}  className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                PG Certification in Data Science with GenAI
              </div>
              <div onClick={() => navigateTo('PGnonTechGenAI')} className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                Advanced Certification in GenAI for Non-Tech Professionals
              </div>
            </div>
          )}
        </div>

        {/* New Launches */}
        <div
          className="relative"
          onMouseEnter={() => setHoveredMenu('launches')}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <button className="flex items-center gap-1">
            New Launches <span>▼</span>
          </button>
          {hoveredMenu === 'launches' && (
            <div className="absolute top-full left-0  w-96 bg-white shadow-lg rounded-md p-4 z-50">
              <div className="font-semibold text-gray-500 mb-2">For graduates</div>
              <div onClick={() => navigateTo('GenAIAdvancedCertificationPage')} className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                Advanced Certification in GenAI & Multi Agent Systems
              </div>
              <div className="text-blue-500 text-sm mt-1 px-3">Certified by Coding Ninjas</div>
            </div>
          )}
        </div>
      </div>

      {/* Login Button */}
      <div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;