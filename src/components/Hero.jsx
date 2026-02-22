import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';


const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="text-center max-w-4xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="px-4 py-1.5 rounded-full glass text-sm font-medium text-indigo-400 mb-6 inline-block">
                        Available for new opportunities
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Building secure & scalable <br />
                        <span className="gradient-text">web applications.</span>
                    </h1>
                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto min-h-[4rem]">
                        {/* Static "Hi, I'm" followed by animated name and description */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-white font-semibold"
                        >
                            Hi, I'm {portfolioData.name}.{" "}
                        </motion.span>
                        {"Turning ideas into reliable full-stack web solutions using the MERN stack.".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.05,
                                    delay: 1.5 + index * 0.03, // Start after the name is shown
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    <a
                        href={portfolioData.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-xl bg-primary text-white font-medium flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                        Resume <FileText size={18} />
                    </a>
                    <div className="flex items-center gap-3 glass px-6 py-3 rounded-xl">
                        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <div className="w-[1px] h-4 bg-white/10" />
                        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <div className="w-[1px] h-4 bg-white/10" />
                        <a href={`mailto:${portfolioData.email}`} className="text-slate-400 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
