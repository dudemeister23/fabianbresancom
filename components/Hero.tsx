import React from 'react';
import { Icon } from './Icon';
import { CONTACT_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 bg-slate-900 scroll-mt-20"
      style={{ backgroundImage: 'url(/images/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <style>{`
        .hero-text-shadow {
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-left space-y-4 md:space-y-6">
          <div className="reveal reveal-left inline-block px-4 py-1 bg-primary-500/10 border border-primary-400/20 text-primary-300 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
            AVAILABLE FOR STRATEGIC LEADERSHIP & CONSULTING
          </div>

          <h1 className="reveal reveal-left font-serif text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight hero-text-shadow" style={{ transitionDelay: '200ms' }}>
            Scientific Strategy &<br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-100"
              style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
            >
              Medical Communications
            </span>
          </h1>

          <p className="reveal reveal-left text-xl text-slate-300 max-w-lg leading-relaxed font-light hero-text-shadow" style={{ transitionDelay: '400ms' }}>
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
        <div className="relative h-full flex justify-center items-center lg:justify-end reveal reveal-right group" style={{ transitionDelay: '600ms' }}>
          <div className="relative mx-auto md:mr-0 max-w-md lg:max-w-xl w-full h-[450px] lg:h-[500px] xl:h-[650px] max-h-[75vh]">
            <div className="absolute inset-0 bg-slate-800 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/5">
              <img
                src="/images/hero.png"
                alt="Fabian Bresan, MD"
                className="object-cover w-full h-full object-top transition-transform duration-1000 ease-in-out"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 shadow-2xl transform transition-transform duration-500">
                <p className="font-bold text-base text-primary-300 tracking-wider hero-text-shadow">FABIAN BRESAN, MD</p>
                <p className="text-xs text-slate-300 mt-1 tracking-widest uppercase opacity-80 hero-text-shadow">MEDICAL STRATEGIST & SCIENTIFIC CONTENT DIRECTOR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};