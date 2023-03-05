import React from 'react'
import './hero.scss'
import profilepicture from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__content__image">
          <img src={profilepicture} alt="" />
        </div>
        <div className="hero__content__text">
          <h1>Front-End Engineer</h1>
          <p><strong>Based in London, UK</strong></p>
        </div>
      </div>
    </section>
  )
}

export default Hero
