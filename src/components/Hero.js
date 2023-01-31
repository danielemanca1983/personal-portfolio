import React from 'react'
import './hero.scss'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__content__image">
          <p>My Image</p>
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
