export const PERSONAL = {
  name: "Hammad Ghani",
  title: "Senior Frontend Engineer",
  taglines: [
    "I build things people actually use.",
    "I ship 3x faster with AI as my co-pilot.",
    "Frontend engineer. Remote-ready. Results-driven."
  ],
  subTagline: "React · Next.js · TypeScript · AI-Augmented",
  email: "hammy.pk30@gmail.com",
  whatsapp: "https://wa.me/923151068487",
  whatsappDisplay: "+92-315-1068487",
  linkedin: "https://www.linkedin.com/in/syed-muhammad-hammad-ghani/",
  github: "https://github.com/Muhammad-Hammad",
  portfolio: "https://hammad-ghani.netlify.app/",
  resume: "https://drive.google.com/file/d/1UUTYUhYKuoubn-y52Pq_vHl7NYGb6XJh/view?usp=sharing",
  location: "Karachi, Pakistan",
  availability: "Available for remote work",
  yearsExperience: "5+",
  projectsShipped: "20+",
  aiSpeedMultiplier: "3×",
  countriesServed: "4"
};

export const SKILLS = [
  {
    category: "Frontend Core",
    isAI: false,
    items: [
      "React", "Next.js", "TypeScript", "JavaScript (ES6+)",
      "Redux", "Zustand", "TanStack Query", "Storybook",
      "Jest", "React Testing Library"
    ]
  },
  {
    category: "UI & Styling",
    isAI: false,
    items: [
      "Tailwind CSS", "ShadCN/UI", "Radix UI", "Material UI",
      "Framer Motion", "Sass", "CSS Modules"
    ]
  },
  {
    category: "AI & Dev Tools",
    isAI: true,
    items: [
      "Cursor AI", "MCP", "ChatGPT", "Claude", "Gemini",
      "v0 by Vercel", "GitHub Copilot", "Prompt Engineering"
    ]
  },
  {
    category: "Backend & Infra",
    isAI: false,
    items: [
      "Node.js", "NestJS", "Express", "GraphQL", "PostgreSQL",
      "MongoDB", "Redis", "GitHub Actions", "AWS S3", "Vercel"
    ]
  }
];

export const EXPERIENCE = [
  {
    company: "Aciano Technologies",
    role: "Senior Frontend Engineer",
    period: "Nov 2024 – Present",
    isCurrent: true,
    bullets: [
      "Led micro-frontend architecture unifying 5 products; improved scalability by 20%",
      "Built reusable form components with AI-assisted workflows, reducing dev time by 30%",
      "Established code standards, PR guidelines, and mentored junior engineers"
    ]
  },
  {
    company: "Qavi Technologies",
    role: "Software Engineer",
    period: "Oct 2021 – Aug 2024",
    isCurrent: false,
    bullets: [
      "Dynamic form builder cutting config overhead by 40%",
      "Led Angular 9→11 migration; 15% performance boost",
      "Google Document AI integration for invoice parsing"
    ]
  },
  {
    company: "Digitli",
    role: "Junior Software Engineer",
    period: "Aug – Oct 2021",
    isCurrent: false,
    bullets: [
      "Flutter e-commerce app with 10,000+ downloads"
    ]
  },
  {
    company: "Computing Yard",
    role: "Junior Frontend Developer",
    period: "Jan – Jun 2021",
    isCurrent: false,
    bullets: [
      "Multilingual Next.js + GraphQL platform; 50,000+ users"
    ]
  }
];

export const PROJECTS = [
  {
    title: "ProposalForge",
    description: "An AI-powered proposal and contract generator for freelance engineers. Paste a job post, get a winning proposal and airtight Statement of Work in 60 seconds. Built with Next.js, Gemini API, and fully vibe coded using AI-augmented development.",
    tech: ["Next.js", "TypeScript", "Gemini API", "Tailwind", "ShadCN/UI", "Framer Motion"],
    github: "https://github.com/Muhammad-Hammad/Proposal-Forge",
    demo: "",
    featured: true
  },
  {
    title: "Spotify Playlist Generator",
    description: "AI-powered playlist generator that creates personalized Spotify playlists based on your mood, using OpenAI's API and Spotify Web API.",
    tech: ["React", "TypeScript", "OpenAI API"],
    github: "https://github.com/muhammad-hammad/spotify-playlist-generator",
    demo: "",
    featured: false
  }
];
