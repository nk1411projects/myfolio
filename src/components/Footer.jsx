import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4 border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <h2 className="text-2xl font-bold gradient-text mb-2">NK</h2>
                </div>

                <div className="flex gap-12 text-sm text-slate-400">
                    <p className="text-slate-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
