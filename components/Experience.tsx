import React from 'react';
import { SCIENTIFIC_EXPERIENCE, BUSINESS_EXPERIENCE, EDUCATION } from '../constants';
import { Icon } from './Icon';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Professional Experience Column */}
          <div className="lg:col-span-2 space-y-16">

            {/* Section A: Scientific Strategy */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Icon name="Brain" className="text-primary-600" /> Medical Communications & Scientific Strategy
              </h2>

              <div className="space-y-10 border-l-2 border-slate-200 ml-3 pl-8 relative">
                {SCIENTIFIC_EXPERIENCE.map((job, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-primary-600 shadow-sm"></div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all transform hover:-translate-y-1">
                      <div className="flex flex-wrap justify-between items-baseline mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                        <span className="text-sm font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">{job.period}</span>
                      </div>

                      <div className="text-slate-600 font-medium mb-4 flex items-center gap-2">
                        <span>{job.company}</span>
                        {job.location && (
                          <>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-500 text-sm font-normal">{job.location}</span>
                          </>
                        )}
                      </div>

                      {job.description && (
                        <p className="text-slate-800 font-medium mb-4 text-sm leading-relaxed">{job.description}</p>
                      )}

                      <ul className="space-y-3 list-none">
                        {job.achievements.map((item, i) => (
                          <li key={i} className="text-slate-600 text-sm flex items-start gap-3">
                            <Icon name="ChevronRight" size={14} className="text-primary-500 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section B: Business Leadership */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3 opacity-90">
                <Icon name="Layers" className="text-slate-500" /> Operational & Business Leadership
              </h2>

              <div className="space-y-6 border-l-2 border-slate-200 ml-3 pl-8 relative">
                {BUSINESS_EXPERIENCE.map((job, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-slate-400 shadow-sm"></div>

                    <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-200/60 hover:bg-white transition-colors">
                      <div className="flex flex-wrap justify-between items-baseline mb-2">
                        <h3 className="text-lg font-bold text-slate-800">{job.role}</h3>
                        <span className="text-xs font-semibold text-slate-500">{job.period}</span>
                      </div>

                      <div className="text-slate-600 text-sm font-medium mb-3">
                        {job.company}
                      </div>

                      <ul className="grid sm:grid-cols-3 gap-3">
                        {job.achievements.map((item, i) => {
                          const [title, desc] = item.split(': ');
                          return (
                            <li key={i} className="text-slate-600 text-[13px] bg-white p-3 rounded-xl border border-slate-100 flex flex-col gap-1">
                              <span className="font-bold text-slate-900">{title}</span>
                              <span className="text-slate-500 leading-tight">{desc}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Credentials Column */}
          <div className="lg:col-span-1">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                <Icon name="GraduationCap" className="text-primary-600" /> Education
              </h2>

              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                    <div className="text-primary-700 font-medium mb-1">{edu.institution}</div>
                    <div className="text-slate-500 text-sm mb-3">{edu.location} | {edu.year}</div>
                    <p className="text-slate-600 text-sm">{edu.details}</p>
                  </div>
                ))}


              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};