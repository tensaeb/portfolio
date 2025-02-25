import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav_icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav_icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav_icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav_icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Tensae",
  },

  {
    id: 2,
    title: "Middle Name : ",
    description: "Befekadu",
  },
  {
    id: 3,
    title: "Last Name : ",
    description: "Zeleke",
  },

  {
    id: 4,
    title: "Age : ",
    description: "27 Years",
  },

  // {
  //   id: 5,
  //   title: "Nationality : ",
  //   description: "Ethopian",
  // },

  // {
  //   id: 6,
  //   title: "Freelance : ",
  //   description: "Available",
  // },

  {
    id: 5,
    title: "Address : ",
    description: "Addis Ababa, Ethiopia",
  },

  {
    id: 6,
    title: "Phone : ",
    description: "+251961146646",
  },

  {
    id: 7,
    title: "Email : ",
    description: "tensaeb2017@gmail.com",
  },

  // {
  //   id: 8,
  //   title: "Skype : ",
  //   description: "tensaeb",
  // },

  {
    id: 8,
    title: "Langages : ",
    description: "Amharic, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "10+",
    title: "Completed <br /> Projects",
  },

  // {
  //   id: 3,
  //   no: "81+",
  //   title: "Happy <br /> Customers",
  // },

  // {
  //   id: 4,
  //   no: "53+",
  //   title: " Awards <br /> Won",
  // },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Sep 2023 - May 2024",
    title: "Full-stack Developer <span> OneTap </span>",
    desc: "In my role as a Full-stack developer, I seamlessly blended front-end and back-end tasks, leveraging HTML, CSS, JavaScript, Python, and SQL. Beyond traditional development, I incorporated UI/UX design skills to craft intuitive interfaces. From responsive design to database integration, my contributions ensured efficient project execution and enhanced user satisfaction.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Aug 2022 - Apr 2023",
    title: "Software Developer <span> Line Addis Consultancy </span>",
    desc: "As a software Developer, I craft web pages using HTML, CSS, JavaScript, and Python. I design intuitive user interfaces, maintain brand consistency, and conduct rigorous testing. My documentation and code reviews ensure smooth collaboration using Jira Software.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Nov 2021 - May 2022",
    title: "Backend Developer <span> Bete-Semay Creative Media </span>",
    desc: "As a backend developer, I am tasked with designing elegant, efficient, and scalable solutions which allow fast feature development with stable infrastructure. This includes designing data models for database abstractions, creating server endpoints for user requests,",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016-2021",
    title: "Software Engineering <span> Addis Ababa University </span>",
    desc: "Bachelor of Science in Software Engineering",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023-2026",
    title: "Information Systems <span> Addis Ababa University </span>",
    desc: "Master of Science in Information Systems",
  },
  // {
  //   id: 6,
  //   category: "education",
  //   icon: <FaGraduationCap />,
  //   year: "2023-2026",
  //   title: "Information Systems <span> Addis Ababa University </span>",
  //   desc: "Master of Science in Information Systems",
  // },
];

export const skills = [
  // Front-End Technologies
  {
    id: 1,
    title: "Html",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    title: "CSS",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    title: "Javascript",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    title: "TypeScript",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 5,
    title: "React",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 6,
    title: "React-Native",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", // Using React icon as fallback
  },
  {
    id: 7,
    title: "Next JS",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 8,
    title: "Redux",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  {
    id: 9,
    title: "Material UI",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
  {
    id: 10,
    title: "Tailwind CSS",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },

  // Back-End Technologies
  {
    id: 11,
    title: "Node",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 12,
    title: "Express",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    id: 13,
    title: "Python",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    id: 14,
    title: "Django",
    iconLink:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/django/django-plain.svg",
  },
  {
    id: 15,
    title: "Djang Rest Framework",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg",
  },
  {
    id: 16,
    title: "GraphQL",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },

  // Databases
  {
    id: 17,
    title: "Mongo DB",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 18,
    title: "MySQL",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    id: 19,
    title: "PostgreSQL",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },

  // Other Tools
  {
    id: 20,
    title: "Docker",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
  },
  {
    id: 21,
    title: "Wordpress",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  },

  // Data Science (Optional - You might want to group these differently)
  {
    id: 22,
    title: "Scikit-Learn",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  },
  {
    id: 23,
    title: "Pandas",
    iconLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
