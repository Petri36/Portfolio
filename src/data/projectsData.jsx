import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiReact,
  SiBootstrap,
  DiMongodb,
  DiResponsive,
  DiSass,
  SiPostgresql,
  SiRedux,
} from "./SkillsData";

export const projectsData = [
  {
    id: 0,
    title: "SplitIt",
    image: "https://res.cloudinary.com/deve27qy9/image/upload/fl_preserve_transparency/v1764080010/splitit.jpg?_s=public-apps",
    deploy: "https://splitit-pi.vercel.app/",
    github: "",
    technologies: [
      <DiHtml5 />,
      <DiCss3 />,
      <DiJavascript />,
    ],
    description:
      "Aplicación web para dividir gastos con amigos de forma rápida y simple, ideal para comidas, viajes y juntadas.",
    newProject: true,
  },

  {
    id: 1,
    title: "Rick & Morty",
    image:
      "https://res.cloudinary.com/deve27qy9/image/upload/v1684276477/R_M_lkmoin.png",
    deploy: "https://rick-morty-petri36.vercel.app/",
    github: "https://github.com/Petri36/Rick-Morty",
    technologies: [
      <DiHtml5 />,
      <DiCss3 />,
      <DiJavascript />,
      <DiReact />,
      <SiRedux />,
    ],
    description:
      "Aplicación que permite visualizar todos los personajes de la serie, filtrarlos, añadirlos a favoritos y buscarlos.",
    newProject: false,
  },

  {
    id: 2,
    title: "Pokemon App",
    image:
      "https://res.cloudinary.com/deve27qy9/image/upload/v1684278425/pokemon_loimus.png",
    deploy: "https://github.com/Petri36/Pokemon",
    github: "https://github.com/Petri36/Pokemon",
    technologies: [
      <DiHtml5 />,
      <DiCss3 />,
      <DiJavascript />,
      <DiSass />,
      <SiPostgresql />,
      <DiReact />,
      <SiRedux />,
    ],
    description:
      "Aplicación que permite visualizar pokémones, buscarlos, filtrarlos, ordenarlos o crear uno nuevo.",
    newProject: false,
  },

  {
    id: 3,
    title: "Pets America",
    image:
      "https://res.cloudinary.com/deve27qy9/image/upload/v1684276635/petsamerica_y8cg39.png",
    deploy: "https://pf-henry-one.vercel.app/",
    github: "https://github.com/MichaellDev1/App-Pelis",
    technologies: [
      <DiHtml5 />,
      <DiCss3 />,
      <SiBootstrap />,
      <DiJavascript />,
      <DiResponsive />,
      <DiReact />,
      <DiMongodb />,
    ],
    description:
      "Aplicación que permite comprar y vender productos y servicios para mascotas.",
    newProject: false,
  },
];
