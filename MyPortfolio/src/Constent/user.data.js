import TIUImg from "../assets/assets/technologo.jpeg"
import TCSImg from "../assets/assets/tcs.svg";
import PortfolioImg from "../assets/assets/portfolio.jpeg";
import TasteTroopImg from "../assets/assets/tastetroop.jpeg";
import ReactIcon from "../assets/assets/React.svg";
import JavaScriptIcon from "../assets/assets/JavaScript.svg";
import HTMLIcon from "../assets/assets/HTML5.svg";
import CSSIcon from "../assets/assets/CSS3.svg";
import BootstrapIcon from "../assets/assets/Bootstrap.svg";
import TailwindIcon from "../assets/assets/Tailwind CSS.svg";
import ExpressIcon from "../assets/assets/Express.svg";
import MongoDBIcon from "../assets/assets/MongoDB.svg";
import TypeScriptIcon from "../assets/assets/TypeScript.svg";
import GitIcon from "../assets/assets/Git.svg";
import GitHubIcon from "../assets/assets/GitHub.svg";
import NextJsIcon from "../assets/assets/Next.js.svg";
import NodeJsIcon from "../assets/assets/Node.js.svg";
import SIHIcon from "../assets/assets/SIH2.jpg"
import PawzzLogo from "../assets/assets/pawzzlogo.jpeg"
import Granthalay from "../assets/assets/Granth.png"
import Portfolio from "../assets/assets/GreenF.png"
import Simon from "../assets/assets/Simon.png"
import figma from "../assets/assets/figma.png"
import react from "../assets/assets/react.png"
import sass from "../assets/assets/sass.png"

export const userData = {
  name: "Rishab Kumar",
  location: "Kolkata, India",
  role: "Web Developer",
  role_desc:
    "Hi, I'm Rishab Kumar. A dedicated frontend professional exploring backend technologies to build robust, full-stack websites.",
  socials: {
    linkedin: "https://www.linkedin.com/in/rish4b/",
    github: "https://github.com/Rish4b",
    email: "yadavrishab0234@gmail.com",
    resume: "/RishabKumarResume.pdf", // Add your resume file path here
  },
  skillsData: {
    title: "My Tech Stack",
    desc: "I'm proficient in a range of modern technologies that empower me to build highly functional solutions.",
    technologies: [
      // Programming Languages
      {
        id: 1,
        name: "JavaScript",
        type: "Programming Language",
        image: JavaScriptIcon,
      },
    //   {
    //     id: 2,
    //     name: "TypeScript",
    //     type: "Programming Language",
    //     image: TypeScriptIcon,
    //   },

      // Frontend Libraries and Frameworks
      {
        id: 3,
        name: "React",
        type: "JavaScript Library",
        image: ReactIcon,
      },
    //   {
    //     id: 4,
    //     name: "Next.js",
    //     type: "React Framework",
    //     image: NextJsIcon,
    //   },

      // Styling and CSS Frameworks
      {
        id: 5,
        name: "Tailwind CSS",
        type: "CSS Framework",
        image: TailwindIcon,
      },

      //Backend and Databases
       {
        id: 6,
        name: "Node.js",
        type: "JavaScript Runtime",
        image: NodeJsIcon,
      },
      {
        id: 7,
        name: "Express",
        type: "Web Framework",
        image: ExpressIcon,
      },
      {
        id: 8,
        name: "MongoDB",
        type: "Database",
        image: MongoDBIcon,
      },

      // Tools and Version Control
      {
        id: 9,
        name: "Git",
        type: "Version Control",
        image: GitIcon,
      },
    ],
  },
  experienceData: {
    title: "Experience",
    desc: "A glimpse into my academic and profesional experience, shaping my growth in the tech world.",
    exp: [
        
      {
        id: 3,
        title: "Freelancer",
        company: "Trio Shake and Co.",
        location: "Patna, India",
        year: "Aug 2025 - Working",
        role:"Website Making", 
        //image: ,
      },
      {
        id: 2,
        title: "Hackathon",
        company: "Smart India Hackathon (SIH)",
        location: "kolkata, India",
        year: "Nov 2024",
        role: "Participant",
        image: SIHIcon,
      },
      {
        id: 1,
        title: "Social Media Marketing",
        company: "Pawzz Foundation",
        location: "Remote",
        year: "Aug 2024",
        role: "To make the engagement more user-friendly and do some analitics about the growth of social media page",
        image: PawzzLogo,
        },
    ],
    edu: [
      {
        id: 1,
        degree: "Bachelor of Technology in Computer Science and Engineering specialization in Artificial Intelligence",
        institution: "Techno India University",
        year: "Aug 2022 - present",
        image: TIUImg,
      },
    ],
  },
  projectsData: {
    title: "Personal Projects",
    desc: "Code-Powered Designs in Action",
    projects: [
      {
        id: 2,
        name: "GreenForge(working)",
        description: "AA Learing website for SMEs where they devlop there skill and many more",
        techStack: ["JavaScript", "React", "TailwindCSS", "GSAP", "Render", "MongoDB","Express", "Node","Framer"],
        image: Portfolio,
        github: "https://github.com/Rish4b/GreenForge",
        website: "https://greenforge-8sdn.onrender.com/",
      },
      {
        id: 1,
        name: "Granthalay",
        description:
          "A OnlineBookStore website to explore your fav book and have with you",
        techStack: [
          "JavaScript",
          "React",
          "React Router",
          "Node Js",
          "Express",
          "MongoDB",
        ],
        image:Granthalay,
        github: "",
        website: "https://bookstoreapp-frontend2.onrender.com/",
      },
      
      {
        id: 3,
        name: "Simon Say Game",
        description: "A fun game for Strong the Memory An interactive memory game built with JavaScript that puts your focus, timing, and recall skills to the test. ",
        techStack: ["JavaScript", "GitHub", "CSS", ],
        image: Simon,
        github: "https://github.com/Rish4b/Simons-Say-game",
        website: "https://rish4b.github.io/Simons-Say-game/",
      },
    ],
  },
  contactData: {
    salutation: "Hi There",
    title: "Contact Me",
    subTitle: "Take a coffee & chat with me",
    emailDesc: "Mail me at",
    linkedin: "Linkedin",
    github: "Github",
  },
};
