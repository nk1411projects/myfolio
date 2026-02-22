import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Calendar, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const CertificationItem = ({ cert }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isObject = typeof cert === 'object';

    return (
        <motion.div
            layout
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="p-6 rounded-2xl glass flex flex-col group transition-all duration-300"
        >
            <div className="flex items-center justify-between cursor-default">
                <span className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">
                    {isObject ? cert.title : cert}
                </span>
                {isObject && (
                    <motion.div
                        animate={{ rotate: isHovered ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown size={18} className="text-slate-500 group-hover:text-primary" />
                    </motion.div>
                )}
            </div>

            <AnimatePresence>
                {isObject && isHovered && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <ul className="mt-4 space-y-3 border-t border-white/5 pt-4">
                            {cert.points.map((point, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-sm text-slate-400 flex items-start gap-3"
                                >
                                    <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary" />
                                    {point}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-24 px-6 bg-[#0c0c0e]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Education Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                <GraduationCap size={24} />
                            </div>
                            <h2 className="text-3xl font-bold">Academic <span className="gradient-text">Journey</span></h2>
                        </div>

                        <div className="space-y-8">
                            {portfolioData.education.map((edu, idx) => (
                                <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-white/5 hover:before:bg-primary transition-all">
                                    <div className="absolute left-[-5px] top-0 w-[12px] h-[12px] rounded-full bg-background border-2 border-primary" />
                                    <div className="glass p-6 rounded-2xl">
                                        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                            <span className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 py-1 px-3 rounded-full">
                                                <Calendar size={12} /> {edu.duration}
                                            </span>
                                        </div>
                                        <p className="text-primary font-medium mb-1">{edu.institution}</p>
                                        {edu.grade && (
                                            <p className="text-sm text-slate-400">Score: <span className="text-white font-semibold">{edu.grade}</span></p>
                                        )}
                                        {edu.status && (
                                            <span className="mt-4 inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                                                {edu.status}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                <Award size={24} />
                            </div>
                            <h2 className="text-3xl font-bold">Professional <span className="gradient-text">Trainings</span></h2>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {portfolioData.certifications.map((cert, idx) => (
                                <CertificationItem key={idx} cert={cert} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
