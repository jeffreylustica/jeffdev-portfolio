import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBuilding, faLaptopCode} from '@fortawesome/free-solid-svg-icons'

export default function Timeline() {
    return (
        <div className='timeline' name="timeline">
            <div className="container">
                {/* <h1 className="section-title">Timeline</h1> */}
                <div className="event">
                    <div className="event__icon">
                        <FontAwesomeIcon icon={faGraduationCap} className="event__fa-icon" />
                        <span className="event__line"></span>
                    </div>
                    <div className="event__info">
                        <small className="event__date">June 2 2012 - October 2 2016</small>
                        <h2 className="event__company">AMA Computer Learning Center College Of Baliuag</h2>
                        <p className="event__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? </p>
                    </div>
                </div>

                <div className="event">
                    <div className="event__icon">
                        <FontAwesomeIcon icon={faBuilding} className="event__fa-icon" />
                        <span className="event__line"></span>
                    </div>
                    <div className="event__info">
                        <small className="event__date">June 2 2012 - October 2 2016</small>
                        <h2 className="event__company">Accenture</h2>
                        <p className="event__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? </p>
                    </div>
                </div>

                <div className="event">
                    <div className="event__icon">
                        <FontAwesomeIcon icon={faLaptopCode} className="event__fa-icon" /> 
                    </div>
                    <div className="event__info">
                        <small className="event__date">June 2 2012 - October 2 2016</small>
                        <h2 className="event__company">Scrimba AS</h2>
                        <p className="event__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
