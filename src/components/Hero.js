import React from 'react'
import './hero.scss'
import profilepicture from '../assets/profile_photo.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__content__image">
          <img src={profilepicture} alt="" />
        </div>
        <div className="hero__content__text">
          <h1>Front-End Engineer</h1>
          <h2>Based in London, UK</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
