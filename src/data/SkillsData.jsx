import {
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiReact,
  DiSass,
  DiNodejsSmall,
  DiMongodb,
  DiResponsive
} from 'react-icons/di'
import { SiTailwindcss, SiBootstrap, SiRedux, SiPostgresql, SiSpring } from 'react-icons/si'
import { BsGit, BsFiletypeJava } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { FiGitlab } from 'react-icons/fi'
import { GrMysql } from 'react-icons/gr'

const skills = [
  {
    skill: 'Html',
    color: '#ff6a00',
    icon: <DiHtml5 />,
    inProcess: false
  },
  {
    skill: 'Css',
    color: '#0072ff',
    icon: <DiCss3 />,
    inProcess: false
  },
  {
    skill: 'Javascript',
    color: '#d8ff00',
    icon: <DiJavascript />,
    inProcess: false
  },
  {
    skill: 'Sass',
    color: '#d900ff',
    icon: <DiSass />,
    inProcess: false
  },
  {
    skill: 'Boostrap',
    color: '#9100ff',
    icon: <SiBootstrap />,
    inProcess: false
  },
  {
    skill: 'Taildwind',
    color: '#25bdf7',
    icon: <SiTailwindcss />,
    inProcess: false
  },
  {
    skill: 'React',
    color: '#3ec8fd',
    icon: <DiReact />,
    inProcess: false
  },
  {
    skill: 'Redux',
    color: '#3ec8fd',
    icon: <SiRedux />,
    inProcess: false
  },
  {
    skill: 'Git',
    color: '#ff3b00',
    icon: <BsGit />,
    inProcess: false
  },
  {
    skill: 'GitLab',
    color: '#ff3b00',
    icon: <FiGitlab />,
    inProcess: false
  },
  {
    skill: 'GitHub',
    color: '#ffebeb',
    icon: <AiFillGithub />,
    inProcess: false
  },
  {
    skill: 'Responsive',
    color: '#005c83',
    icon: <DiResponsive />,
    inProcess: false
  },
  {
    skill: 'Node js',
    color: '#019722',
    icon: <DiNodejsSmall />,
    inProcess: false
  },
  {
    skill: 'Mongo Db',
    color: '#04ff00',
    icon: <DiMongodb />,
    inProcess: false
  },
  {
    skill: 'My Sql',
    color: '#005c83',
    icon: <GrMysql />,
    inProcess: false
  },
  {
    skill: 'Postgre SQL',
    color: '#005c83',
    icon: <SiPostgresql />,
    inProcess: false
  },
  {
    skill: 'Java',
    color: '#005c83',
    icon: <BsFiletypeJava/>,
    inProcess: true
  },
  {
    skill: 'Spring',
    color: '#005c83',
    icon: <SiSpring/>,
    inProcess: true
  }
]

export {
  skills,
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiReact,
  SiTailwindcss,
  SiBootstrap,
  DiMongodb,
  DiResponsive,
  DiSass,
  SiPostgresql,
  SiRedux
}
