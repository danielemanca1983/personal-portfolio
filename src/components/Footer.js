import React from 'react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import './footer.scss'

const Footer = () => {
  return (
    <footer className="main__footer">
      <div className="main__footer__title">
        <h2>Daniele Manca</h2>
      </div>
      <div className="main__footer__social-icons">
        <a href="https://github.com/danielemanca1983" target="_blank" rel="noreferrer">
          <FaGithubSquare />
        </a>
        <a href="https://www.linkedin.com/in/dmanca/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className="main__footer__copyright">
        <p>Copyright 2022</p>
      </div>
    </footer>
  )
}

export default Footer
