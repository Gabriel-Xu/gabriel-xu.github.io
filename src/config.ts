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
    "I am a Computer Science student at Carnegie Mellon University, concentrating in Computer Systems. I am interested in high-performance systems engineering, advanced mathematics, and algorithmic theory.",
  skills: ["C++", "Python", "C", "SQL", "JavaScript/TypeScript", "Java", "GitLab", "Docker", "AWS"],
  projects: [
    {
      name: "TJ Computer Team Online Judge",
      description:
        "Led development on an online judge website to run and grade user code submissions, built with Express.js/Node.js and utilizing OAuth and REST APIs. Resulted in a 50% increase in users over the 2024-2025 school year. Eliminated 100% of production crashes by adding database connection pooling and resolving asynchronous race conditions under high loads.",
      link: "https://github.com/Gabriel-Xu/autograder",
      skills: ["Express.js", "Google Cloud Platform (GCP)", "PostgreSQL"],
    },
  ],
  experience: [
    {
      company: "ST Engineering iDirect",
      title: "Test Automation Engineering Intern",
      dateRange: "May 2026 - Aug 2026",
      bullets: [
        "Architected and deployed a Django and React web tool on Amazon Web Services (AWS) EKS and RDS with automated CI/CD pipelines, streamlining network tenant and modem reservation for 500+ engineers.",
        "Established GitLab pipelines to monitor testing environments for satellite communication software, displaying hardware specification, software versions, status checks, test results, and usage statistics.",
      ],
    },
    {
      company: "AlphaStar Academy",
      title: "Computer Science Instructor",
      dateRange: "Jun 2025 - Aug 2025",
      bullets: [
        "Interactively explained new concepts and guided students through practice problems as instructor for the USACO Silver course and teaching assistant for the Python Programming and Java Programming courses.",
        "Created Estimathon and Jeopardy web applications to use during instruction. Selected suitable practice problems for problem banks and wrote scripts to generate test data. Reached 50+ students across all roles.",
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
