import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 scroll-smooth">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full opacity-50" />
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[50%] bg-indigo-500/10 blur-[100px] rounded-full opacity-30" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full opacity-40" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
