export const personalInfo = {
  name: "Chetna Chandwani",
  title: "Full Stack Software Engineer",
  tagline: "I build scalable, production-grade applications with clean architecture and measurable impact.",
  email: "chandwca@gmail.com",
  phone: "+1 513-807-1077",
  location: "Newark, CA",
  linkedin: "https://linkedin.com/in/chetna-chandwani",
  github: "https://github.com/chetnachandwani",
  resumeUrl: "/Chetna_Chandwani_Resume.pdf",
};

export const aboutMe = {
  summary:
    "Software Engineer with 4+ years of experience building production-grade web and mobile applications. I specialize in React, Spring Boot (Kotlin), and scalable full-stack architectures that deliver measurable business outcomes.",
  strengths: [
    "Modular, reusable architecture design",
    "Performance-first frontend engineering",
    "Full-stack delivery with Spring Boot & React",
    "Cross-functional team collaboration",
  ],
  differentiators:
    "I combine deep frontend expertise with strong backend skills, enabling me to own features end-to-end — from database schema to pixel-perfect UI — while consistently improving delivery timelines and reducing defects.",
};

export interface TechCategory {
  category: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  { category: "Languages", items: ["Kotlin", "Java", "TypeScript", "JavaScript", "Python", "PHP"] },
  { category: "Frontend", items: ["React", "React Native", "Vue.js", "AngularJS", "Redux", "Zustand", "GraphQL"] },
  { category: "Backend", items: ["Spring Boot", "FastAPI", "Node.js", "Laravel"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "DevOps & Tools", items: ["Git", "GitHub", "Cypress", "Figma", "VS Code"] },
  { category: "Cloud & Certs", items: ["Azure AI Fundamentals (AI-900)", "Azure Data Fundamentals (DP-900)"] },
];

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  achievements: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    name: "Caritra — Sports Marketplace",
    description:
      "A web application connecting tennis enthusiasts with nearby coaching centers. Enables providers to list offerings, schedule classes, and manage bookings on a unified platform.",
    techStack: ["React.js", "Zustand", "Spring Boot (Kotlin)", "MongoDB", "Flowable BPMN", "Drools"],
    achievements: [
      "Improved feature delivery timelines by ~15–20% through modular architecture",
      "Enhanced app responsiveness and maintainability by 30% with Zustand state management",
      "Built custom reusable form system, reducing code redundancy by 70%",
    ],
  },
  {
    name: "ACTS — Compliance Testing Platform",
    description:
      "An automated compliance testing platform that streamlines test execution, validation, and reporting to improve accuracy and reduce manual effort.",
    techStack: ["React.js", "Redux", "FastAPI", "PostgreSQL"],
    achievements: [
      "Improved test efficiency and UX by 40%",
      "Integrated multi-cloud file uploads (GCP, AWS, Azure), enhancing flexibility by 50%",
      "Increased validation accuracy by 35% through automation",
    ],
  },
  {
    name: "YOORZ — Background Verification",
    description:
      "A mobile and web application performing secure background checks by validating identities, documents, and addresses through automated verification workflows.",
    techStack: ["React Native", "Node.js", "PostgreSQL"],
    achievements: [
      "Improved usability and verification speed by 40%",
      "Increased verification accuracy by 30% with multi-point validation logic",
      "Reduced manual review by 25% through automated workflows",
    ],
  },
  {
    name: "Configurable Rule Engine with BPMN",
    description:
      "A full-stack configurable rule engine integrating Drools with Flowable BPMN for dynamic decision-making inside workflow processes.",
    techStack: ["Spring Boot", "React.js", "React Flow", "Drools", "Flowable BPMN"],
    achievements: [
      "Built drag-and-drop BPMN designer using React Flow",
      "Developed rule management UI supporting grouped rules and live runtime updates",
      "Enabled dynamic rule execution against incoming data within BPMN workflows",
    ],
  },
];

export interface Experience {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: "Adroitts",
    role: "Software Engineer",
    duration: "Aug 2023 – Present",
    achievements: [
      "Architected and delivered 3 production-grade applications using React / React Native with Spring Boot and FastAPI backends",
      "Reduced initial page load time by ~20–25% through structured state management and code-splitting",
      "Optimized frontend with 20+ reusable shadcn/ui components, lowering UI defects by ~15–20%",
      "Led sprint demos and grooming for a 5-engineer team, maintaining ~85–90% sprint reliability",
    ],
  },
  {
    company: "University of Cincinnati — ITSC",
    role: "Part-Time Developer",
    duration: "Jan 2022 – Apr 2023",
    achievements: [
      "Built virtual event platform with React and GraphQL supporting 200+ participants",
      "Implemented end-to-end UI testing with Cypress, reducing regression defects",
      "Engineered data validation workflows improving admin processing efficiency",
    ],
  },
  {
    company: "JMAN Group",
    role: "Software Engineer",
    duration: "Dec 2020 – Dec 2021",
    achievements: [
      "Developed education management platform with Laravel, Vue.js, and PostgreSQL",
      "Built employee management system for 100+ employees using AngularJS and Node.js",
      "Resolved cross-time-zone datetime issues across UK and India deployments",
      "Automated monthly survey distribution, reducing manual effort by ~30–40%",
    ],
  },
];

export const skills = [
  { name: "System Architecture", description: "Modular, scalable application design" },
  { name: "State Management", description: "Redux, Zustand, context-based patterns" },
  { name: "Performance Optimization", description: "Code-splitting, lazy loading, caching" },
  { name: "Scalable Backends", description: "Spring Boot, FastAPI, microservices" },
  { name: "Testing & Quality", description: "Cypress, unit/integration tests, CI/CD" },
  { name: "Workflow Automation", description: "BPMN orchestration, Drools rule engines" },
];

export const education = [
  { degree: "M.S. in Information Technology", school: "University of Cincinnati", year: "April 2023" },
  { degree: "B.E. in Electrical & Electronics Engineering", school: "Anna University", year: "September 2020" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export type HeroSocialIcon = "linkedin";

export interface HeroStat {
  label: string;
  value: number;
  suffix?: string;
}

export interface HeroSocialLink {
  href: string;
  label: string;
  icon: HeroSocialIcon;
}

export interface HeroSection {
  availabilityText: string;
  greeting: string;
  codeCommentPrefix: string;
  codeIdentityVar: string;
  fallbackName: string;
  fallbackTagline: string;
  roles: string[];
  snippetWindowTitle: string;
  snippetLines: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  resumeCta: {
    label: string;
    fallbackHref: string;
  };
  connectLabel: string;
  socialLinks: HeroSocialLink[];
  profileImage: {
    src: string;
    fallbackAlt: string;
  };
  openToRolesText: string;
  stats: HeroStat[];
  scrollLabel: string;
  particles: {
    count: number;
    minSize: number;
    sizeRange: number;
    maxDelay: number;
  };
}

export const heroSection: HeroSection = {
  availabilityText: "Available for Work",
  greeting: "Hello, I'm",
  codeCommentPrefix: "//",
  codeIdentityVar: "developer",
  fallbackName: "Your Name",
  fallbackTagline: "Building elegant, performant digital experiences that leave a lasting impression.",
  roles: [personalInfo.title, "UI/UX Enthusiast", "Problem Solver"],
  snippetWindowTitle: "HeroPhonePreview.tsx",
  snippetLines: [
    "const profile = {",
    "  name: \"Chetna Chandwani\",",
    "  role: \"Full Stack Software Engineer\",",
    "  location: \"Newark, CA\",",
    "  status: \"Open to development roles\",",
    "};",
    "",
    "const HeroPhonePreview = () => (",
    "  <PhoneFrame>",
    "    <img src=\"/profile.jpg\" alt={profile.name} />",
    "    <Badge>{profile.status}</Badge>",
    "  </PhoneFrame>",
    ");",
    "",
    "export default HeroPhonePreview;",
  ],
  primaryCta: {
    label: "View Projects",
    href: "#projects",
  },
  resumeCta: {
    label: "Resume",
    fallbackHref: "#",
  },
  connectLabel: "Connect",
  socialLinks: [
    {
      href: personalInfo.linkedin,
      label: "LinkedIn",
      icon: "linkedin",
    },
  ],
  profileImage: {
    src: "profile.jpg",
    fallbackAlt: "Profile",
  },
  openToRolesText: "Open to development roles",
  stats: [
    { label: "Projects", value: 6, suffix: "+" },
    { label: "Experience", value: 5, suffix: "yrs" },
    { label: "Clients", value: 5, suffix: "+" },
  ],
  scrollLabel: "Scroll",
  particles: {
    count: 18,
    minSize: 3,
    sizeRange: 5,
    maxDelay: 4,
  },
};

export interface AboutTechPill {
  name: string;
  icon: string;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  educationHeading: string;
  marqueeDuration: number;
  marqueeCopies: number;
  techPills: AboutTechPill[];
}

export const aboutSection: AboutSection = {
  title: "About Me",
  subtitle: "Who I am and what drives me",
  educationHeading: "Education",
  marqueeDuration: 90,
  marqueeCopies: 4,
  techPills: [
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
    { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
    { name: "Postgres", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  ],
};
