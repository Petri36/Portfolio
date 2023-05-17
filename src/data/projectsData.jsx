import { DiCss3, DiHtml5, DiJavascript, DiReact, SiBootstrap, DiMongodb, DiResponsive, DiSass, SiPostgresql, SiRedux } from './SkillsData'

export const projectsData = [
  {
    id: 0,
    title: 'Rick & Morty',
    image: 'https://res.cloudinary.com/deve27qy9/image/upload/v1684276477/R_M_lkmoin.png',
    deploy: 'https://rick-morty-petri36.vercel.app/',
    github: 'https://github.com/Petri36/Rick-Morty',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <DiReact />, <SiRedux/>],
    description: 'Aplicación que permite visualizar todos los personajes de la famosa serie, asi tambien como filtrarlos, añadirlos a favoritos y buscarlos.',
    newProject: false
  }, {
    id: 1,
    title: 'Pets America',
    image: 'https://res.cloudinary.com/deve27qy9/image/upload/v1684276635/petsamerica_y8cg39.png',
    deploy: 'https://pf-henry-one.vercel.app/',
    github: 'https://github.com/MichaellDev1/App-Pelis',
    technologies: [<DiHtml5 />, <DiCss3 />, <SiBootstrap/>, <DiJavascript />, <DiResponsive/>, <DiReact />, <DiMongodb/>],
    description: 'Aplicación que permite comprar y vender productos y servicios para mascotas.',
    newProject: true
  }, {
    id: 2,
    title: 'Pokemon App',
    image: 'https://res.cloudinary.com/deve27qy9/image/upload/v1684278425/pokemon_loimus.png',
    deploy: 'https://github.com/Petri36/Pokemon',
    github: 'https://github.com/Petri36/Pokemon',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <DiSass/>, <SiPostgresql/>, <DiReact />, <SiRedux/>],
    description: 'Aplicación que permite visualizar pokemones, ya sea por busqueda, filtrado u ordenamiento, o simplemente crear uno nuevo.',
    newProject: false
  }
]
