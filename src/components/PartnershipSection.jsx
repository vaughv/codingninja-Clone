import React from "react";
import { assets }  from "../assets";

const PartnershipSection = () => {
    return (
            
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


    );
}

export default PartnershipSection;