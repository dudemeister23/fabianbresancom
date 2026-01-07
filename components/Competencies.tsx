import React from 'react';
import { Icon } from './Icon';

const COMPETENCY_GROUPS = [
    {
        title: 'Therapeutic Expertise',
        icon: 'Stethoscope',
        skills: ['Neurology', 'Ophthalmology', 'Psychiatry', 'Dermatology', 'Internal Medicine', 'Immunology']
    },
    {
        title: 'Scientific Strategy',
        icon: 'Brain',
        skills: ['Gap Analysis', 'Needs Assessments', 'Instructional Design', 'ACCME Compliance', 'Adult Learning Principles']
    },
    {
        title: 'Medical Communications',
        icon: 'FileText',
        skills: ['Publication Planning', 'Grant Development', 'Storyboarding', 'Omnichannel Optimization']
    },
    {
        title: 'Operational Leadership',
        icon: 'Layers',
        skills: ['Budgeting & P&L', 'Cross-functional Leadership', 'Vendor Negotiation', 'Strategic Forecasting']
    }
];

export const Competencies: React.FC = () => {
    return (
        <section id="competencies" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Competencies</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto italic">
                        A "T-shaped" professional profile combining deep clinical strategy with broad operational excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {COMPETENCY_GROUPS.map((group) => (
                        <div
                            key={group.title}
                            className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] hover:border-primary-200 hover:bg-white hover:shadow-lg transition-all duration-300"
                        >
                            <div className="mb-6 flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-white shadow-sm">
                                    <Icon
                                        name={group.icon}
                                        size={24}
                                        className="text-primary-600"
                                    />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-slate-900">
                                    {group.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-xl text-sm font-medium bg-white text-slate-600 border border-slate-200 hover:border-primary-400 hover:text-primary-600 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
