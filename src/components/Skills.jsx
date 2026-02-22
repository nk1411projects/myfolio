import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Database, ShieldCheck, Wrench, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const SkillCard = ({ title, icon: Icon, skills }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const isNetworking = title === 'Networking';

    // Spring configuration for premium feel
    const springConfig = { type: "spring", stiffness: 400, damping: 30 };

    const containerVariants = {
        initial: {},
        hover: {
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.05
            }
        }
    };

    const itemVariants = {
        initial: { opacity: 0, scale: 0.9, y: 5 },
        hover: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9, y: 5 }
    };

    // Initially only display core certifications for Networking
    const displayedSkills = (isNetworking && !isHovered)
        ? skills.filter(s => s === 'CCNA' || s === 'CCNP')
        : skills;

    return (
        <motion.div
            layout
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            variants={containerVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -5 }}
            transition={springConfig}
            className="p-5 rounded-2xl glass relative overflow-hidden group"
        >
            <div className="relative z-10">
                <motion.div
                    layout="position"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                >
                    <Icon size={24} />
                </motion.div>

                <motion.h3 layout="position" className="text-xl font-bold mb-3">{title}</motion.h3>

                <motion.div
                    layout
                    className="flex flex-wrap gap-2 min-h-[32px]"
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {displayedSkills.map((skill) => (
                            <motion.span
                                key={skill}
                                layout
                                variants={itemVariants}
                                initial="initial"
                                animate="hover"
                                exit="exit"
                                transition={springConfig}
                                className="px-3 py-1 rounded-lg bg-white/5 text-sm text-slate-300 border border-white/5 whitespace-nowrap group-hover:border-primary/20 transition-colors"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </AnimatePresence>

                    {isNetworking && !isHovered && skills.length > 2 && (
                        <motion.span
                            layout
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="px-3 py-1 rounded-lg bg-primary/10 text-xs text-primary font-medium flex items-center"
                        >
                            +{skills.length - 2} more
                        </motion.span>
                    )}
                </motion.div>
            </div>

            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
};

const Skills = () => {
    const categories = [
        { title: 'Frontend', icon: Code2, skills: portfolioData.skills.frontend },
        { title: 'Backend', icon: Server, skills: portfolioData.skills.backend },
        { title: 'Database', icon: Database, skills: portfolioData.skills.database },
        { title: 'Security', icon: ShieldCheck, skills: portfolioData.skills.security },
        { title: 'Tools', icon: Wrench, skills: portfolioData.skills.tools },
        { title: 'Networking', icon: Globe, skills: portfolioData.skills.networking },
    ];

    return (
        <section id="skills" className="py-24 px-6 bg-[#0c0c0e]">
            <div className="container mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">Technical <span className="gradient-text">Skills</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <SkillCard key={cat.title} {...cat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
