import { ContactInfo, ExperienceItem, PortfolioItem, ServiceItem } from './types';

export const CONTACT_INFO: ContactInfo = {
  email: 'fabianbresan@me.com',
  phone: '(561) 788-4408',
  location: 'Palm Beach Gardens, FL',
  linkedin: 'https://linkedin.com/in/fabianbresan/',
};

export const SERVICES: ServiceItem[] = [
  {
    title: 'Strategic Content Development',
    description: 'Expert-led gap analyses and needs assessments to drive curriculum design.',
    iconName: 'Target',
    details: [
      'Comprehensive Gap Analysis',
      'Needs Assessments',
      'Curriculum Design',
      'Instructional Design',
    ],
  },
  {
    title: 'Medical Communications',
    description: 'High-science data translation into practical clinical applications and deliverables.',
    iconName: 'FileText',
    details: [
      'Slide Decks & Storyboarding',
      'Publication Planning',
      'Grant Development',
      'Omnichannel Optimization',
    ],
  },
  {
    title: 'Program Architecture',
    description: 'Designing multi-format educational initiatives that engage and retain learners.',
    iconName: 'Layers',
    details: [
      'Live Symposia Agendas',
      'Webcasts & Podcasts',
      'Interactive Modules',
      'Complex Case Studies',
    ],
  },
  {
    title: 'Scientific Consulting',
    description: 'Therapeutic expertise bridging clinical authority with commercial goals.',
    iconName: 'Brain',
    details: [
      'KOL & Faculty Management',
      'Scientific Accuracy Review',
      'ACCME Compliance',
      'Strategic Forecasting',
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Principal / Director of Operations',
    company: 'CIQ of Palm Beach',
    location: 'Palm Beach Gardens, FL',
    period: 'May 2025 – Present',
    description: 'Leveraging entrepreneurial opportunity to build and scale an operational infrastructure, mastering P&L and resource management.',
    achievements: [
      'Manage full P&L oversight, strategic forecasting, and investor relations for a capital-intensive business unit.',
      'Direct complex, multi-phase client projects; implemented SOPs that reduced project turnaround time.',
      'Recruited and lead a cross-functional team, establishing a culture of accountability.',
      'Negotiate high-value contracts and manage subcontractor partnerships.',
    ],
  },
  {
    role: 'Senior Content Manager',
    company: 'MedEdicus',
    location: 'Remote',
    period: 'Dec. 2023 – Apr. 2025',
    description: 'Operated as the strategic lead for a portfolio of CME programs, ensuring scientific accuracy and alignment with commercial goals.',
    achievements: [
      'Directed gap analyses for high-priority areas (Thyroid Eye Disease, NMOSD, Dry Eye Disease).',
      'Cultivated relationships with top-tier KOLs, ensuring alignment with emerging clinical data.',
      'Architected multi-format educational initiatives resulting in increased learner engagement.',
      'Partnered with grant, accreditation, and events teams to ensure 100% on-time delivery.',
    ],
  },
  {
    role: 'Medical Education Content Developer',
    company: 'MedEdicus',
    location: 'Remote',
    period: 'Nov. 2022 – Dec. 2023',
    description: '',
    achievements: [
      'Developed educational agendas and complex case studies for live symposia.',
      'Provided on-site medical direction for live educational programs.',
      'Spearheaded restructuring of digital content formats to expand distribution channels.',
    ],
  },
  {
    role: 'Medical Writer / Research Scientist',
    company: 'Max Planck Florida Institute for Neuroscience',
    location: 'Jupiter, FL',
    period: 'Oct. 2020 – Nov. 2022',
    description: '',
    achievements: [
      'Conceptualized and authored references for 30+ grant applications, securing essential funding.',
      'Served as editorial lead for high-impact scientific publications.',
      'Conducted exhaustive literature reviews in Neurology and Psychiatry.',
    ],
  },
];

export const PORTFOLIO_SAMPLES: PortfolioItem[] = [
  {
    id: '1',
    title: 'Neurology Symposium Deck',
    category: 'Slide Deck',
    description: 'A comprehensive 60-slide deck for a live symposium focusing on emerging treatments in NMOSD. Includes complex mechanism of action (MOA) visuals and patient case studies.',
    tags: ['Neurology', 'CME', 'Live Event'],
  },
  {
    id: '2',
    title: 'Ophthalmology Needs Assessment',
    category: 'Strategic Analysis',
    description: 'In-depth gap analysis and needs assessment for Thyroid Eye Disease, identifying critical knowledge gaps among community practitioners to inform curriculum development.',
    tags: ['Ophthalmology', 'Grant Funding', 'Strategy'],
  },
  {
    id: '3',
    title: 'Psychiatry Interactive Module',
    category: 'Digital Education',
    description: 'Storyboarding and scientific scriptwriting for an interactive digital module on treatment-resistant depression.',
    tags: ['Psychiatry', 'Digital', 'Instructional Design'],
  },
];

export const EDUCATION = [
  {
    degree: 'MD, Medicine',
    institution: 'Goethe University',
    location: 'Frankfurt am Main, Germany',
    year: '2020',
    details: 'Thesis on multi-resistant bacteria risks. Experience with statistical analysis and clinical databases.',
  },
];
