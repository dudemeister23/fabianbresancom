import { ContactInfo, ExperienceItem, PortfolioItem, ServiceItem } from './types';

export const CONTACT_INFO: ContactInfo = {
  email: 'fabianbresan@me.com',
  phone: '(561) 788-4408',
  location: 'Palm Beach Gardens, FL',
  linkedin: 'https://linkedin.com/in/fabianbresan/',
};

export const SERVICES: ServiceItem[] = [
  {
    title: 'Scientific Strategy',
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
    title: 'Therapeutic Expertise',
    description: 'Therapeutic expertise bridging clinical authority with strategic objectives.',
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
    description: 'Leveraging entrepreneurial opportunity to build and scale an operational infrastructure, mastering resource management and operational scalability.',
    achievements: [
      'Manage comprehensive operational oversight, strategic forecasting, and stakeholder relations for a capital-intensive business unit.',
      'Direct complex, multi-phase client projects; implemented SOPs that reduced project turnaround time.',
      'Recruited and lead a cross-functional team of project coordinators and technical staff, establishing a culture of accountability and timeline adherence.',
      'Negotiate high-value contracts and manage subcontractor partnerships.',
    ],
  },
  {
    role: 'Senior Content Manager',
    company: 'MedEdicus',
    location: 'Remote',
    period: 'Dec. 2023 – Apr. 2025',
    description: 'Operated as the strategic lead for a portfolio of CME programs, ensuring scientific accuracy and alignment with strategic objectives.',
    achievements: [
      'Directed comprehensive gap analyses and needs assessments for high-priority areas (Thyroid Eye Disease, NMOSD, Dry Eye Disease), directly influencing the curriculum design for numerous accredited programs.',
      'Cultivated and managed relationships with top-tier KOLs, ensuring faculty alignment with emerging clinical data and guidelines.',
      'Architected multi-format educational initiatives resulting in increased learner engagement and retention.',
      'Partnered with grant, accreditation, and events teams to ensure 100% on-time delivery of compliant CME programs while maintaining strict budget adherence.',
    ],
  },
  {
    role: 'Medical Education Content Developer',
    company: 'MedEdicus',
    location: 'Remote',
    period: 'Nov. 2022 – Dec. 2023',
    description: '',
    achievements: [
      'Developed educational agendas and complex case studies for live symposia, translating high-science data into practical clinical applications.',
      'Provided on-site medical direction for live educational programs, managing faculty requirements and real-time scientific inquiries.',
      'Spearheaded restructuring of digital content formats, significantly expanding distribution channels and maximizing the educational impact of funded programs.',
    ],
  },
  {
    role: 'Medical Writer / Research Scientist',
    company: 'Max Planck Florida Institute for Neuroscience',
    location: 'Jupiter, FL',
    period: 'Oct. 2020 – Nov. 2022',
    description: '',
    achievements: [
      'Conceptualized and authored clinical references for 30+ grant applications, effectively securing essential research funding.',
      'Served as editorial lead for high-impact scientific publications, ensuring data integrity and narrative clarity for complex neurological research.',
      'Conducted exhaustive literature reviews in Neurology and Psychiatry to support evidence-based content generation.',
    ],
  },
  {
    role: 'Medical Intern',
    company: 'Boca Raton Regional Hospital',
    location: 'Boca Raton, FL',
    period: 'Nov. 2019 – Oct. 2020',
    description: '',
    achievements: [
      'Completed clinical rotations in Neurology, Surgery, and Internal Medicine.',
      'Delivered oral presentations on updated guidelines and clinical data to department leadership.',
    ],
  },
];

export const PORTFOLIO_SAMPLES: PortfolioItem[] = [
  {
    id: '1',
    title: 'Comanaging Thyroid Eye Disease',
    category: 'CME Monograph',
    description: 'A proactive care approach monograph reviewing clinical features of TED, teprotumumab data, and multidisciplinary management strategies for oculoplastic surgeons and ophthalmologists.',
    tags: ['Ophthalmology', 'CME', 'Monograph', 'Endocrinology'],
    imageUrl: '/images/portfolio/portfolio-01.jpg'
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
    id: '3',
    title: 'Person-Centered Care in Parkinson’s',
    category: 'CME Monograph',
    description: 'Systematic approach to managing neuropsychiatric manifestations in PD, including psychosis and dementia, through evidence-based treatment plans and case studies.',
    tags: ['Neurology', 'Psychiatry', 'Monograph', 'CME'],
    imageUrl: '/images/portfolio/portfolio-03.png'
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
    id: '7',
    title: 'Seeing Through LEMS: Early Detection',
    category: 'CE Webcast',
    description: 'Guide to identifying ocular symptoms of Lambert-Eaton myasthenic syndrome (LEMS) and coordinating care between optometry and neurology.',
    tags: ['Neurology', 'Neuro-Ophthalmology', 'Webcast', 'Rare Disease'],
    imageUrl: '/images/portfolio/portfolio-07.png'
  },
  {
    id: '8',
    title: 'Strategies for Ocular Surface Health',
    category: 'CE Webcast',
    description: 'Best practices for diagnosing blepharitis and developing individualized treatment plans for ocular surface health and lid margin disease management.',
    tags: ['Optometry', 'Ocular Surface', 'Webcast', 'CE'],
    imageUrl: '/images/portfolio/ocular-surface.jpg'
  },
  {
    id: '9',
    title: 'Targeting DED: Optimal Results',
    category: 'CE Webcast',
    description: 'Comprehensive review of Dry Eye Disease pathophysiology and targeted therapeutic approaches to improve patient quality of life and clinical outcomes.',
    tags: ['Optometry', 'Dry Eye', 'Webcast', 'CE'],
    imageUrl: '/images/portfolio/targeting-ded.jpg'
  },
];

export const EDUCATION = [
  {
    degree: 'MD, Medicine',
    institution: 'Goethe University',
    location: 'Frankfurt am Main, Germany',
    year: '2020',
    details: 'Thesis: Investigated travel as a risk factor for acquiring multi-resistant bacteria. Research: Developed patient interview forms, conducted statistical analysis, and managed a custom clinical database.',
  },
];