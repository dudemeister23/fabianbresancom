export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  achievements: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  tags: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  resumeUrl: string;
}