import React, { useState } from 'react';
import { PORTFOLIO_SAMPLES } from '../constants';
import { Icon } from './Icon';

export const Portfolio: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_COUNT = 3;

  const hasMoreItems = PORTFOLIO_SAMPLES.length > INITIAL_COUNT;

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Selected Work</h2>
            <div className="w-20 h-1 bg-primary-600 mb-6 mx-auto"></div>
            <p className="text-slate-600">
              A sample of non-proprietary work representing capabilities in high-science communication and strategic planning.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_SAMPLES.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 flex flex-col h-full ${index >= INITIAL_COUNT
                ? isExpanded
                  ? 'opacity-100 translate-y-0 max-h-[800px]'
                  : 'opacity-0 translate-y-8 max-h-0 overflow-hidden pointer-events-none'
                : ''
                }`}
              style={{
                transitionProperty: 'opacity, transform, max-height',
                transitionDelay: isExpanded && index >= INITIAL_COUNT ? `${(index - INITIAL_COUNT) * 75}ms` : '0ms',
              }}
            >
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                  {/* Card Image Placeholder */}
                  <div className="h-64 bg-slate-200 relative overflow-hidden flex-shrink-0">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className={`w-full h-full ${(item.id === '1' || item.id === '8' || item.id === '9') ? 'object-contain bg-gray-50' : 'object-cover'}`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement?.classList.add('fallback-icon');
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200 -z-10 group-has-[img[style*='none']]:z-0 group-has-[img:not([src])]:z-0">
                      <Icon name="ExternalLink" size={32} className="opacity-0 group-hover:opacity-100 transition-opacity z-10 text-white drop-shadow-lg" />
                      <Icon name="FileText" size={48} className="opacity-20" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">{item.category}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors flex items-center gap-2">
                      {item.title} <Icon name="ExternalLink" size={16} className="text-slate-400 group-hover:text-primary-600 transition-colors" />
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 mt-auto">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col h-full">
                  {/* Card Image Placeholder */}
                  <div className="h-64 bg-slate-200 relative overflow-hidden flex-shrink-0">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className={`w-full h-full ${(item.id === '1' || item.id === '8' || item.id === '9') ? 'object-contain bg-gray-50' : 'object-cover'}`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement?.classList.add('fallback-icon');
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200 -z-10 group-has-[img[style*='none']]:z-0 group-has-[img:not([src])]:z-0">
                      <Icon name="FileText" size={48} className="opacity-20" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">{item.category}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 mt-auto">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {hasMoreItems && (
          <div className={`flex justify-center relative z-10 transition-all duration-500 ${isExpanded ? 'mt-12' : '-mt-4'}`}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full max-w-2xl py-4 bg-primary-600 text-white font-semibold rounded-2xl hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
            >
              {isExpanded ? (
                <>
                  <Icon name="ChevronUp" size={18} /> Show Less
                </>
              ) : (
                <>
                  <Icon name="ChevronDown" size={18} /> Show More ({PORTFOLIO_SAMPLES.length - INITIAL_COUNT})
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};