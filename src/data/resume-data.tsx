import { ConsultlyLogo, ParabolLogo } from "@/images/logos"
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"

export const RESUME_DATA = {
  name: "Yogi Fitriadi Rakhim",
  initials: "YFR",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  about: "Creative Engineer from Indonesia 🇮🇩",
  summary:
    "Passionate in uix design, software development, data engineering, also cloud & AI. Excited to run, making beat, and love to watch e-sports.",
  avatarUrl: "/avatar.jpg",
  personalWebsiteUrl: "https://yogiifr.github.io",
  contact: {
    email: "yogiffrr@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yogiifr",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yogiifr/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Bandung Institute of Technology",
      degree: "Bachelor's Degree in Engineering",
      start: "2019",
      end: "2023",
    },
    {
      school: "Telkom Indonesia - Digistar Class",
      degree: "Software Developer",
      start: "2023",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Ersnt & Young Indonesia",
      link: "https://www.ey.com/en_id",
      badges: ["Full Time - Hybrid"],
      title: "Associate Technology Consultant",
      logo: ConsultlyLogo,
      start: "2024",
      end: "Current",
      description:
        "<div>\n    <p><strong>EY</strong> is a leading global professional services firm, providing audit, consulting, tax, and advisory services with a strong presence in over 150+ countries.</p>\n    <ul class='list-disc pl-4 pt-2'>\n   <li>Supported 5+ pursuits by assisting in crafting client proposals and technical strategies to win new engagements.</li>\n <li>Developed and designed technology solutions, including system architectures and digital workflows, to meet client objectives.</li>\n <li>Analyzed client needs and delivered IT advisory services to enhance business efficiency.</li>\n <li>Collaborated with teams to implement innovative tools and ensure project success.</li>\n   </ul>\n</div>",
    },
    {
      company: "IYKRA",
      link: "https://www.ey.com/en_id",
      badges: ["Apprenticeship- Remote"],
      title: "Data Engineer",
      logo: ConsultlyLogo,
      start: "2023",
      end: "2024",
      description:
        "<div>\n    <p><strong>IYKRA</strong>is a leading provider of data, tech, and business solutions in Indonesia, focusing on consulting, development, and education in big data, analytics, and AI to bridge talent and capability gaps for corporations and professionals.</p>\n    <ul class='list-disc pl-4 pt-2'>\n <li>Supported training sessions and ensured seamless learning in data analytics and machine learning for Toyota Astra Motor.</li>\n <li>Managed end-to-end data workflows, transferring data from data lake to Google BigQuery using Airflow, dbt, and Apache Kafka.</li>\n <li>Designed real-time data pipelines and dashboards in Tableau to enhance credit repayment analysis and minimize data anomalies.</li>\n <li>Led test sessions and delivered comprehensive reports on participant performance and program outcomes.</li>\n </ul>\n</div>",
    },
    {
      company: "Kedaireka.id",
      link: "https://kedaireka.id/",
      badges: ["Internship - Remote"],
      title: "UI/UX Designer",
      logo: ConsultlyLogo,
      start: "2022",
      end: "2023",
      description:
        "<div>\n    <p><strong>ITB Matching Fund Program</strong> in collaboration with PT Inovasi Teknologi Bangsa (InoTeb), fosters innovation and technological advancement in various industries.</p>\n    <ul class='list-disc pl-4 pt-2'>\n <li>Designed user-friendly interfaces for internal mobile apps, optimizing navigation for management in the chicken industry.</li>\n <li>Worked closely with engineers and developers to integrate design elements seamlessly, ensuring alignment with project goals.</li>\n <li>Gathered insights from management and users to refine app features, prioritizing user needs and enhancing overall usability.</li>\n </ul>\n</div>",
    },
  ],
  programmingLanguages: ["Python", "SQL", "Javascript", "Typescript"],
  techstack: [
    "ReactJS",
    "NextJS",
    "Microsoft Azure",
    "Google Cloud Platform",
    "Amazon Web Service",
    "Figma",
    "Adobe Creative Suite",
  ],
  projects: [
    {
      title: "Confidential Client",
      techStack: ["Microsoft Azure", "TypeScript", "Next.js", "TailwindCSS"],
      description: "AI custom dashboard for supporting client initiatives",
      logo: ConsultlyLogo,
      link: {
        label: "confidential.com",
        href: "https://confidential.com/",
      },
    },
    {
      title: "Confidential Client",
      techStack: ["Microsoft Azure", "TypeScript", "Next.js", "TailwindCSS"],
      description: "RAG Chatbot for supporting client works efficiency",
      logo: ConsultlyLogo,
      link: {
        label: "confidential.com",
        href: "https://confidential.co.id/",
      },
    },
  ],

  sideProjects: [
    {
      title: "Credix - Credit Repayment Ability",
      techStack: [
        "Google Cloud Platform",
        "Python",
        "SQL",
        "Airflow",
        "Kafka",
        "dbt",
        "Docker",
        "Tableau",
      ],
      description:
        "Assess the risk of loan default and take preventive measures to reduce potential issues with credit card users, referred to as debtors.",
      logo: ConsultlyLogo,
      link: {
        label: "credix-credit-repayment-ability",
        href: "https://github.com/yogiifr/Credix-DataEngineer-Project",
      },
    },
  ],
} as const
