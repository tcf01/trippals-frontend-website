import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import TripRedirect from './components/TripRedirect';
import { SEOHead } from './components/SEOHead';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { useTranslation } from 'react-i18next';

// Landing Page Component
function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        {/* <Testimonials /> */}
        {/* <Download /> */}
      </main>
      <Footer />
    </>
  );
}

function App() {
  const { i18n } = useTranslation();

  return (
    <div className="App">
      <SEOHead language={i18n.language} />
      <GoogleAnalytics measurementId="G-2BP8P2D683" />
      <Router>
        <Routes>
          {/* Main landing page */}
          <Route path="/" element={<LandingPage />} />

          {/* Trip redirect proxy */}
          <Route path="/trip/:roomId" element={<TripRedirect />} />

          {/* Fallback for unknown routes - redirect to home */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
