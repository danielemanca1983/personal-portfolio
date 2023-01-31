import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import './footer.scss'

const Footer = () => {
  return (
    <footer className="main__footer">
      <div className="main__footer__title">
        <h2>Daniele Manca</h2>
      </div>
      <div className="main__footer__social-icons">
        <Link to="/">
          <FaGithubSquare />
        </Link>
        <Link to="/">
          <FaLinkedin />
        </Link>
      </div>
      <div className="main__footer__copyright">
        <p>Copyright 2022</p>
      </div>
    </footer>
  )
}

export default Footer
