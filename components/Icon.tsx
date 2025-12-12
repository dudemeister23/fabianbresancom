import React from 'react';
import { 
  Target, 
  FileText, 
  Layers, 
  Brain, 
  Stethoscope, 
  Microscope, 
  Briefcase, 
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  ChevronRight,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const icons: Record<string, React.ElementType> = {
  Target,
  FileText,
  Layers,
  Brain,
  Stethoscope,
  Microscope,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  ChevronRight,
  Menu,
  X,
  ExternalLink
};

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
};