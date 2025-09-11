import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

export default function HomePage() {
  return (
    <div className="App">
      <SEOHead language="zh" />
      <GoogleAnalytics measurementId="G-2BP8P2D683" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}