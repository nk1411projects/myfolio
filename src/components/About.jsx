import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import profileImg from '../assets/profile.png';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-8 text-white">About <br /><span className="gradient-text">Nithishkumar</span></h2>
                        <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                            <p>
                                {portfolioData.summary}
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-white font-bold text-2xl mb-1">Entry-level</h4>
                                <p className="text-sm text-slate-500 uppercase tracking-widest">Experience</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-2xl mb-1">5+</h4>
                                <p className="text-sm text-slate-500 uppercase tracking-widest">Projects Done</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl glass p-8 flex items-center justify-center">
                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex flex-col items-center justify-center border border-white/5">
                                <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-48 h-48 rounded-full bg-primary/20 blur-[100px]" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
