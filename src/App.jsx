import React from "react";
import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Homepage from "./components/homepage";
import Bot from "./components/Chatbot"; // 
import Fullstack from "./components/Fullstack";
import DataAnalytics from "./components/Data-analytics";
import DataAnalyticsIITGCertificationPage from "./components/PG-data-analyticsIIT"
import PGDataScienceIIT from "./components/PG-data-scienceIIT";
import PGnonTechGenAI from "./components/PG-nonTechGenAI"; 
import GenAIAdvancedCertificationPage  from "./components/GenAIAdvancedCertificationPage";
import IITMDSAInternship from "./components/IITMDSAInternship"; 
import DataAnalyticsInternship from "./components/DataAnalyticsInternship";
import IITMFSWDInternship from "./components/IITMFSWDInternship"; 


const App = () => {
 const [currentPage, setCurrentPage] = useState('home'); // Default to 'home'

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage navigateTo={navigateTo} />;
      case 'Fullstack':
        return <Fullstack navigateTo={navigateTo} />;
      case 'DataAnalytics': // New case for Data Analytics page
        return <DataAnalytics navigateTo={navigateTo} />;
      case 'DataAnalyticsIITGCertificationPage':
        return <DataAnalyticsIITGCertificationPage navigateTo={navigateTo} />;
      case 'PGDataScienceIIT':
        return <PGDataScienceIIT navigateTo={navigateTo} />;
      case 'PGnonTechGenAI':
        return <PGnonTechGenAI navigateTo={navigateTo} />;
      case 'GenAIAdvancedCertificationPage':
        return <GenAIAdvancedCertificationPage navigateTo={navigateTo} />;
      case 'IITMDSAInternship':
        return <IITMDSAInternship navigateTo={navigateTo} />;
      case 'DataAnalyticsInternship':
        return <DataAnalyticsInternship navigateTo={navigateTo} />;
      case 'IITMFSWDInternship':
        return <IITMFSWDInternship navigateTo={navigateTo} />;
      // Add more cases as needed for other pages
      default:
        return <Homepage navigateTo={navigateTo} />; // Fallback to home
    }
  };

  return (
    <div className="relative min-h-screen">
      <Navbar navigateTo={navigateTo} />
      <div className="pt-20">
      <main>
          {renderPage()} 
      </main>
      <Footer/>
      </div>
      <Bot /> 
    </div>
  );
}

export default App;
