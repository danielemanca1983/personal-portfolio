import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './header.scss'
import { MdMenu } from 'react-icons/md'
import { TfiClose } from "react-icons/tfi";

const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className="main__header">
      <Link to="/">
        <h1>DM</h1>
      </Link>
      <button className="menu__btn" onClick={handleClick}>
        Menu 
        {
          click ? (<TfiClose />) : (<MdMenu />)
        }
      </button>
      <ul className={click ? 'main__nav__list active' : 'main__nav__list' }>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header


