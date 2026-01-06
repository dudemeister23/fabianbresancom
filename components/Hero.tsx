import React from 'react';
import { Icon } from './Icon';
import { CONTACT_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900"
      style={{ backgroundImage: 'url(/images/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/40"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1 bg-primary-500/20 border border-primary-400/30 text-primary-300 rounded-full text-sm font-semibold tracking-wide">
            AVAILABLE FOR STRATEGIC LEADERSHIP & CONSULTING
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Scientific Strategy.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
              Medical Communications.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
            MD-credentialed Medical Director bridging the gap between clinical data and business objectives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="flex-1 px-8 py-4 bg-white text-slate-900 font-medium rounded-2xl shadow-lg hover:bg-primary-100 transition-all hover:shadow-xl text-center flex items-center justify-center"
            >
              Work With Me
            </a>

            <a
              href={CONTACT_INFO.resumeUrl}
              download
              className="flex-1 px-8 py-4 bg-slate-100 text-slate-900 border border-slate-200 font-medium rounded-2xl hover:bg-white transition-all text-center flex items-center justify-center gap-2"
            >
              Download Resume <Icon name="Download" size={18} />
            </a>
          </div>


        </div>

        {/* User Headshot with styling */}
        <div className="hidden md:block relative h-[600px] w-full bg-slate-200 rounded-[2rem] overflow-hidden shadow-2xl">
          <img
            src="/images/hero.png"
            alt="Fabian Bresan, MD"
            className="object-cover w-full h-full object-top hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-lg">

              <p className="font-bold text-sm text-primary-200">FABIAN BRESAN, MD</p>
              <p className="text-xs text-slate-300 mt-1 tracking-wider">MEDICAL STRATEGIST & CLIENT ENGAGEMENT DIRECTOR</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};