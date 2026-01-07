import React from 'react';
import { SERVICES } from '../constants';
import { Icon } from './Icon';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto reveal reveal-up">
          <div className="inline-block px-4 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Expertise
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Core Competencies</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Leveraging deep therapeutic expertise and MD-level precision to deliver scientific strategy, content, and operational leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className={`reveal reveal-up group bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 hover:shadow-2xl hover:border-primary-200 transition-all duration-500 transform hover:-translate-y-2 hover:bg-white`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-primary-700 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                <Icon name={service.iconName} size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-primary-700 transition-colors">{service.title}</h3>
              <p className="text-slate-600 mb-8 text-sm leading-relaxed font-medium">{service.description}</p>
              <ul className="space-y-4">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-500 group-hover:text-slate-700 transition-colors">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};