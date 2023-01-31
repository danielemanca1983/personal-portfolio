import React from 'react'
import { SiHtml5, SiCss3, SiSass, SiBootstrap, SiJavascript, SiReact, SiGit, SiGithub, SiWordpress, SiPhp, SiFigma } from "react-icons/si";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import './about-content.scss'
import 'react-tooltip/dist/react-tooltip.css'

const AboutContent = () => {
  return (
    <section className="about">
      <h1>About me</h1>
      <div className="about__content">
        <p>I am a Front-End Engineer based in London, UK with several years of commercial experience. I have worked in permanent and contract roles for companies mainly based in London, UK.</p>

        <p>From June 2017 until October 2020, I worked as an in-house Front-End Engineer for a Singaporean start-up, where I worked between Kuala Lumpur and Singapore.</p>

        <p>As a Front-End Engineer, I believe it is essential to stay updated with the latest technologies in this fast-moving field. Therefore, in my spare time, I participate in courses offered on online learning platforms, such as Codeacademy.</p>

        <p>Furthermore, I am involved in several web developer communities where members can share, exchange information, and stay up-to-date with technologies and skills related to the field.</p>

        <p>To check out some of the projects I have worked on, you can browse on Projects. And for more detailed information about the companies that I have worked with over the years, feel free to connect with me on <a href="https://linkedin.com/in/dmanca" target="_blank" rel="noreferrer">LinkedIn</a>.</p>

        <h2>My Skills</h2>

        <p>I had started off as a Junior Web Developer in which my duties involved developing UIs for websites and provide implementations of those same UIs into Wordpress, therefore during the years I also developed Wordpress Theme Development experience and some PHP back-end experience.  Having mostly focussed on the front-end side of development, I also developed a great interest in design softwares, such as Photoshop, Adobe XD and most recently Figma.</p>

        <h2>Technologies & Tools</h2>
        
        <div className="about__content__tech">
            <SiHtml5 id="html5" size={50} data-tooltip-content="HTML5" />
            <ReactTooltip anchorId="html5" place="bottom"/>

            <SiCss3 id="css3" size={50} data-tooltip-content="CSS3" /> 
            <ReactTooltip anchorId="css3" place="bottom"/>

            <SiSass id="sass" size={50} data-tooltip-content="SASS" />
            <ReactTooltip anchorId="sass" place="bottom"/>

            <SiBootstrap id="bootstrap" size={50} data-tooltip-content="Bootstrap" />
            <ReactTooltip anchorId="bootstrap" place="bottom"/>

            <SiJavascript id="js" size={50} data-tooltip-content="JavaScript" />
            <ReactTooltip anchorId="js" place="bottom"/>

            <SiReact id="react" size={50} data-tooltip-content="React" />
            <ReactTooltip anchorId="react" place="bottom"/>

            <SiGit id="git" size={50} data-tooltip-content="GIT" />
            <ReactTooltip anchorId="git" place="bottom"/>

            <SiGithub id="github" size={50} data-tooltip-content="Github" />
            <ReactTooltip anchorId="github" place="bottom"/>

            <SiPhp id="php" size={50} data-tooltip-content="PHP" />
            <ReactTooltip anchorId="php" place="bottom"/>

            <SiWordpress id="wordpress" size={50} data-tooltip-content="Wordpress" />
            <ReactTooltip anchorId="wordpress" place="bottom"/>

            <SiFigma id="figma" size={50} data-tooltip-content="Figma" />
            <ReactTooltip anchorId="figma" place="bottom"/>

        </div>
      </div>
    </section>
  )
}

export default AboutContent
