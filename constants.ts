import { Experience, Project, Education, SkillCategory } from './types';

export const resumeData = {
  name: "Adithyan M. Nair",
  title: "Full-Stack Developer & AI Enthusiast",
  location: "Kerala, Alappuzha",
  phone: "+91 90617 37021",
  email: "adithyannair24bcd22@iiitkottayam.ac.in",
  socials: {
    github: "https://github.com/adi3433",
    linkedin: "https://linkedin.com/in/adithyan-m-nair-b21432337/",
    codeforces: "https://codeforces.com/profile/thewhiteknight001",
  },
  summary: "A passionate second-year IIIT Kottayam student, dedicated to building scalable web applications and exploring emerging technologies.",
  skills: [
    {
      title: "Languages",
      skills: ["Java", "C/C++", "C", "Python", "JavaScript", "Dart"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Flutter", "PHP", "Express.js"],
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "MySQL", "Git", "Firebase", "Docker", "RESTful APIs"],
    },
    {
      title: "Other",
      skills: ["HTML5", "CSS3", "Bootstrap", "Material UI", "Agile/Scrum workflows"],
    },
  ] as SkillCategory[],
  experience: [
    {
      role: "SDE Intern (Full-Stack)",
      company: "Inlighn Tech",
      period: "Jun 2025 - Jul 2025",
      points: [
        "Developed and maintained front-end components using React and Material UI, improving UI consistency across modules.",
        "Built RESTful APIs with Node.js and Express, integrating with MongoDB and Firebase for data storage and authentication.",
        "Collaborated with a cross-functional team in Agile sprints, participating in design reviews and daily stand-ups.",
        "Wrote unit and integration tests with Jest and Supertest, increasing code coverage by 20%.",
      ],
      technologies: ["React", "Material UI", "Node.js", "Express", "MongoDB", "Firebase", "Jest"]
    },
  ] as Experience[],
  projects: [
    {
      name: "Prototype Websites",
      description: "Built and deployed multiple test websites demonstrating full-stack functionality.",
      details: ["Lamas Hardware (e-commerce demo)"],
      link: "https://lamas-hardware.web.app/",
      technologies: ["React", "Firebase", "Material UI", "Node.js"]
    },
    {
      name: "Smart India Hackathon 2024",
      description: "Finalist (Top 4/300+ teams) developing a fuzzy-name detection system for the Madhya Pradesh Police problem statement.",
      technologies: ["Python", "Flask", "Machine Learning", "NLP"]
    },
  ] as Project[],
  education: [
    {
      degree: "Bachelor of Technology, AI & Data Science",
      institution: "IIIT Kottayam",
      period: "Sep 2024 - Present",
      details: ["CGPA: 8.0/10"],
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Bishop Moore Vidyapith",
      period: "Mar 2022 - Mar 2023",
      details: ["Aggregate: 90%"],
    },
  ] as Education[],
};

export const resumeText = `
Name: Adithyan M. Nair
Location: Kerala, Alappuzha, India
Phone: +91 90617 37021
Email: adithyannair24bcd22@iiitkottayam.ac.in
GitHub: adi3433
LinkedIn: linkedin.com/in/adithyan-m-nair-b21432337/
Codeforces: thewhiteknight001

Summary: A passionate second-year student at IIIT Kottayam, focused on building scalable web applications and exploring emerging technologies.

---

Skills:
- Languages: Java, C/C++, C, Python, JavaScript, Dart
- Frameworks & Libraries: React, Node.js, Flutter, PHP, Express.js
- Databases & Tools: MongoDB, MySQL, Git, Firebase, Docker, RESTful APIs
- Other: HTML5, CSS3, Bootstrap, Material UI, Agile/Scrum workflows

---

Work Experience:

SDE Intern (Full-Stack) at Inlighn Tech (Jun 2025 - Jul 2025)
- Developed and maintained front-end components using React and Material UI, improving UI consistency across modules.
- Built RESTful APIs with Node.js and Express, integrating with MongoDB and Firebase for data storage and authentication.
- Collaborated with a cross-functional team in Agile sprints, participating in design reviews and daily stand-ups.
- Wrote unit and integration tests with Jest and Supertest, increasing code coverage by 20%.
- Technologies used: React, Material UI, Node.js, Express, MongoDB, Firebase, Jest

---

Projects:

1. Prototype Websites
   - Description: Built and deployed multiple test websites demonstrating full-stack functionality.
   - Example: Lamas Hardware (e-commerce demo) available at https://lamas-hardware.web.app/
   - Technologies used: React, Firebase, Material UI, Node.js

2. Smart India Hackathon 2024
   - Achievement: Finalist (Top 4 out of 300+ teams).
   - Project: Developed a fuzzy-name detection system for the Madhya Pradesh Police problem statement.
   - Technologies used: Python, Flask, Machine Learning, NLP

---

Education:

1. Bachelor of Technology, AI & Data Science
   - Institution: IIIT Kottayam
   - Period: Sep 2024 - Present
   - CGPA: 8.0/10

2. Higher Secondary Certificate
   - Institution: Bishop Moore Vidyapith
   - Period: Mar 2022 - Mar 2023
   - Aggregate: 90%
`;
