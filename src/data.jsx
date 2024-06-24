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
    description: "26 Years",
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
  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023-2026",
    title: "Information Systems <span> Addis Ababa University </span>",
    desc: "Master of Science in Information Systems",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "50",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "89",
  },

  {
    id: 3,
    title: "CSS",
    percentage: "70",
  },
  {
    id: 4,
    title: "Wordpress",
    percentage: "80",
  },
  {
    id: 5,
    title: "React",
    percentage: "80",
  },

  {
    id: 6,
    title: "React-Native",
    percentage: "70",
  },
  {
    id: 7,
    title: "Node",
    percentage: "75",
  },
  {
    id: 8,
    title: "Express",
    percentage: "75",
  },
  {
    id: 9,
    title: "Django",
    percentage: "50",
  },
  {
    id: 10,
    title: "Photoshop",
    percentage: "75",
  },
  {
    id: 11,
    title: "Figma",
    percentage: "80",
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
