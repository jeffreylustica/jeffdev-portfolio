import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import useObserver from '../hooks/useObserver'

export default function ProjectItem({data}) {
    const {source, secondaryTitle, mainTitle, desc, link} = data
    
    const [addToRefs] = useObserver({rootMargin: "0px 0px -100px 0px"})

    return (
        <div className="projects__item fadeLeft" ref={addToRefs} data-transition-class="fadeInX">
            <div className="project__image-placeholder">
                <img className='project__image' src={source} alt="" />
                <a href={link} className="project__link">View Project <FontAwesomeIcon className="link__icon" icon={faArrowUpRightFromSquare}/></a>
            </div>
            <div className="content">
                <p className="secondary-title">{secondaryTitle}</p>
                <h3 className="main-title">{mainTitle}</h3>
                <p className="desc">
                    {desc}
                </p>
            </div>
        </div>
    )
}

// project-container-1
