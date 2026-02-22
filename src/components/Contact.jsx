import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
    const [errors, setErrors] = useState({});

    const contactInfo = [
        { icon: Mail, label: 'Email', value: portfolioData.email, href: `mailto:${portfolioData.email}` },
        { icon: Phone, label: 'Phone', value: portfolioData.phone, href: `tel:${portfolioData.phone}` },
        { icon: MapPin, label: 'Location', value: 'Dharapuram, Tamil Nadu, India', href: '#' },
        { icon: Github, label: 'Github', value: '@nk1411projects', href: portfolioData.github },
        { icon: Linkedin, label: 'Linkedin', value: '@nithishkumar1411', href: portfolioData.linkedin },
    ];

    const validateForm = () => {
        const formData = new FormData(form.current);
        const newErrors = {};
        if (!formData.get('from_name')) newErrors.name = 'Name is required';
        if (!formData.get('user_email')) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.get('user_email'))) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.get('message')) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setStatus('sending');

        // Note: Placeholders for EmailJS credentials
        // Replace with your real credentials:
        // Service ID: service_xxxxxx
        // Template ID: template_xxxxxx
        // Public Key: xxxxxxxxxxxxxxx

        emailjs.sendForm('service_cespr5d', 'template_vz2yi24', form.current, 'pX2Z3-ZFsqYGt82r5')
            .then((result) => {
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.error('EmailJS Error:', error);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section id="contact" className="py-16 md:py-24 px-4 sm:px-6">
            <div className="container mx-auto">
                <div className="max-w-5xl mx-auto glass rounded-2xl md:rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left Column: Contact Info */}
                        <div className="p-8 md:p-12 bg-primary flex flex-col text-white">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Let's Stay <br className="hidden md:block" />Connected.</h2>

                                <div className="space-y-6 md:space-y-8">
                                    {contactInfo.map((item, idx) => (
                                        <a
                                            key={idx}
                                            href={item.href}
                                            target={item.href.startsWith('http') ? "_blank" : undefined}
                                            rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                            className="flex items-center gap-4 md:gap-6 group"
                                        >
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all shrink-0">
                                                <item.icon size={20} className="md:w-[22px] md:h-[22px]" />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-[10px] md:text-xs text-indigo-200 uppercase tracking-widest font-semibold mb-0.5 md:mb-1">{item.label}</p>
                                                <p className="font-semibold text-base md:text-lg truncate">{item.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="p-8 md:p-12 bg-white/5">
                            <div className="flex items-center gap-3 mb-6 md:mb-8">
                                <MessageSquare className="text-primary w-5 h-5 md:w-6 md:h-6" />
                                <h3 className="text-lg md:text-xl font-bold">Quick Message</h3>
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1.5 md:mb-2 italic">Full Name</label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        placeholder="Your Name"
                                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-2.5 md:py-3 text-white focus:outline-none focus:border-primary transition-all text-sm md:text-base`}
                                    />
                                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1.5 md:mb-2 italic">Email Address</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="your@email.com"
                                        className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-2.5 md:py-3 text-white focus:outline-none focus:border-primary transition-all text-sm md:text-base`}
                                    />
                                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1.5 md:mb-2 italic">Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder="Hello Nithish..."
                                        className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-2.5 md:py-3 text-white focus:outline-none focus:border-primary transition-all resize-none text-sm md:text-base`}
                                    ></textarea>
                                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-3 md:py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : status === 'success' ? (
                                        <>
                                            <CheckCircle2 size={20} />
                                            Sent Successfully!
                                        </>
                                    ) : status === 'error' ? (
                                        <>
                                            <AlertCircle size={20} />
                                            Failed to Send
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

