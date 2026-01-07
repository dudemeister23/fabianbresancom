import { ContactInfo, ExperienceItem, PortfolioItem, ServiceItem } from './types';

export const CONTACT_INFO: ContactInfo = {
  email: 'fabianbresan@me.com',
  phone: '(561) 788-4408',
  location: 'Palm Beach Gardens, FL',
  linkedin: 'https://linkedin.com/in/fabianbresan/',
  resumeUrl: '/resume.pdf',
};

export const SERVICES: ServiceItem[] = [
  {
    title: 'Communications Strategy',
    description: 'Driving revenue through strategic grant development and client relationship management.',
    iconName: 'Target',
    details: [
      'Account Growth & Retention',
      'Strategic Forecasting',
      'Grantor/Client Relations',
      'Revenue Optimization',
    ],
  },
  {
    title: 'Scientific Leadership',
    description: 'Bridging clinical authority with strategic objectives through expert engagement and analysis.',
    iconName: 'Brain',
    details: [
      'KOL & Faculty Engagement',
      'Scientific Gap Analysis',
      'Therapeutic Strategy',
      'Clinical Data Alignment',
    ],
  },
  {
    title: 'Operations',
    description: 'Expertise in P&L management, cross-functional leadership, and operational efficiency.',
    iconName: 'Layers',
    details: [
      'P&L Management',
      'Cross-Functional Leadership',
      'Budget Adherence',
      'SOP & Workflow Optimization',
    ],
  },
  {
    title: 'Therapeutic Expertise',
    description: 'Deep clinical authority in Neurology, Ophthalmology, Psychiatry, and more.',
    iconName: 'Briefcase',
    details: [
      'Neurology & Psychiatry',
      'Ophthalmology & Optometry',
      'Aesthetics (HA Fillers)',
      'Rare Disease/LEMS',
    ],
  },
];

export const SCIENTIFIC_EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Senior Manager, Scientific Strategy & Content',
    company: 'MedEdicus',
    location: 'Remote',
    period: 'Dec. 2023 – Apr. 2025',
    description: 'Strategic lead for a portfolio of accredited programs, serving as the primary bridge between scientific data and communications execution.',
    achievements: [
      'Strategic Content Development: Directed the scientific strategy for high-priority accounts, securing funding from major grantors (Amgen, Iveric Bio, Bausch + Lomb).',
      'KOL & Faculty Management: Owned relationships with top-tier KOLs, managing expectations and aligning clinical data for on-site/virtual deliverables.',
      'Program Architecture & Revenue: Architected multi-format initiatives (webcasts, podcasts) that maximized reach and led to repeat business.',
      'Cross-Functional Execution: Partnered with grant, accreditation, and events teams for 100% on-time delivery of compliant programs.',
    ],
  },
  {
    role: 'Medical Education Content Developer',
    company: 'MedEdicus',
    location: 'Remote',
    period: 'Nov. 2022 – Dec. 2023',
    achievements: [
      'Symposia Leadership: Developed agendas and translated high-science data into practical clinical applications for live symposia.',
      'On-Site Medical Direction: Served as the on-site "Face of the Agency," managing real-time scientific inquiries and faculty needs.',
      'Digital Optimization: Spearheaded the restructuring of digital formats to expand distribution channels and maximize program ROI.',
    ],
  },
  {
    role: 'Medical Writer / Research Scientist',
    company: 'Max Planck Florida Institute for Neuroscience',
    location: 'Jupiter, FL',
    period: 'Oct. 2020 – Nov. 2022',
    achievements: [
      'Grant Strategy: Conceptualized clinical narratives for 30+ grant applications, successfully securing essential research funding.',
      'Scientific Communication: Served as editorial lead for high-impact publications, ensuring narrative clarity for complex neurological research.',
    ],
  },
  {
    role: 'Medical Intern',
    company: 'Boca Raton Regional Hospital',
    location: 'Boca Raton, FL',
    period: 'Nov. 2019 – Oct. 2020',
    achievements: [
      'Completed clinical rotations in Neurology, Surgery, and Internal Medicine.',
    ],
  },
];

export const BUSINESS_EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Principal / Operations Lead',
    company: 'CIQ of Palm Beach',
    location: 'Palm Beach Gardens, FL',
    period: 'May 2025 – Present',
    description: 'Executive leadership focusing on high-level operational strategy and business unit growth.',
    achievements: [
      'P&L Oversight: Managed full financial responsibility and strategic forecasting for a capital-intensive business unit.',
      'Strategic Forecasting: Analyzed market trends and operational data to drive long-term business sustainability.',
      'Team Leadership: Recruited and directed a cross-functional team, optimizing workflows and project delivery.',
    ],
  },
];

export const PORTFOLIO_SAMPLES: PortfolioItem[] = [
  {
    id: '10',
    title: 'Rangaraju Lab Website',
    category: 'Digital Strategy',
    description: 'Developed the digital presence for the Rangaraju Lab, a leading neuroscience research program focusing on neuroenergetics.',
    tags: ['Web Design', 'Strategy', 'Neuroscience', 'Academic'],
    imageUrl: '/images/portfolio/portfolio-rangaraju.png',
    link: 'https://rangarajulab.org'
  },
  {
    id: '2',
    title: 'Continuous Drug Delivery in nAMD and DME',
    category: 'CME Webcast',
    description: 'Expert panel discussion on the latest advancements in port delivery systems and their impact on treatment burden in retinal diseases.',
    tags: ['Ophthalmology', 'Retina', 'Webcast', 'CME'],
    imageUrl: '/images/portfolio/portfolio-02.jpg'
  },

  {
    id: '4',
    title: 'Complement Inhibition in Geographic Atrophy',
    category: 'CE Webcast',
    description: 'Exploration of new and emerging treatments for GA, focusing on pathophysiology, imaging features, and complement inhibition therapies to slow progression.',
    tags: ['Ophthalmology', 'Optometry', 'Webcast', 'CE'],
    imageUrl: '/images/portfolio/portfolio-04.png'
  },
  {
    id: '5',
    title: 'Evaporative Dry Eye: Diagnosis & Treatments',
    category: 'CME Podcast',
    description: 'Audio-visual podcast discussing the role of evaporation in DED, meibomian gland function, and designing evidence-based treatment plans.',
    tags: ['Ophthalmology', 'Podcast', 'CME', 'Dry Eye'],
    imageUrl: '/images/portfolio/portfolio-05.png'
  },
  {
    id: '6',
    title: 'Rejuvenating Perioral Lines with HA Fillers',
    category: 'Aesthetic Webcast',
    description: 'Expert guidance on injection techniques and product selection for perioral and infraorbital rejuvenation utilizing hyaluronic acid fillers.',
    tags: ['Dermatology', 'Aesthetics', 'Webcast', 'CME'],
    imageUrl: '/images/portfolio/portfolio-06.png'
  },
  {
    id: '8',
    title: 'Strategies for Ocular Surface Health',
    category: 'CE Webcast',
    description: 'Best practices for diagnosing blepharitis and developing individualized treatment plans for ocular surface health and lid margin disease management.',
    tags: ['Optometry', 'Ocular Surface', 'Webcast', 'CE'],
    imageUrl: '/images/portfolio/portfolio-07.png'
  },
  {
    id: '9',
    title: 'Targeting DED: Optimal Results',
    category: 'CE Webcast',
    description: 'Comprehensive review of Dry Eye Disease pathophysiology and targeted therapeutic approaches to improve patient quality of life and clinical outcomes.',
    tags: ['Optometry', 'Dry Eye', 'Webcast', 'CE'],
    imageUrl: '/images/portfolio/portfolio-01.jpg'
  },
  {
    id: '1',
    title: 'Comanaging Thyroid Eye Disease',
    category: 'CME Monograph',
    description: 'A proactive care approach monograph reviewing clinical features of TED, teprotumumab data, and multidisciplinary management strategies for oculoplastic surgeons and ophthalmologists.',
    imageUrl: '/images/portfolio/portfolio-03.png',
    tags: ['Ophthalmology', 'TED', 'Monograph', 'CME'],
  },

];

export const EDUCATION = [
  {
    degree: 'MD, Medicine',
    institution: 'Goethe University',
    location: 'Frankfurt am Main, Germany',
    year: '2020',
    details: 'Thesis: Investigated travel as a risk factor for acquiring multi-resistant bacteria.',
  },
];