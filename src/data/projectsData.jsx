import { DiCss3, DiHtml5, DiJavascript, DiReact, SiBootstrap, DiMongodb, DiResponsive, DiSass, SiPostgresql, SiRedux } from './SkillsData'

export const projectsData = [
  {
    id: 0,
    title: 'Rick & Morty',
    image: 'https://res.cloudinary.com/deve27qy9/image/upload/v1684276477/R_M_lkmoin.png',
    deploy: 'https://rick-morty-petri36.vercel.app/',
    github: 'https://github.com/Petri36/Rick-Morty',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <DiReact />, <SiRedux/>],
    description: 'Aplicación administrativa con la simulación de compra de criptomonedas y precios actualizados.',
    newProject: false
  }, {
    id: 1,
    title: 'Pets America',
    image: 'https://res.cloudinary.com/deve27qy9/image/upload/v1684276635/petsamerica_y8cg39.png',
    deploy: 'https://pf-henry-one.vercel.app/',
    github: 'https://github.com/MichaellDev1/App-Pelis',
    technologies: [<DiHtml5 />, <DiCss3 />, <SiBootstrap/>, <DiJavascript />, <DiResponsive/>, <DiReact />, <DiMongodb/>],
    description: 'Aplicación estilo netflix que muestra todas las peliculas.',
    newProject: true
  }, {
    id: 2,
    title: 'Pokemon App',
    image: 'https://res.cloudinary.com/deve27qy9/image/upload/v1684278425/pokemon_loimus.png',
    deploy: 'https://github.com/Petri36/Pokemon',
    github: 'https://github.com/Petri36/Pokemon',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <DiSass/>, <SiPostgresql/>, <DiReact />, <SiRedux/>],
    description: 'E-commerce que muestra diferentes productos con la posibilidad de agregar los mismos al carrito.',
    newProject: false
  }
]
