import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Icon } from './Icon';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Professional Experience Column */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
              <Icon name="Briefcase" className="text-primary-600" /> Professional Experience
            </h2>
            
            <div className="space-y-12 border-l-2 border-slate-200 ml-3 pl-8 relative">
              {EXPERIENCE.map((job, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-primary-600 shadow-sm"></div>
                  
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
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
                      <p className="text-slate-700 italic mb-4 text-sm">{job.description}</p>
                    )}

                    <ul className="space-y-2">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-600 text-sm">
                          <span className="mr-2 mt-1.5 text-primary-500">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                <Icon name="GraduationCap" className="text-primary-600" /> Education
              </h2>
              
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                    <div className="text-primary-700 font-medium mb-1">{edu.institution}</div>
                    <div className="text-slate-500 text-sm mb-3">{edu.location} | {edu.year}</div>
                    <p className="text-slate-600 text-sm">{edu.details}</p>
                  </div>
                ))}

                <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg mt-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Icon name="Stethoscope" size={20} className="text-primary-400" />
                    Therapeutic Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Neurology', 'Ophthalmology', 'Psychiatry', 'Dermatology', 'Internal Medicine', 'Immunology'].map((area) => (
                      <span key={area} className="px-3 py-1 bg-slate-800 text-xs rounded-full border border-slate-700">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};