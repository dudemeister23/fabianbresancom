import React from 'react';
import { Icon } from './Icon';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1 bg-primary-50 border border-primary-100 text-primary-800 rounded-full text-sm font-semibold tracking-wide">
            AVAILABLE FOR FREELANCE & CONSULTING
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
            Scientific Rigor.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-primary-500">
              Strategic Impact.
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            I bridge the gap between clinical authority and educational strategy.
            MD-credentialed expertise for high-impact medical communications,
            CME programming, and strategic content development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg shadow-lg hover:bg-primary-800 transition-all hover:shadow-xl text-center"
            >
              Work With Me
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-medium rounded-lg hover:border-primary-500 hover:text-primary-800 transition-all text-center flex items-center justify-center gap-2"
            >
              View Portfolio <Icon name="ChevronRight" size={16} />
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="Target" size={18} className="text-primary-600" />
              <span>Gap Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Brain" size={18} className="text-primary-600" />
              <span>Instructional Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="FileText" size={18} className="text-primary-600" />
              <span>Publication Planning</span>
            </div>
          </div>
        </div>

        {/* User Headshot with styling */}
        <div className="hidden md:block relative h-[600px] w-full bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/images/hero.png"
            alt="Fabian Bresan, MD"
            className="object-cover w-full h-full object-top hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
            <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
              <p className="font-serif text-lg italic mb-2">"Elevating medical education through scientific rigor and strategic vision."</p>
              <p className="font-bold text-sm text-primary-200">FABIAN BRESAN, MD</p>
              <p className="text-xs text-slate-300 mt-1 tracking-wider">MEDICAL EDUCATION STRATEGIST & SCIENTIFIC DIRECTOR</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};