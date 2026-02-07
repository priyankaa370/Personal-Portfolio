/** 
 * @copyright 2025 priyankaPortfolio
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,

  FileText,
  Github,
  Globe,
  Home,
 
  Layers,
  Linkedin,
  Mail,
 
  Palette,

  Settings,
  Smartphone,

  User,
  Youtube,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', 
    link: '#resume', 
    icon: FileText },
  
  { label: 'Contact', 
    link: '#contact', 
    icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Github,
    label: 'GitHub',
    link: '/https://github.com/priyankaa370',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: '/https://www.linkedin.com/in/pb37/',
  },
  {
    icon: Youtube,
    label: 'Youtube',
    link: '/#',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/telco1.png',
    title: 'Telco Customer Churn Analysis',
    tags: ['GitHub'],
    projectLink: 'https://github.com/priyankaa370/Telco-Customer-Churn-Analysis/tree/main',
  },
  {
    imgSrc: '/images/project-ph-2.jpeg',
    title: 'Home Loan Approval Prediction',
    tags: ['GitHub'],
    projectLink: 'https://github.com/priyankaa370/Home-Loan-Approval-Prediction',
  },
  {
    imgSrc: '/images/project-ph-3.jpeg',
    title: 'Marketing Analytics for OOH Billboard Planning',
    tags: ['GitHub'],
    projectLink: 'https://github.com/priyankaa370/Marketing-Analytics-for-OOH-Billboard-Audience-Segmentation-Scoring-Site-Planning',
  },
  {
    imgSrc: '/images/project-ph-4.jpeg',
    title: 'Full stack music app',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
];

const education: ExperienceType[] = [
  {
    year: '2018 – 2022',
    title: 'Bachelor of Engineering in Electronics',
    institute: 'University of Mumbai, St. Francis Institute of Technology',
    location: 'Mumbai, India',
    desc: 'Graduated with First Class Honors, focusing on digital signal processing and embedded systems. (CGPA: 9.4/10)',
  
  },
  {
    year: '2022 – 2024',
    title: 'Master of Science in Information Systems',
    institute: 'Stevens Institute of Technology, School of Business',
    location: 'Hoboken, NJ',
    desc: 'Specialized in data analytics, machine learning IT strategy, and project management. (GPA: 3.9/4.0)',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2023 – 2024',
    title: 'Graduate Teaching Assistant',
    institute: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    desc: 'Assisted in teaching and mentoring undergraduate students in computer science and data analytics courses.',
  },
  {
    year: '2024 – 2025',
    title: 'Statistical and Data Mining Analyst Intern',
    institute: 'Technical Consulting and Research, Inc. (TCR)',
    location: 'Remote, USA',
    desc: 'Analyzed large datasets to extract actionable insights and supported data-driven decision-making processes.',
  },
  {
    year: '2025 – Present',
    title: 'Business Data Analyst',
    institute: 'KGS Technology Group, Inc.',
    location: 'Remote, USA',
    desc: 'Spearheading data analysis initiatives to optimize business processes and enhance operational efficiency.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'SQL',
    imgSrc: '/images/tools/sql.svg',
  },
  {
    label: 'Python',
    imgSrc: '/images/tools/python.svg',
  },
  {
    label: 'Tableau',
    imgSrc: '/images/tools/tableau.svg',
  },
  {
    label: 'Pandas',
    imgSrc: '/images/tools/pandas.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Power BI',
    imgSrc: '/images/tools/powerbi.svg',
  },
  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
  },
  {
    label: 'Scikit-learn',
    imgSrc: '/images/tools/scikit-learn.svg',
  },
  {
    label: 'Tensorflow',
    imgSrc: '/images/tools/tensorflow.svg',
  },
  {
    label: 'PowerPoint',
    imgSrc: '/images/tools/powerpoint.svg',
  },
  {
    label: 'Excel',
    imgSrc: '/images/tools/excel.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Data Analysis & Insights',
    desc: 'I analyze complex datasets to extract meaningful insights and patterns that drive business decisions.',
    projects: 'Python, SQL, Excel',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Dashboard & Visualization',
    desc: 'Creating interactive dashboards and visualizations using tools like Tableau and Power BI to communicate data effectively.',
    projects: 'Tableau, Power BI, Python (Matplotlib, Seaborn)',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Predictive Modeling',
    desc: 'Building predictive models using machine learning techniques to forecast trends and behaviors.',
    projects: 'Scikit-learn, TensorFlow',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Storytelling with Data',
    desc: 'Transforming raw data into compelling narratives that inform and engage audiences.',
    projects: 'Google Slides/PowerPoint, Tableau Story Points',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  
];

const statsData: StatsType[] = [
  
  {
    number: '02+',
    label: 'Years Of Experience',
  },
  {
    number: '100k+',
    label: 'Records Analyzed',
  },
  {
    number: '10+',
    label: 'Projects Done',
  },
];



export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,

};