import React from 'react';
import { SERVICES } from '../constants';
import { Icon } from './Icon';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Competencies</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Leveraging deep therapeutic expertise in Neurology, Ophthalmology, Psychiatry, Dermatology, and Internal Medicine to deliver precision content and strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary-700 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Icon name={service.iconName} size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-500">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></span>
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