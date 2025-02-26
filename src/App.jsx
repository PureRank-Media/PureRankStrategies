// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import HeroSection from './components/HeroSection';
import FrameworkSection from './components/FrameworkSection';
import AutomationSection from './components/AutomationSection';
import CaseStudies from './components/CaseStudies';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<>
                <HeroSection />
                <FrameworkSection />
                <AutomationSection />
                <CaseStudies />
                <AboutUs />
                <ContactSection />
            </>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <ConditionalFooter />
      </div>
    </Router>
  );
}

function ConditionalFooter() {
  const location = useLocation();
  // Check if the current route is PrivacyPolicy or TOS, if it's not render.
  if (location.pathname !== '/privacy-policy' && location.pathname !== '/terms-of-service') {
      return <Footer />;
  }
  return null;
}

export default App;