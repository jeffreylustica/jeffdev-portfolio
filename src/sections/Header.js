import React, {useState} from 'react'

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false)

  function toggleNav() {
    setIsNavActive(!isNavActive)
  }

  const activeClass = isNavActive && "active"

  return (
    <header className="header">
        <div className="header__left">
          <h4 className='logo'>&lt;jeffdev /&gt;</h4>


          <nav className={`nav ${activeClass}`}>
            <ul className="nav-list">
              <li className="nav-list__item"><a href='#' className='link active'>My Work</a></li>
              <li className="nav-list__item"><a href='#' className='link'>Skills</a></li>
              <li className="nav-list__item"><a href='#' className='link'>Projects</a></li>
              <li className="nav-list__item"><a href='#' className='link'>About</a></li>
            </ul>
          </nav>

        </div>

        <div className="header__right">
          <div className={`menu-btn ${activeClass}`} onClick={toggleNav}>
            <div className="burger"></div>
          </div>

          <button className={`log-in-btn ${activeClass}`}>Log in</button>
        </div>
    </header>
  )
}
