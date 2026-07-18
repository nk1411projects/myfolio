import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-[#050816]/40 relative border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Academic Timeline */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <GraduationCap size={20} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Academic <span className="gradient-text">Journey</span>
              </h2>
            </div>

            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/5">
              {portfolioData.education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050816] border-2 border-accent flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent/10 transition-colors">
                    <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                      <h3 className="text-lg font-extrabold text-white leading-tight">{edu.degree}</h3>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded font-mono">
                        <Calendar size={10} /> {edu.duration}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-slate-300 mb-2">{edu.institution}</p>
                    
                    {edu.grade && (
                      <p className="text-xs text-slate-400 mb-3">
                        Result: <span className="text-white font-bold">{edu.grade}</span>
                      </p>
                    )}
                    
                    {edu.status && (
                      <span className="px-2.5 py-0.5 rounded bg-success/15 border border-success/20 text-success text-[10px] font-bold tracking-wide uppercase inline-block mb-3">
                        {edu.status}
                      </span>
                    )}

                    <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                      {edu.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Cisco Certifications */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-lg bg-secondary-accent/10 flex items-center justify-center text-secondary-accent">
                <Award size={20} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Technical <span className="gradient-text">Certifications</span>
              </h2>
            </div>

            <div className="space-y-6">
              {portfolioData.certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 rounded-2xl border border-white/5 bg-[#111827]/30 hover:border-secondary-accent/20 transition-all flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary-accent shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">
                      {cert.issuer}
                    </span>
                    <h3 className="text-base font-extrabold text-white mb-2 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
