import React from 'react';
import { Icon } from './Icon';
import { CONTACT_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900"
      style={{ backgroundImage: 'url(/images/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Background image is now fully visible with no overlay */}
      <style>{`
        .hero-text-shadow {
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1 bg-primary-500/10 border border-primary-400/20 text-primary-300 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
            AVAILABLE FOR STRATEGIC LEADERSHIP & CONSULTING
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight hero-text-shadow">
            Scientific Strategy &<br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-100"
              style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
            >
              Medical Communications.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-lg leading-relaxed font-light hero-text-shadow">
            MD-credentialed Medical Director bridging the gap between clinical data and business objectives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 max-w-lg">
            <a
              href="#contact"
              className="flex-1 px-8 py-4 bg-primary-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-primary-400 transition-all hover:shadow-primary-500/30 hover:-translate-y-0.5 text-center flex items-center justify-center group"
            >
              Work With Me
              <Icon name="ChevronRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={CONTACT_INFO.resumeUrl}
              download
              className="flex-1 px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl shadow-sm hover:bg-slate-50 transition-all text-center flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              Download Resume <Icon name="Download" size={18} />
            </a>
          </div>


        </div>

        {/* User Headshot with styling */}
        <div className="hidden md:block relative h-[650px] w-full bg-slate-800 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/5 group">
          <img
            src="/images/hero.png"
            alt="Fabian Bresan, MD"
            className="object-cover w-full h-full object-top group-hover:scale-110 transition-transform duration-1000 ease-in-out"
          />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <div className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-[2rem] border border-white/20 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
              <p className="font-bold text-sm text-primary-300 tracking-wider">FABIAN BRESAN, MD</p>
              <p className="text-xs text-slate-300 mt-1 tracking-widest uppercase opacity-80">MEDICAL STRATEGIST & SCIENTIFIC CONTENT DIRECTOR</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};