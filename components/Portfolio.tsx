import React from 'react';
import { PORTFOLIO_SAMPLES } from '../constants';
import { Icon } from './Icon';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Selected Work</h2>
            <div className="w-20 h-1 bg-primary-600 mb-6"></div>
            <p className="text-slate-600">
              A sample of non-proprietary work representing capabilities in high-science communication and strategic planning.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="px-6 py-3 border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-2">
              <Icon name="Download" size={18} /> Request Full Portfolio
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_SAMPLES.map((item) => (
            <div key={item.id} className="group relative bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
              {/* Card Image Placeholder */}
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <Icon name="FileText" size={48} className="opacity-20" />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium border border-white/30 px-4 py-2 rounded backdrop-blur-sm">View Details</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">{item.category}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* Call to Action Card for more work */}
          <div className="bg-slate-900 rounded-xl p-8 flex flex-col justify-center items-center text-center text-white border border-slate-800">
            <Icon name="Layers" size={48} className="text-primary-500 mb-4" />
            <h3 className="font-serif text-xl font-bold mb-2">More Available</h3>
            <p className="text-slate-400 text-sm mb-6">
              Due to confidentiality agreements, many projects cannot be publicly displayed. Contact me for a private walkthrough.
            </p>
            <a href="#contact" className="text-primary-400 font-semibold hover:text-white transition-colors flex items-center gap-1">
              Contact Me <Icon name="ChevronRight" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};