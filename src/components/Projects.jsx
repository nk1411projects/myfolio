import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const ProjectCard = ({ title, tech, description, link }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-2xl glass flex flex-col h-full"
    >
        <div className="p-8 flex flex-col flex-grow">
            <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10">
                    {tech}
                </span>
                <div className="flex gap-3">
                    {link !== '#' && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-slate-400 leading-relaxed flex-grow">{description}</p>

            <div className="mt-8 pt-6 border-t border-white/5">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-all"
                >
                    View Technical Details <ExternalLink size={14} />
                </a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-white">Featured <span className="gradient-text">Projects</span></h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
