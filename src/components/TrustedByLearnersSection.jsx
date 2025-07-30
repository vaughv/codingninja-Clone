import React from "react";
import { assets } from "../assets";


const TrustedByLearnersSection = () => {
    return (
            <div className="text-center mt-8">
              <p className="text-sm text-gray-400">
                1,00,000+ Coding Ninja Alumni from 1,100+ Companies & 4,400+ colleges working in Top product Companies
              </p>
              <div className="flex justify-center gap-8 mt-4 text-yellow-400">
                        {/* Rating Card 1 */}
              <div className="bg-emerald-200 rounded-xl shadow-lg p-6 w-full max-w-sm flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-4">
                  {/* You might use an actual icon here, or just text */}
                  <img src={assets.facebook} alt="Google Rating" className="h-12 w-12 rounded-full mr-2" />
                  <span className="text-4xl font-bold text-yellow-400">4.9</span>
                </div>
                <p className="text-lg text-gray-700">700+ reviews</p>
              </div>
    
              {/* Rating Card 2 (Google) */}
              <div className="bg-emerald-200  rounded-xl shadow-lg p-6 w-full max-w-sm flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-4">
                  <img src={assets.google} alt="Google Rating" className="h-12 w-12 rounded-full mr-2" />
                  <span className="text-4xl font-bold text-white-200 text-yellow-400">4.7</span>
                </div>
                <p className="text-lg text-gray-700">2300+ reviews</p>
              </div>
    
              {/* Rating Card 3 (Course Rating) */}
              <div className="bg-emerald-200  rounded-xl shadow-lg p-6 w-full max-w-sm flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-4">
                  <img src={assets.codingninja} alt="Course Rating" className="h-12 w-12 rounded-full mr-2" />
                  <span className="text-4xl font-bold text-yellow-400">4.8</span>
                </div>
                <p className="text-lg text-gray-700">Course rating</p>
              </div>  
              </div>
            </div>
    );
}

export default TrustedByLearnersSection;