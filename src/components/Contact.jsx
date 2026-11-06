import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, FileText, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formData = new FormData(form.current);
    const newErrors = {};
    
    if (!formData.get('from_name')?.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    const emailVal = formData.get('user_email');
    if (!emailVal?.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(emailVal)) {
      newErrors.email = 'Please provide a valid email';
    }
    
    if (!formData.get('message')?.trim()) {
      newErrors.message = 'Message content is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');

    // Executing the EmailJS send function with Nithish's validated parameters
    emailjs.sendForm(
      'service_cespr5d', 
      'template_vz2yi24', 
      form.current, 
      'pX2Z3-ZFsqYGt82r5'
    )
    .then(() => {
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus('idle'), 6000);
    })
    .catch((error) => {
      console.error('EmailJS Form Dispatch Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Central Split Glass Card */}
        <div className="glass-card rounded-3xl border border-white/5 bg-[#111827]/40 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
          
          {/* Left Column: Direct Info Panel */}
          <div className="md:col-span-5 p-8 sm:p-10 bg-gradient-to-br from-accent/10 to-transparent border-r border-white/5 flex flex-col justify-between gap-12 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-white">Let's Connect</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm open to discussing Full Stack development roles, MERN opportunities, Python &amp; FastAPI backend engineering, and software development collaborations. Send a message or reach out via social handles.
              </p>
            </div>

            {/* Social Details Group */}
            <div className="space-y-5">
              <a 
                href={`mailto:${portfolioData.email}`} 
                className="flex items-center gap-4 group text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Email</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors truncate block max-w-[200px] sm:max-w-none">
                    {portfolioData.email}
                  </span>
                </div>
              </a>

              <a 
                href={`tel:${portfolioData.phone}`} 
                className="flex items-center gap-4 group text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Phone</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {portfolioData.phone}
                  </span>
                </div>
              </a>

              <a 
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Linkedin size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">LinkedIn</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors truncate block max-w-[200px] sm:max-w-none">
                    nithishkumar1411
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Location</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {portfolioData.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Resume trigger link */}
            <div className="pt-6 border-t border-white/5">
              <a
                href={portfolioData.resume}
                download="Nithish_Kumar_Resume.pdf"
                className="px-5 py-3 w-full rounded-xl bg-white/5 border border-white/5 text-white hover:bg-white/10 hover:border-white/10 text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <FileText size={14} className="text-accent" />
                Download CV PDF
              </a>
            </div>
          </div>

          {/* Right Column: Contact API Dispatcher */}
          <div className="md:col-span-7 p-8 sm:p-10 bg-[#111827]/10 flex flex-col justify-center">
            <form ref={form} onSubmit={sendEmail} className="space-y-5 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Nithish Kumar"
                  className={`w-full bg-white/5 border ${
                    errors.name ? 'border-red-500/50' : 'border-white/10'
                  } rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:bg-white/[0.08] transition-all`}
                />
                {errors.name && (
                  <p className="text-red-400 text-[10px] font-bold mt-1 flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="nithish@example.com"
                  className={`w-full bg-white/5 border ${
                    errors.email ? 'border-red-500/50' : 'border-white/10'
                  } rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:bg-white/[0.08] transition-all`}
                />
                {errors.email && (
                  <p className="text-red-400 text-[10px] font-bold mt-1 flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Hey Nithish! I would love to connect..."
                  className={`w-full bg-white/5 border ${
                    errors.message ? 'border-red-500/50' : 'border-white/10'
                  } rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:bg-white/[0.08] transition-all resize-none`}
                />
                {errors.message && (
                  <p className="text-red-400 text-[10px] font-bold mt-1 flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-xl bg-accent text-white font-bold hover:bg-accent/80 transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed group hover:-translate-y-0.5"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={16} className="text-white" />
                    Sent Successfully!
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={16} className="text-white" />
                    Dispatch Failed. Try again.
                  </>
                ) : (
                  <>
                    <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
