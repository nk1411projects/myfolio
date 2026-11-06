import React from 'react';
import { motion } from 'framer-motion';
import { 
  Link2, Code2, ShieldCheck, Database, Server, Layers
} from 'lucide-react';

const Skills = () => {
  // Mapping skills to original logo URLs or Lucide Icons
  const skillIcons = {
    // Row 1: Backend & APIs
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "Express": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/express.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    "REST APIs": Link2,
    "JWT": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/jsonwebtokens.svg",
    "Postman": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postman.svg",
    "Authentication": ShieldCheck,
    // Row 2: Frontend Engineering
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    // Row 3: Databases & DevOps Tools
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
  };

  const row1Skills = [
    { name: "Node.js" },
    { name: "Express" },
    { name: "Python" },
    { name: "FastAPI" },
    { name: "REST APIs" },
    { name: "JWT" },
    { name: "Postman" },
    { name: "Authentication" }
  ];

  const row2Skills = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "TailwindCSS" },
    { name: "Vite" }
  ];

  const row3Skills = [
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Docker" },
    { name: "VS Code" }
  ];

  const renderMarqueeRow = (skills, direction = 'forward', speed = '25s') => {
    // Duplicate skills list to ensure seamless looping
    const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];
    const marqueeClass = direction === 'forward' ? 'animate-[marquee_30s_linear_infinite]' : 'animate-[marquee-reverse_30s_linear_infinite]';

    return (
      <div className="relative w-full overflow-hidden py-3 select-none flex">
        {/* Shadow overlays on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />

        <div 
          className={`flex gap-4 shrink-0 hover:[animation-play-state:paused] ${marqueeClass}`}
          style={{ animationDuration: speed }}
        >
          {duplicatedSkills.map((skill, idx) => {
            const iconData = skillIcons[skill.name];
            const isUrl = typeof iconData === 'string';
            return (
              <div
                key={idx}
                className="glass-card px-5 py-3.5 rounded-2xl border border-white/5 bg-[#111827]/40 flex items-center gap-3 hover:border-accent/30 hover:bg-[#111827]/60 hover:scale-103 transition-all duration-300 pointer-events-auto"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  {isUrl ? (
                    <img 
                      src={iconData} 
                      alt={skill.name} 
                      className={`w-5 h-5 object-contain ${skill.name === 'GitHub' || skill.name === 'Express' ? 'invert' : ''}`} 
                    />
                  ) : (
                    (() => {
                      const Icon = iconData || Code2;
                      return <Icon size={16} />;
                    })()
                  )}
                </div>
                <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 px-6 bg-[#050816]/60 relative overflow-hidden">
      {/* Inline styles for scrolling keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Tracks */}
        <div className="space-y-6 flex flex-col items-center">
          {/* Row 1: Backend & APIs (forward) */}
          <div className="w-full max-w-5xl">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest pl-2 mb-2 block">Backend &amp; API Architecture</span>
            {renderMarqueeRow(row1Skills, 'forward', '30s')}
          </div>

          {/* Row 2: Frontend Engineering (reverse) */}
          <div className="w-full max-w-5xl">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest pl-2 mb-2 block">Frontend Engineering</span>
            {renderMarqueeRow(row2Skills, 'reverse', '26s')}
          </div>

          {/* Row 3: Databases & DevOps Tools (forward) */}
          <div className="w-full max-w-5xl">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest pl-2 mb-2 block">Databases &amp; DevOps Tools</span>
            {renderMarqueeRow(row3Skills, 'forward', '28s')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
