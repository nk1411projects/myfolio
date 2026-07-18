import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen text-text-primary scroll-smooth selection:bg-accent/30 overflow-x-hidden">
      {/* Global Interactive Neural Network Canvas Background */}
      <NeuralNetworkBackground />

      {/* Smooth Cursor Follower (Self-disables on Touch screens) */}
      <CustomCursor />

      {/* Navigation Headers */}
      <Navbar />

      {/* Primary Page Content Grid */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* Achievements Section containing Education and Cisco Certifications */}
        <div id="achievements">
          <Education />
        </div>
        <GithubSection />
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}

export default App;
