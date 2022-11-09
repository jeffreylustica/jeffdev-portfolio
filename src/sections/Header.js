import React, {useState} from 'react'
import { Link } from 'react-scroll'
import LogoVector from '../components/LogoVector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faGears } from '@fortawesome/free-solid-svg-icons'
import { faFileCode, faCalendar, faAddressBook, } from '@fortawesome/free-regular-svg-icons'
import useBodyScrollLock from '../hooks/useBodyScrollLock'

export default function Header({isElVisible}) {
  const [isNavActive, setIsNavActive] = useState(false)
  const {ref, toggleScrollLock, scrollUnlock} = useBodyScrollLock()
  
  function toggleNav() {
    setIsNavActive(!isNavActive)
    toggleScrollLock()
  }
  
  function closeNav() {
    setIsNavActive(false)
    scrollUnlock()
  }
  
  // useEffect(() => {
  //   document.body.style.overflowY = isNavActive ? "hidden" : "auto"
  // }, [isNavActive])

  const activeNav = isNavActive && "active"
  const scrolledNavClass = !isElVisible && "scrolledClass"

  return (
    <header className={`header ${scrolledNavClass}`} ref={ref}>
      <div className="container">
          {/* <a href="#" className="logo-link">
            <img className='logo' src={logo} alt="website logo"/>
          </a> */}
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}  className="logo-link">
            {/* <img className="logo" src={logo} alt="website logo"/> */}
            <LogoVector />
          </Link>

          <nav className={`nav ${activeNav}`}>
            <ul className="nav-list">
              <li className="nav-list__item">
                <FontAwesomeIcon className="nav__link-icon" icon={faFileCode} />
                <Link activeClass="active" to="my-work" spy={true} smooth={true} offset={-100} duration={500}  className="link" onClick={closeNav}>
                  My Work
                </Link>
              </li>
              <li className="nav-list__item">
                <FontAwesomeIcon className="nav__link-icon" icon={faGears} />
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="link" onClick={closeNav}>
                  Skills
                </Link>
              </li>
              <li className="nav-list__item">
                <FontAwesomeIcon className="nav__link-icon" icon={faLaptopCode} />
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="link" onClick={closeNav}>
                  Projects
                </Link>
              </li>
              <li className="nav-list__item">
                <FontAwesomeIcon className="nav__link-icon" icon={faCalendar} />
                <Link activeClass="active" to="timeline" spy={true} smooth={true} offset={-50} duration={500} className="link" onClick={closeNav}>
                  Timeline
                </Link>
              </li>
              <li className="nav-list__item">
                <FontAwesomeIcon className="nav__link-icon" icon={faAddressBook} />
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="link" onClick={closeNav}>
                  Contact
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
