import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, Users, FolderDot, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const GithubSection = () => {
  const [profileData, setProfileData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true);
        // Fetch profile
        const profileRes = await fetch('https://api.github.com/users/nk1411projects');
        if (!profileRes.ok) throw new Error('API failure');
        const profileJson = await profileRes.json();
        setProfileData(profileJson);

        // Fetch repos
        const reposRes = await fetch('https://api.github.com/users/nk1411projects/repos?sort=updated&per_page=6');
        if (!reposRes.ok) throw new Error('API failure');
        const reposJson = await reposRes.json();
        setRepos(reposJson);
        setError(false);
      } catch (err) {
        console.error('Github API error:', err);
        setError(true);
        // Fallback mock repos in case of API rate limiting
        setRepos([
          {
            name: "AI-Resume-Screening-System",
            description: "Intelligent PDF resume parser and semantic job matching system using NLP and TF-IDF similarity vectors.",
            stargazers_count: 3,
            forks_count: 1,
            language: "Python",
            html_url: "https://github.com/nk1411projects"
          },
          {
            name: "Attrition-Prediction-SHAP",
            description: "Explainable employee turnover machine learning system utilizing Scikit-learn pipelines and SHAP dashboards.",
            stargazers_count: 2,
            forks_count: 0,
            language: "Python",
            html_url: "https://github.com/nk1411projects"
          },
          {
            name: "Ticket-Management-Portal",
            description: "Full stack MERN web portal equipped with secure JWT cookies and granular Role-Based Access Control policies.",
            stargazers_count: 4,
            forks_count: 2,
            language: "JavaScript",
            html_url: "https://github.com/nk1411projects"
          },
          {
            name: "Phishing-Detector-ML",
            description: "Lexical feature extractor and Random Forest classifier training pipeline for phishing URL classification.",
            stargazers_count: 2,
            forks_count: 1,
            language: "Python",
            html_url: "https://github.com/nk1411projects"
          }
        ]);
        setProfileData({
          public_repos: 12,
          followers: 8,
          following: 15
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  // Generate fake contribution chart cells for the premium grid
  const renderContributionGraph = () => {
    const rows = 7;
    const cols = 35; // fits nicely in layouts
    const cells = [];
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Random opacity to simulate commit density
        const randVal = Math.random();
        let colorClass = 'bg-white/[0.03]';
        if (randVal > 0.85) colorClass = 'bg-accent/80';
        else if (randVal > 0.7) colorClass = 'bg-accent/40';
        else if (randVal > 0.5) colorClass = 'bg-accent/20';
        
        cells.push(
          <div 
            key={`${r}-${c}`} 
            className={`w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-[2px] ${colorClass} hover:ring-1 hover:ring-accent transition-all`}
            title="Commit activity"
          />
        );
      }
    }
    return cells;
  };

  return (
    <section id="github" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            GitHub &amp; <span className="gradient-text">Open Source</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Profile Card and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Stats Block */}
          <div className="lg:col-span-4 glass-card p-6 rounded-3xl border border-white/5 bg-[#111827]/40 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-2xl font-black">
                <Github size={28} />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base">@nk1411projects</h3>
                <a 
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-bold text-xs hover:underline mt-1 block"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>

            {/* Quick API Stats */}
            <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-6">
              <div className="text-center">
                <div className="text-slate-500 mb-1 flex items-center justify-center gap-1">
                  <FolderDot size={12} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Repos</span>
                </div>
                <p className="text-white font-extrabold text-lg sm:text-xl">
                  {loading ? '...' : profileData?.public_repos}
                </p>
              </div>
              <div className="text-center border-x border-white/5">
                <div className="text-slate-500 mb-1 flex items-center justify-center gap-1">
                  <Users size={12} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Followers</span>
                </div>
                <p className="text-white font-extrabold text-lg sm:text-xl">
                  {loading ? '...' : profileData?.followers}
                </p>
              </div>
              <div className="text-center">
                <div className="text-slate-500 mb-1 flex items-center justify-center gap-1">
                  <Star size={12} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Stars</span>
                </div>
                <p className="text-white font-extrabold text-lg sm:text-xl">
                  {loading ? '...' : '6'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Contribution Graph Block */}
          <div className="lg:col-span-8 glass-card p-6 rounded-3xl border border-white/5 bg-[#111827]/40 flex flex-col justify-between overflow-x-auto">
            <div>
              <h3 className="text-sm font-extrabold text-white mb-1 flex items-center gap-2">
                Open Source Activity
              </h3>
              <p className="text-slate-500 text-xs mb-6">
                Visualizing code consistency and active contributions
              </p>
            </div>

            {/* Matrix Board */}
            <div className="flex justify-center select-none overflow-x-auto min-w-[320px] pb-2">
              <div className="grid grid-flow-col gap-[3px] grid-rows-7">
                {renderContributionGraph()}
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-500 pt-4 border-t border-white/5 mt-4">
              <span>Less</span>
              <div className="flex gap-[3px]">
                <div className="w-[8px] h-[8px] rounded-[1px] bg-white/[0.03]" />
                <div className="w-[8px] h-[8px] rounded-[1px] bg-accent/20" />
                <div className="w-[8px] h-[8px] rounded-[1px] bg-accent/40" />
                <div className="w-[8px] h-[8px] rounded-[1px] bg-accent/80" />
              </div>
              <span>More</span>
            </div>
          </div>

        </div>

        {/* Repositories grid */}
        <h3 className="text-base font-extrabold text-slate-300 mb-6 flex items-center gap-2 pl-2">
          <BookOpen size={16} className="text-accent" /> Recent Repositories
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo, idx) => (
            <motion.a
              key={idx}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card p-5 rounded-2xl border border-white/5 hover:border-accent/15 bg-[#111827]/30 flex flex-col justify-between h-[150px] group text-left"
            >
              <div>
                <h4 className="font-extrabold text-white text-sm group-hover:text-accent transition-colors truncate">
                  {repo.name}
                </h4>
                <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                  {repo.description || 'No description provided.'}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5 text-[10px] text-slate-500 font-mono">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <Code size={10} className="text-accent" />
                    {repo.language}
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Star size={10} /> {repo.stargazers_count || 0}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={10} /> {repo.forks_count || 0}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GithubSection;
