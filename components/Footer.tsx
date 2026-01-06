import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="font-serif text-lg text-white font-bold">Fabian Bresan, MD</p>
          <p className="text-sm mt-1">Medical Education Strategist & Scientific Director</p>
        </div>



        <div className="mt-8 md:mt-0 text-xs text-slate-600">
          © {new Date().getFullYear()} Fabian Bresan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};