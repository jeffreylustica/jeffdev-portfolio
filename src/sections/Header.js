import React, {useState} from 'react'
import { Link } from 'react-scroll'
import logo from '../images/logo24.svg'

export default function Header({isElVisible}) {
  const [isNavActive, setIsNavActive] = useState(false)

  function toggleNav() {
    setIsNavActive(!isNavActive)
  }

  function closeNav() {
    setIsNavActive(false)
  }

  const activeNav = isNavActive && "active"
  const scrolledNavClass = !isElVisible && "scrolledClass"

  return (
    <header className={`header ${scrolledNavClass}`}>
      <div className="container">
          <a href="#" className="logo-link">
            <img className='logo' src={logo} alt="website logo"/>
          </a>

          <nav className={`nav ${activeNav}`}>
            <ul className="nav-list">
              <li className="nav-list__item">
                <Link activeClass="active" to="my-work" spy={true} smooth={true} offset={-100} duration={500}  className="link" onClick={closeNav}>My Work
                </Link>
              </li>
              <li className="nav-list__item">
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="link" onClick={closeNav}>Skills
                </Link>
              </li>
              <li className="nav-list__item">
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="link" onClick={closeNav}>Projects
                </Link>
              </li>
              <li className="nav-list__item">
                <Link activeClass="active" to="timeline" spy={true} smooth={true} offset={-100} duration={500} className="link" onClick={closeNav}>Timeline
                </Link>
              </li>
              <li className="nav-list__item">
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="link" onClick={closeNav}>Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className={`menu-btn ${activeNav}`} onClick={toggleNav}>
            <div className="burger"></div>
          </div>

          {/* <button className={`log-in-btn ${activeNav}`}>Log in</button> */}
      </div>
    </header>
  )
}
