import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, BookOpen, Layers, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const ProjectCard = ({ project, onOpenCaseStudy, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-card rounded-2xl border border-white/5 bg-[#111827]/40 flex flex-col h-full overflow-hidden group relative"
    >
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        {/* Header Tag and Links */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/15">
            {project.tag}
          </span>
          <div className="flex gap-2.5">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white p-1 hover:bg-white/5 rounded transition-all"
              title="GitHub Repository"
            >
              <Github size={18} />
            </a>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white p-1 hover:bg-white/5 rounded transition-all"
                title="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Badges (Subtle Line-bordered) */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.split(', ').slice(0, 4).map((techName) => (
            <span 
              key={techName}
              className="text-[10px] font-semibold text-slate-500 font-mono"
            >
              #{techName.replace(/\s+/g, '')}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="text-xs font-bold text-white hover:text-accent transition-colors flex items-center gap-1.5 group/btn"
          >
            <BookOpen size={14} className="text-accent" />
            Case Study
            <motion.span 
              className="inline-block"
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
            >
              →
            </motion.span>
          </button>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-accent hover:text-white transition-colors flex items-center gap-1"
            >
              Live Demo <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Hover background sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

// Case Study Modal Overlay Component
const CaseStudyModal = ({ project, onClose }) => {
  const study = project.caseStudy;

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Lock background scrolling

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Unlock scrolling
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="w-full max-w-4xl bg-[#0B1120] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner header */}
        <div className="relative p-6 sm:p-8 border-b border-white/5 bg-gradient-to-tr from-[#111827] to-[#0B1120] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-[10px] font-extrabold tracking-wider uppercase text-accent bg-accent/15 px-2.5 py-1 rounded-full border border-accent/20">
              {project.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2.5">
              {project.title}
            </h2>
          </div>
          
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl text-white flex items-center gap-1.5 transition-all"
            >
              <Github size={14} /> Repository
            </a>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable details content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-8">
          {/* Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Project Overview</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {study.overview}
              </p>
            </div>
            <div className="space-y-4 bg-white/3 border border-white/5 p-5 rounded-2xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Tech Stack</h3>
              <div className="flex flex-wrap gap-1.5">
                {study.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-white/5" />

          {/* Problem vs Solution splits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-red-500/80">The Problem</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {study.problem}
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500/80">The Solution</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>

          <hr className="border-white/5" />

          {/* Key Features list */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Key Functional Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {study.keyFeatures.map((feat, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-white/5" />

          {/* Challenges vs Future improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-500/80">Engineering Challenges</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {study.challenges}
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-accent">Future Improvements</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {study.improvements}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/5 bg-[#111827]/40 flex justify-end gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-accent hover:bg-accent/80 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              Launch Demo <ExternalLink size={14} />
            </a>
          )}
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all border border-white/5"
          >
            Close Case Study
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              project={project} 
              index={idx}
              onOpenCaseStudy={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal Dialog Portal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
