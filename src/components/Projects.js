import React from 'react'
import ProjectBlock from './ProjectBlock'
import bradleys from '../assets/bradleys.png'
import ecobank from '../assets/ecobank.png'
import hughes from '../assets/hughes.png'
import reactapp from '../assets/react-app.png'
import showsuite from '../assets/showsuite.png'
import './projects.scss'

const Projects = () => {

  const projects = [
    {
      title: "Bradley’s Restaurant  - Website UI Development & Wordpress Theme Implementation",
      description: "Bradley’s is a restaurant based in North West London. They had consulted the agency I worked for in 2015 for a website redesign. The visual designers created a modern design which is currently still in use,  which is also responsive. In order to enable the client to perform certain updates, we offered a Wordpress Theme implementation.",
      view: "https://www.bradleysnw3.co.uk/",
      tags: "#frontend #wordpresstheme #responsivewebdesign",
      img: bradleys,
    },
    {
      title: "EcoBank - Website UI Development",
      description: "EcoBank is a Pan-African Bank Corporation. They had consulted Brand Communications, the digital agency I worked for back in Jan - Feb 2016. The visual design team created a modern design which is currently still in use, and is also responsive.",
      view: "https://ecobank.com/personal-banking",
      tags: "#frontend  #responsivewebdesign #cssframework",
      img: ecobank
    },
    {
      title: "Showsuite - Main website and internal web apps UI Development",
      description: "Showsuite PTE LTD is a Singaporean tech start-up working in the real-estate space. I worked for them both remotely and in-house between June 2017 and October 2020 as their sole front-end engineer. Working with a team of back-end engineers, in an agile fashion, I took part to daily stand-ups to discuss requirements. I also took part to meetings with the designers to discuss feasibility of new features and redesign of existing ones. The tech-stack involved HTML5, CSS3, SASS, Bootstrap 4, Javascript and Angular JS on the front-end.",
      view: "https://showsuite.com",
      tags: "#frontend  #responsivewebdesign #cssframework #javascript #angularjs ",
      img: showsuite
    },
    {
      title: "Hughes Design & Build  - Website UI Development and Wordpress Theme Implementation",
      description: "Hughes is a group of folks  based in south west London, which work in the architecture sector. They had consulted Xanda, the agency I worked for in 2015 for a new website design  and build. The visual designers created a modern design which is currently still in use. In order to enable the client to perform certain updates, we also implemented their website as a Wordpress theme.",
      view: "https://www.hughesdesignandbuild.com/",
      tags: "#frontend #wordpresstheme #responsivewebdesign",
      img: hughes
    },
    {
      title: "React and MaterialUI Admin Dashboard",
      description: "This project was created to practice my knowledge with Javascript and React. It harnesses UI components and theming capabilities from MaterialUI and also state management and routing within React core. The colours can also be switched through the theme switch on the top right.",
      view: "",
      tags: "#frontend #javascript #react #materialui",
      img: reactapp
    }
  ]

  return (
    <section className="projects">
      <h2>Here are some of my projects</h2>
      {
        projects.map((project, index) => {
          return (
            <ProjectBlock
              key={index}
              {...project}
            />
          )
        })
      }
    </section>
  )
}

export default Projects
