import React from 'react';
import './i18n';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

import HowItWorks from './components/HowItWorks';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
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
