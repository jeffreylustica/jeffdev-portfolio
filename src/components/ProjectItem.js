import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import useObserver from '../hooks/useObserver'

export default function ProjectItem({data}) {
    const {source, mainTitle, desc, tags, link} = data
    
    const [addToRefs] = useObserver({rootMargin: "0px 0px -100px 0px"})

    const [isReadmore, setIsReadMore] = useState(true)

    const tagsEl = tags.map(tag => {
        return (
            <span>{tag}</span>
        )
    })

    function toggleReadMore() {
        setIsReadMore(!isReadmore)
    }

    return (
        <div className="projects__item fadeLeft" ref={addToRefs} data-transition-class="fadeInX">
            <div className="project__image-placeholder">
                <img className='project__image' src={source} alt="" />
                <a href={link} target="_blank" rel="noreferrer" className="project__link">View Project <FontAwesomeIcon className="link__icon" icon={faArrowUpRightFromSquare}/></a>
            </div>
            <div className="content">
                <h3 className="main-title">{mainTitle}</h3>
                <p className={`desc ${isReadmore && 'line-clamp'}`}>
                    {desc}
                </p>
                <span className='read-more' onClick={toggleReadMore}>{isReadmore ? "read more" : "read less"}</span>
                <div className="tags">
                    {tagsEl}
                </div>
            </div>
        </div>
    )
}
