import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Icon } from './Icon';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

          {/* Contact Info Sidebar */}
          <div className="bg-slate-900 text-white p-10 md:w-2/5 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Available for freelance projects, consulting, and strategic partnerships. I typically respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-2xl text-primary-400">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-200">Email</h3>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary-300 hover:text-white transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg text-primary-400">
                    <Icon name="Linkedin" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-200">LinkedIn</h3>
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white transition-colors">
                      in/fabianbresan
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg text-primary-400">
                    <Icon name="MapPin" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-200">Location</h3>
                    <p className="text-slate-400">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-0 pt-8 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                Fabian Bresan, MD
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 md:w-3/5">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                >
                  <option>Medical Education Strategy</option>
                  <option>Content Development (Slide Deck, etc)</option>
                  <option>Grant / Needs Assessment</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tell me about your project timeline and requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white font-semibold py-4 rounded-2xl hover:bg-primary-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};