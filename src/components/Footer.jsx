import React from 'react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050816]/30">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="text-xl font-extrabold tracking-wider gradient-text mb-2 block">
            NK
          </a>
          <p className="text-slate-500 text-xs text-center md:text-left">
            Building intelligent software solutions, agents, and web applications.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-xs text-slate-500">
          <p>
            Designed &amp; Developed by{' '}
            <span className="text-slate-300 font-semibold hover:text-accent transition-colors">
              Nithish Kumar
            </span>
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
