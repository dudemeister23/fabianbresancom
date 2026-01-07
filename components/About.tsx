import React from 'react';
import { Icon } from './Icon';

export const About: React.FC = () => {
    return (
        <section id="about-me" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col md:flex-row">
                        {/* Left accent column */}
                        <div className="w-full md:w-1/3 bg-slate-900 p-12 text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-full h-full opacity-10">
                                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary-400 -m-4"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary-400 -m-4"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary-500/20">
                                    <Icon name="Brain" size={32} className="text-white" />
                                </div>
                                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">About<br />Fabian</h2>
                                <div className="w-12 h-1 bg-primary-500 mb-6"></div>
                                <p className="text-slate-400 text-sm font-medium tracking-widest uppercase">The Hybrid Advantage</p>
                            </div>
                        </div>

                        {/* Content area */}
                        <div className="w-full md:w-2/3 p-12 md:p-16">
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    I am an <span className="text-slate-900 font-semibold">MD-credentialed Scientific Director and Strategist</span> who speaks the language of both clinical medicine and commercial business. With a background in Neurology, Ophthalmology, and Psychiatry, I specialize in translating complex data into high-impact educational strategies.
                                </p>

                                <p>
                                    Uniquely, I combine my scientific pedigree with recent <span className="text-slate-900 font-semibold">executive operational experience</span>—having managed P&Ls and scaled business infrastructure. This dual perspective allows me to not just design scientifically rigorous programs, but to execute them with the budget awareness and strategic forecasting of a business owner.
                                </p>

                                <p>
                                    Bilingual in <span className="text-primary-600 font-medium">English and German</span>, I bridge gaps between stakeholders, moving seamlessly from deep-science discussions with KOLs to strategic roadmap planning with agency leadership.
                                </p>
                            </div>

                            <div className="mt-12 flex flex-wrap gap-4">
                                <div className="px-5 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-semibold flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    Clinical Expertise
                                </div>
                                <div className="px-5 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-semibold flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    Business Strategy
                                </div>
                                <div className="px-5 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-semibold flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    Operational Leadership
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
