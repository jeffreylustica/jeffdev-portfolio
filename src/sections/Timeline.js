import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBuilding, faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import useObserver from '../hooks/useObserver'

export default function Timeline() {
    const [addToRefs] = useObserver({rootMargin: "0px 0px -200px 0px"})

    return (
        <div className='timeline' name="timeline">
            <div className="container">
                <div className="event">
                    <div className="event__icon">
                        <FontAwesomeIcon icon={faGraduationCap} className="event__fa-icon fade" ref={addToRefs} data-transition-class="fadeInScale" />
                        <span className="event__line"></span>
                    </div>
                    <div className="event__info fadeRight" ref={addToRefs} data-transition-class="fadeInX">
                        <small className="event__date">June 2 2012 - October 2 2016</small>
                        <h2 className="event__company">AMA Computer Learning Center College Of Baliuag</h2>
                        <p className="event__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? </p>
                    </div>
                </div>

                <div className="event">
                    <div className="event__icon">
                        <FontAwesomeIcon icon={faBuilding} className="event__fa-icon fade" ref={addToRefs} data-transition-class="fadeInScale" />
                        <span className="event__line"></span>
                    </div>
                    <div className="event__info fadeRight" ref={addToRefs} data-transition-class="fadeInX">
                        <small className="event__date">June 2 2012 - October 2 2016</small>
                        <h2 className="event__company">Accenture</h2>
                        <p className="event__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? </p>
                    </div>
                </div>

                <div className="event">
                    <div className="event__icon">
                        <FontAwesomeIcon icon={faLaptopCode} className="event__fa-icon fade" ref={addToRefs} data-transition-class="fadeInScale" /> 
                    </div>
                    <div className="event__info fadeRight" ref={addToRefs} data-transition-class="fadeInX">
                        <small className="event__date">June 2 2012 - October 2 2016</small>
                        <h2 className="event__company">Scrimba AS</h2>
                        <p className="event__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
