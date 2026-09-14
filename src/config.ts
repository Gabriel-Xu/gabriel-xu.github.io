export const siteConfig = {
  name: "Gabriel Xu",
  title: "Computer Science @ Carnegie Mellon University",
  description: "Portfolio website of Gabriel Xu",
  accentColor: "#1d4ed8",
  social: {
    email: "gabrielx8421@gmail.com",
    linkedin: "https://linkedin.com/in/xu-gabriel",
    github: "https://github.com/Gabriel-Xu",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "ST Engineering iDirect",
      title: "Test Automation Engineering Intern",
      dateRange: "May 2026 - Aug 2026",
      bullets: [
        "Architected and deployed a Django and React web tool on Amazon Web Services (AWS) EKS and RDS with automated CI/CD pipelines, streamlining network tenant and modem reservation for 500+ engineers.",
        "Leveraged the company’s satellite communication technology and testing framework, which extends Pytest, to set up GitLab pipelines to monitor network traffic and display status checks, test results, and usage statistics of networks.",
      ],
    },
  ],
  education: [
    {
      school: "Carnegie Mellon University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "",
      achievements: [
        "3.89 GPA",
        "Dean's List with High Honors all semesters",
      ],
    },
    {
      school: "Thomas Jefferson High School for Science and Technology",
      degree: "High School Diploma",
      dateRange: "",
      achievements: [
        "4.67 GPA",
        "National Merit Finalist",
        "Perfect ACT Score (36 in all sections)",
      ],
    },
  ],
};
