import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faLinkedinIn, faGithub, enve} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faDownload, faArrowDown} from '@fortawesome/free-solid-svg-icons'

function Hero(props, ref) {

    return (
        <div className='hero' ref={ref}>
            <div className="container">
                <div className="left">
                    <p className="greeting">Hi, I am <strong className="name">Jeffrey Lustica</strong></p>
                    <h1 className="intro">Love Arts and Sports!</h1>
                    <p className='intro-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error?</p>

                    {/* <div className="hero__icons">
                        <a href="#" className="hero__links">
                            <FontAwesomeIcon className='hero__icon' icon={faFacebookF} />
                        </a>
                        <a href="#" className="hero__links">
                            <FontAwesomeIcon className='hero__icon' icon={faLinkedinIn} />
                        </a>
                        <a href="#" className="hero__links">
                            <FontAwesomeIcon className='hero__icon' icon={faGithub} />
                        </a>
                        <a href="mailto:jefflustica@gmail.com" target={'_blank'} className="hero__links">
                            <FontAwesomeIcon className='hero__icon' icon={faEnvelope} />
                        </a>
                    </div> */}

                    <button className="hero__btn cv-btn">Download CV 
                    </button> 
                    {/* <FontAwesomeIcon icon={faDownload} /> */}
                    {/* <span className='hero__arrow-container'>
                        <FontAwesomeIcon className='hero__arrow-down' icon={faArrowDown} />
                    </span> */}
                    {/* <button className="hero__btn learn-more-btn">More about me</button> */}
                    <span className="hero__explore">Learn more</span>

                    {/* <div className='hero__scroll'></div> */}
                </div>

                {/* <div className="right">
                    <h1>Right</h1>
                </div> */}
            </div>
        </div>
    )
}

const forwardedRef = React.forwardRef(Hero)

export default forwardedRef
