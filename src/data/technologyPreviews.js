import { courses } from './courses';

const technologyVisuals = {
  'cloud-computing': {
    icon: 'cloud',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85',
    alt: 'Cloud infrastructure visualization',
    description: 'AWS, Azure, and modern cloud technologies.',
  },
  'vmware-virtualization': {
    icon: 'server',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85',
    alt: 'Virtualization and computing technology',
    description: 'Virtual machines and enterprise virtualization platforms.',
  },
  'windows-server': {
    icon: 'server',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85',
    alt: 'Enterprise server infrastructure',
    description: 'Windows Server, Active Directory, and core services.',
  },
  linux: {
    icon: 'terminal',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85',
    alt: 'Linux terminal and software development environment',
    description: 'Linux systems, administration, and shell scripting.',
  },
  networking: {
    icon: 'network',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85',
    alt: 'Technical networking and infrastructure learning',
    description: 'Networking fundamentals, routing, switching, and CCNA.',
  },
  'programming-development': {
    icon: 'code',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85',
    alt: 'Software development code on a laptop',
    description: 'Python, automation, and programming fundamentals.',
  },
  'database-technologies': {
    icon: 'database',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85',
    alt: 'Data systems and database infrastructure',
    description: 'Oracle, SQL Server, PostgreSQL, and data foundations.',
  },
  'ai-emerging-technologies': {
    icon: 'bot',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85',
    alt: 'Modern technology collaboration and AI learning',
    description: 'AI fundamentals, generative AI, and machine learning.',
  },
};

export const technologyPreviews = courses.map((course) => ({
  ...course,
  ...technologyVisuals[course.slug],
}));
