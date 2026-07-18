import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Target, Search, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const exp = portfolioData.experience;

  const activities = [
    { 
      icon: Zap, 
      title: 'Full Stack Integrations', 
      desc: 'Developing responsive web platforms utilizing React, Express.js, Node.js, and MongoDB/MySQL for freelance clients.' 
    },
    { 
      icon: Target, 
      title: 'Custom API Architectures', 
      desc: 'Constructing robust backend endpoints and async API routes using FastAPI and REST standards for rapid data flow.' 
    },
    { 
      icon: Search, 
      title: 'Intelligent AI Applications', 
      desc: 'Integrating NLP parsers, ML classifier models, and SHAP explainability matrices directly into web dashboards.' 
    },
    { 
      icon: BookOpen, 
      title: 'Continuous Optimization', 
      desc: 'Deploying secure user sessions, JWT cookie validations, and applying role-based protections (RBAC) on server models.' 
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#0B1120]/20 relative border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Primary Experience Block */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 bg-[#111827]/40 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-white">{exp.title}</h3>
                  <span className="text-xs text-accent font-semibold font-mono bg-accent/10 px-2 py-0.5 rounded mt-1.5 inline-block">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 text-left">
                {exp.description}
              </p>

              <div className="space-y-4 text-left">
                {exp.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_6px_#3B82F6]" />
                    <p className="text-slate-400 text-xs leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Focus Activities */}
          <div className="lg:col-span-6 space-y-4">
            {activities.map((act, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 6 }}
                className="glass-card p-5 rounded-2xl border border-white/5 bg-[#111827]/30 hover:border-accent/10 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                  <act.icon size={18} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-white mb-1">{act.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{act.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
