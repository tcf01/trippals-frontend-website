import React from 'react';
import './i18n';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  return (
    <div className="App">
      <SEOHead language={i18n.language} />
      <GoogleAnalytics measurementId="G-2BP8P2D683" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        {/* <Testimonials /> */}
        {/* <Download /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
