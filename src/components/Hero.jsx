import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Download, Code2, Terminal, Layers, Database, Server } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

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
    const rolesList = [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Python & FastAPI Developer"
    ];
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
    setMousePos({ x: x * 0.12, y: y * 0.12 });
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
              Building modern Full Stack web applications, MERN solutions, and robust APIs with Python &amp; FastAPI to solve real-world problems.
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

        {/* Right: Modern Full Stack Developer Console Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[380px] sm:h-[460px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            ref={blobRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-[320px] sm:w-[420px] flex items-center justify-center cursor-grab"
            style={{
              x: mousePos.x,
              y: mousePos.y,
              transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          >
            {/* Glowing ambient background */}
            <div className="absolute w-[95%] h-[95%] bg-gradient-to-tr from-[#3B82F6]/20 via-[#6366F1]/15 to-[#8B5CF6]/20 rounded-3xl blur-[50px] opacity-40 animate-pulse-glow" />

            {/* Central Terminal / IDE Card */}
            <div className="relative w-full rounded-2xl border border-white/10 bg-[#090D1A]/85 backdrop-blur-xl shadow-2xl overflow-hidden hover:border-accent/30 transition-all duration-300">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0D1527]/90">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Code2 size={13} className="text-accent" />
                  <span>developer.config.js</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">UTF-8</div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-left space-y-2">
                <div className="text-slate-500">// Full Stack &amp; Backend Architecture</div>
                <div>
                  <span className="text-purple-400 font-semibold">const</span>{' '}
                  <span className="text-blue-300 font-semibold">developer</span>{' '}
                  <span className="text-white">=</span>{' '}
                  <span className="text-white">&#123;</span>
                </div>
                
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-400">"{portfolioData.name}"</span>,
                </div>
                
                <div className="pl-4">
                  <span className="text-slate-400">specialization:</span>{' '}
                  <span className="text-emerald-400">"Full Stack &amp; MERN"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-slate-400">backend:</span>{' '}
                  <span className="text-white">[</span>
                  <span className="text-amber-300">"Node.js"</span>,{' '}
                  <span className="text-amber-300">"Express"</span>,{' '}
                  <span className="text-amber-300">"FastAPI"</span>,{' '}
                  <span className="text-amber-300">"Python"</span>
                  <span className="text-white">]</span>,
                </div>

                <div className="pl-4">
                  <span className="text-slate-400">frontend:</span>{' '}
                  <span className="text-white">[</span>
                  <span className="text-cyan-300">"React"</span>,{' '}
                  <span className="text-cyan-300">"TailwindCSS"</span>
                  <span className="text-white">]</span>,
                </div>

                <div className="pl-4">
                  <span className="text-slate-400">databases:</span>{' '}
                  <span className="text-white">[</span>
                  <span className="text-emerald-300">"MongoDB"</span>,{' '}
                  <span className="text-emerald-300">"MySQL"</span>
                  <span className="text-white">]</span>,
                </div>

                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-accent font-semibold">"Ready to Build"</span>
                </div>

                <div className="text-white">&#125;;</div>

                {/* Status Bar */}
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>REST APIs Active</span>
                  </div>
                  <span className="text-slate-500 font-mono">FastAPI • MERN • JWT</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Chips */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card px-3.5 py-1.5 rounded-xl border border-white/10 bg-[#111827]/90 shadow-xl flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                <Server size={13} />
              </div>
              <span className="text-xs font-semibold text-white">FastAPI &amp; Python</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card px-3.5 py-1.5 rounded-xl border border-white/10 bg-[#111827]/90 shadow-xl flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Database size={13} />
              </div>
              <span className="text-xs font-semibold text-white">MongoDB &amp; MySQL</span>
            </motion.div>

            {/* Orbiting Particle Rings */}
            <div className="absolute w-[114%] h-[114%] rounded-3xl border border-dashed border-white/5 animate-orbit pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
