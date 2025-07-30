import React from 'react';
import { assets } from '../assets';


const DoubtResolutionSection = () => {
  return (
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
  );
}

export default DoubtResolutionSection;