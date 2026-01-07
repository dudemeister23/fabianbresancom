import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative text-slate-400 py-16 overflow-hidden"
      style={{ backgroundImage: 'url(/images/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'bottom' }}
    >
      <style>{`
        .footer-text-shadow {
          text-shadow: 0 2px 10px rgba(0,0,0,0.9);
        }
      `}</style>

      {/* Background image is now fully visible with no overlay */}

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
        <div className="footer-text-shadow">
          <p className="font-serif text-2xl text-white font-bold tracking-tight">Fabian Bresan, MD</p>
          <p className="text-sm mt-2 text-primary-300 font-medium tracking-wide uppercase">Scientific Strategy & Medical Communications Director</p>
        </div>

        <div className="text-xs text-slate-500 font-medium uppercase tracking-widest footer-text-shadow">
          © {new Date().getFullYear()} Fabian Bresan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};