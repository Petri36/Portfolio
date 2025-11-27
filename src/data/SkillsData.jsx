// ------------------------------------
// ICON IMPORTS
// ------------------------------------
import {
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiReact,
  DiSass,
  DiNodejsSmall,
  DiMongodb,
  DiResponsive,
  DiPhp,
  DiWordpress,
} from "react-icons/di";

import {
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiReactrouter,
  SiStyledcomponents,
  SiLess,
  SiWebpack,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiNpm,
  SiSequelize,
  SiVercel,
  SiInsomnia,
  SiPostman,
  SiEslint,
  SiNotion,
  SiTrello,
  SiJquery,
  SiBabel,
  SiAdobephotoshop,
  SiSpring,
} from "react-icons/si";

import { AiFillGithub } from "react-icons/ai";
import { FiGitlab } from "react-icons/fi";
import { BsGit, BsFiletypeJava } from "react-icons/bs";


// ------------------------------------
// SKILLS ARRAY COMPLETO
// ------------------------------------

const skills = [
  // ------------------------------------
  // FRONTEND
  // ------------------------------------
  {
    skill: "HTML",
    color: "#ff6a00",
    icon: <DiHtml5 />,
    inProcess: false,
  },
  {
    skill: "CSS",
    color: "#0072ff",
    icon: <DiCss3 />,
    inProcess: false,
  },
  {
    skill: "JavaScript",
    color: "#d8ff00",
    icon: <DiJavascript />,
    inProcess: false,
  },
  {
    skill: "React",
    color: "#3ec8fd",
    icon: <DiReact />,
    inProcess: false,
  },
  {
    skill: "React Router",
    color: "#CA4245",
    icon: <SiReactrouter />,
    inProcess: false,
  },
  {
    skill: "Redux",
    color: "#764abc",
    icon: <SiRedux />,
    inProcess: false,
  },
  {
    skill: "Styled Components",
    color: "#DB7093",
    icon: <SiStyledcomponents />,
    inProcess: false,
  },
  {
    skill: "Sass",
    color: "#d900ff",
    icon: <DiSass />,
    inProcess: false,
  },
  {
    skill: "Less",
    color: "#2B4C80",
    icon: <SiLess />,
    inProcess: false,
  },
  {
    skill: "TailwindCSS",
    color: "#25bdf7",
    icon: <SiTailwindcss />,
    inProcess: false,
  },
  {
    skill: "Bootstrap",
    color: "#9100ff",
    icon: <SiBootstrap />,
    inProcess: false,
  },
  {
    skill: "Webpack",
    color: "#8DD6F9",
    icon: <SiWebpack />,
    inProcess: false,
  },
  {
    skill: "jQuery",
    color: "#0769AD",
    icon: <SiJquery />,
    inProcess: false,
  },
  {
    skill: "Responsive Design",
    color: "#005c83",
    icon: <DiResponsive />,
    inProcess: false,
  },

  // ------------------------------------
  // BACKEND
  // ------------------------------------
  {
    skill: "Node.js",
    color: "#019722",
    icon: <DiNodejsSmall />,
    inProcess: false,
  },
  {
    skill: "Express.js",
    color: "#404d59",
    icon: <SiExpress />,
    inProcess: false,
  },
  {
    skill: "NestJS",
    color: "#E0234E",
    icon: <SiNestjs />,
    inProcess: false,
  },

  // Hapi.js no tiene ícono → SVG personalizado si querés
  /*
  {
    skill: "Hapi.js",
    color: "#FF6C37",
    icon: <img src="/icons/hapi.svg" />,
    inProcess: false,
  },
  */

  {
    skill: "NPM",
    color: "#CB3837",
    icon: <SiNpm />,
    inProcess: false,
  },

  // ------------------------------------
  // DEVOPS
  // ------------------------------------
  {
    skill: "Docker",
    color: "#0db7ed",
    icon: <SiDocker />,
    inProcess: false,
  },
  {
    skill: "Vercel",
    color: "#000000",
    icon: <SiVercel />,
    inProcess: false,
  },

  // ------------------------------------
  // BASES DE DATOS
  // ------------------------------------
  {
    skill: "MongoDB",
    color: "#04ff00",
    icon: <DiMongodb />,
    inProcess: false,
  },

  // Mongoose tampoco existe en react-icons
  /*
  {
    skill: "Mongoose",
    color: "#800000",
    icon: <img src="/icons/mongoose.svg" />,
    inProcess: false,
  },
  */

  {
    skill: "MySQL",
    color: "#005c83",
    icon: <SiMysql />,
    inProcess: false,
  },
  {
    skill: "PostgreSQL",
    color: "#336791",
    icon: <SiPostgresql />,
    inProcess: false,
  },
  {
    skill: "Sequelize",
    color: "#52B0E7",
    icon: <SiSequelize />,
    inProcess: false,
  },

  // ------------------------------------
  // PHP & CMS
  // ------------------------------------
  {
    skill: "PHP",
    color: "#777bb3",
    icon: <DiPhp />,
    inProcess: false,
  },
  {
    skill: "WordPress",
    color: "#21759b",
    icon: <DiWordpress />,
    inProcess: false,
  },

  // ------------------------------------
  // HERRAMIENTAS
  // ------------------------------------
  {
    skill: "Git",
    color: "#ff3b00",
    icon: <BsGit />,
    inProcess: false,
  },
  {
    skill: "GitLab",
    color: "#ff3b00",
    icon: <FiGitlab />,
    inProcess: false,
  },
  {
    skill: "GitHub",
    color: "#ffffff",
    icon: <AiFillGithub />,
    inProcess: false,
  },
  {
    skill: "Insomnia",
    color: "#5849BE",
    icon: <SiInsomnia />,
    inProcess: false,
  },
  {
    skill: "Postman",
    color: "#FF6C37",
    icon: <SiPostman />,
    inProcess: false,
  },
  {
    skill: "ESLint",
    color: "#4B3263",
    icon: <SiEslint />,
    inProcess: false,
  },
  {
    skill: "Notion",
    color: "#000000",
    icon: <SiNotion />,
    inProcess: false,
  },
  {
    skill: "Trello",
    color: "#026AA7",
    icon: <SiTrello />,
    inProcess: false,
  },
  {
    skill: "Adobe Photoshop",
    color: "#31A8FF",
    icon: <SiAdobephotoshop />,
    inProcess: false,
  },
  {
    skill: "Babel",
    color: "#F9DC3E",
    icon: <SiBabel />,
    inProcess: false,
  },

  // ------------------------------------
  // EN APRENDIZAJE
  // ------------------------------------
  {
    skill: "Java",
    color: "#5382a1",
    icon: <BsFiletypeJava />,
    inProcess: true,
  },
  {
    skill: "Spring",
    color: "#6db33f",
    icon: <SiSpring />,
    inProcess: true,
  },
];

export { skills };
