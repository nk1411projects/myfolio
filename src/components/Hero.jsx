import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const brainNodes = [
  { x: 55, y: 55, size: 2.5, delay: '0.2s' },
  { x: 70, y: 40, size: 2, delay: '0.7s' },
  { x: 85, y: 35, size: 3.5, delay: '1.2s' },
  { x: 60, y: 70, size: 3, delay: '0.4s' },
  { x: 80, y: 65, size: 2, delay: '0.9s' },
  { x: 100, y: 55, size: 3, delay: '0.1s' },
  { x: 50, y: 85, size: 2, delay: '1.5s' },
  { x: 70, y: 90, size: 3.5, delay: '1.8s' },
  { x: 105, y: 30, size: 3, delay: '0.5s' },
  { x: 125, y: 32, size: 2, delay: '0.8s' },
  { x: 145, y: 40, size: 3.5, delay: '1.4s' },
  { x: 160, y: 55, size: 3, delay: '0.6s' },
  { x: 170, y: 75, size: 2, delay: '1.1s' },
  { x: 120, y: 50, size: 3, delay: '2.0s' },
  { x: 140, y: 60, size: 2, delay: '0.3s' },
  { x: 155, y: 75, size: 3.5, delay: '0.9s' },
  { x: 90, y: 105, size: 3, delay: '0.8s' },
  { x: 110, y: 100, size: 2, delay: '1.3s' },
  { x: 130, y: 105, size: 3, delay: '0.6s' },
  { x: 100, y: 120, size: 2, delay: '1.7s' },
  { x: 120, y: 120, size: 3.5, delay: '0.2s' },
  { x: 150, y: 110, size: 3, delay: '1.1s' },
  { x: 165, y: 105, size: 2, delay: '1.6s' },
  { x: 145, y: 128, size: 3, delay: '0.7s' },
  { x: 163, y: 125, size: 2, delay: '2.1s' },
  { x: 115, y: 138, size: 3.5, delay: '0.4s' },
  { x: 120, y: 155, size: 3, delay: '1.0s' }
];

const brainConnections = [];
for (let i = 0; i < brainNodes.length; i++) {
  for (let j = i + 1; j < brainNodes.length; j++) {
    const dx = brainNodes[i].x - brainNodes[j].x;
    const dy = brainNodes[i].y - brainNodes[j].y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 32) {
      brainConnections.push({
        x1: brainNodes[i].x,
        y1: brainNodes[i].y,
        x2: brainNodes[j].x,
        y2: brainNodes[j].y,
        delay: ((i + j) % 10) * 0.2 + 's',
        isSignal: (i + j) % 5 === 0
      });
    }
  }
}

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenRoles = 2000;

  // Typewriter effect logic
  useEffect(() => {
    let timer;
    const rolesList = ["Full Stack Developer", "AI Enthusiast"];
    const currentRole = rolesList[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenRoles);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % rolesList.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Handle interactive 3D blob hover coordinates
  const blobRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!blobRef.current) return;
    const rect = blobRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 75,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden relative"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Introduction and CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
              Hi, I'm <br />
              <span className="gradient-text">Nithish Kumar</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-200 h-10 flex items-center">
              <span>{displayText}</span>
              <span className="w-[3px] h-[30px] bg-accent ml-1.5 animate-[ping_0.8s_infinite] inline-block" />
            </h2>

            <p className="text-base sm:text-lg text-text-muted mb-10 max-w-xl leading-relaxed">
              Building Full stack applications and AI applications that solve real-world problems.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-4 rounded-xl bg-accent text-white font-bold flex items-center gap-2 hover:bg-accent/80 transition-all shadow-lg shadow-accent/20 group hover:-translate-y-0.5"
            >
              Contact Me 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={portfolioData.resume}
              download="Nithish_Kumar_Resume.pdf"
              className="px-6 py-4 rounded-xl glass-card text-white font-bold flex items-center gap-2 hover:bg-white/5 transition-all hover:-translate-y-0.5 border border-white/10 hover:border-white/20"
            >
              Resume 
              <Download size={18} />
            </a>

            <div className="flex items-center gap-2 glass-card px-4 py-4 rounded-xl border border-white/5">
              <a 
                href={portfolioData.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white hover:scale-110 p-1 transition-all"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <div className="w-[1px] h-4 bg-white/15" />
              <a 
                href={portfolioData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white hover:scale-110 p-1 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Detailed Brain Neural Network */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[350px] sm:h-[450px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            ref={blobRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center cursor-grab"
            style={{
              x: mousePos.x,
              y: mousePos.y,
              transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          >
            {/* Inline keyframe animations */}
            <style>{`
              @keyframes pulse-node {
                0%, 100% { transform: scale(1); opacity: 0.7; }
                50% { transform: scale(1.3); opacity: 1; filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.8)); }
              }
              @keyframes pulse-line {
                0%, 100% { opacity: 0.15; }
                50% { opacity: 0.4; }
              }
              @keyframes signal-flow {
                to { stroke-dashoffset: -40; }
              }
              .neural-node {
                transform-origin: center;
                animation: pulse-node 3s infinite ease-in-out;
              }
              .neural-line {
                animation: pulse-line 4s infinite ease-in-out;
              }
              .signal-line {
                stroke-dasharray: 4, 12;
                animation: signal-flow 2s infinite linear;
              }
            `}</style>

            {/* Glowing background */}
            <div className="absolute w-[90%] h-[90%] bg-gradient-to-tr from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-full blur-[50px] opacity-35 animate-pulse-glow" />

            {/* Main Circle Container containing Brain SVG */}
            <div className="absolute w-[95%] h-[95%] rounded-full border border-white/5 bg-[#090D1A]/50 backdrop-blur-2xl flex items-center justify-center p-4 shadow-2xl hover:border-accent/25 transition-colors overflow-hidden">
              
              {/* Detailed Brain SVG */}
              <svg 
                viewBox="35 20 145 145" 
                className="w-full h-full opacity-85 select-none"
              >
                {/* Brain Silhouette Path in background */}
                <path 
                  d="M 55,85 C 35,65 35,45 55,40 C 70,30 85,25 100,30 C 120,25 145,30 160,45 C 175,60 175,80 160,95 C 165,105 160,120 145,130 C 135,135 120,130 115,125 C 115,140 110,155 100,155 C 95,140 95,125 95,120 C 80,120 65,110 60,100 C 50,100 45,90 45,85 Z" 
                  fill="url(#brain-glow-fill)"
                  stroke="url(#brain-glow-stroke)"
                  strokeWidth="1.5"
                  strokeOpacity="0.12"
                  className="transition-opacity duration-300"
                />

                <defs>
                  <linearGradient id="brain-glow-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.04" />
                  </linearGradient>
                  <linearGradient id="brain-glow-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>

                {/* Synaptic Connections (Lines) */}
                {brainConnections.map((conn, idx) => (
                  <g key={`conn-${idx}`}>
                    <line
                      x1={conn.x1}
                      y1={conn.y1}
                      x2={conn.x2}
                      y2={conn.y2}
                      stroke="rgba(147, 197, 253, 0.2)"
                      strokeWidth="0.8"
                      className="neural-line"
                      style={{ animationDelay: conn.delay }}
                    />
                    {conn.isSignal && (
                      <line
                        x1={conn.x1}
                        y1={conn.y1}
                        x2={conn.x2}
                        y2={conn.y2}
                        stroke="#60A5FA"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        className="signal-line"
                      />
                    )}
                  </g>
                ))}

                {/* Neurons (Nodes) */}
                {brainNodes.map((node, idx) => (
                  <circle
                    key={`node-${idx}`}
                    cx={node.x}
                    cy={node.y}
                    r={node.size}
                    fill="url(#brain-glow-stroke)"
                    className="neural-node"
                    style={{ 
                      animationDelay: node.delay,
                      animationDuration: '2.5s'
                    }}
                  />
                ))}
              </svg>

              {/* Glassmorphic Code Snippet Overlay */}
              <div className="absolute w-[80%] max-w-[260px] rounded-2xl border border-white/10 bg-[#0d1527]/75 backdrop-blur-md p-4 shadow-xl flex flex-col justify-center items-center text-center">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent to-secondary-accent flex items-center justify-center text-white font-black text-sm mb-3 shadow-md shadow-accent/10">
                  AI
                </div>
                <code className="text-[10px] sm:text-xs text-accent font-mono mb-1 w-full text-left">const developer = &#123;</code>
                <code className="text-[10px] sm:text-xs text-slate-300 font-mono ml-4 w-full text-left">status: "MCA Student",</code>
                <code className="text-[10px] sm:text-xs text-slate-300 font-mono ml-4 w-full text-left">focus: "FullStack &amp; AI"</code>
                <code className="text-[10px] sm:text-xs text-accent font-mono w-full text-left">&#125;;</code>
              </div>
            </div>

            {/* Orbiting Particle Rings */}
            <div className="absolute w-[110%] h-[110%] rounded-full border border-dashed border-white/5 animate-orbit pointer-events-none" />
            <div className="absolute w-[110%] h-[110%] rounded-full pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-accent shadow-[0_0_12px_#3B82F6]" />
            </div>

            <div className="absolute w-[122%] h-[122%] rounded-full border border-dashed border-white/5 animate-orbit-reverse pointer-events-none" />
            <div className="absolute w-[122%] h-[122%] rounded-full pointer-events-none" style={{ animation: 'orbit-reverse 45s infinite linear' }}>
              <div className="absolute bottom-0 right-1/4 w-2.5 h-2.5 rounded-full bg-secondary-accent shadow-[0_0_12px_#8B5CF6]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
