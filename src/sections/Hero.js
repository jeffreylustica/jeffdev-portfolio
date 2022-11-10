import React from 'react'
import resume from '../files/jeffrey.f.lustica-resume.pdf'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileArrowDown} from '@fortawesome/free-solid-svg-icons'
import useObserver from '../hooks/useObserver'

function Hero(props, ref) {
    const [addToRefs] = useObserver()

    return (
        <div className='hero' name="hero" ref={ref}>
            <div className="container">
                <div className="left">
                    <h1 className={`intro fadeBottom`} ref={addToRefs} data-transition-class="fadeInY">Develop from good to unimaginable <span className='intro__accent'>user experience.</span> </h1>
                    <p className={`intro-desc fadeBottom`} ref={addToRefs} data-transition-class="fadeInY">Ensures that your website visitors can easily interact with the page by designing, programming and with technology.</p>

                    <a href={resume} download="jeffreyLustica-resume" className={`hero__btn fadeLeft`} ref={addToRefs} data-transition-class="fadeInX">Download CV<FontAwesomeIcon icon={faFileArrowDown} className="hero__btn-icon" /> </a> 
            
                    <span className="hero__explore">More about me</span>
                </div>
            </div>
        </div>
    )
}

const forwardedRef = React.forwardRef(Hero)

export default forwardedRef
