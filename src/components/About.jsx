import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const About = () => {

  return (
    <section id="about" className="py-24 px-6 overflow-hidden relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Right: profile photo container */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] group"
            >
              {/* Core glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-secondary-accent rounded-3xl blur-[20px] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              
              {/* Outer frame */}
              <div className="absolute inset-0 rounded-3xl border border-white/5 bg-gradient-to-tr from-white/5 to-transparent p-3 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/5 relative bg-[#0b0c14]">
                  <img 
                    src={profileImg} 
                    alt="Nithish Kumar G" 
                    className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  {/* Glass sheen overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6]/10 via-transparent to-[#8b5cf6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </div>

              {/* Float decors */}
              <div className="absolute bottom-[-10px] right-[-10px] w-20 h-20 rounded-full bg-accent/10 blur-xl pointer-events-none" />
              <div className="absolute top-[-10px] left-[-10px] w-20 h-20 rounded-full bg-secondary-accent/10 blur-xl pointer-events-none" />
            </motion.div>
          </div>

          {/* Left: Summary and Stats Grid */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg text-left"
            >
              <p>
                I am a <strong className="text-white font-semibold">Full Stack Developer</strong> currently pursuing MCA, passionate about building modern web applications, scalable REST APIs, and responsive digital solutions using the <strong className="text-white font-semibold">MERN Stack</strong> (MongoDB, Express, React, Node.js), <strong className="text-white font-semibold">Python</strong>, and <strong className="text-white font-semibold">FastAPI</strong>.
              </p>
              <p>
                My expertise spans both interactive frontend interfaces crafted with React and Tailwind CSS, and robust backend engineering with Node.js and FastAPI. I focus on developing clean, maintainable architectures, secure JWT authentication workflows, and optimized database solutions across MongoDB and MySQL.
              </p>
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
