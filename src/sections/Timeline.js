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
                        <small className="event__date">June 2 2012 - April 29 2016</small>
                        <h2 className="event__company">AMA Computer Learning Center College Of Baliuag</h2>
                        <p className="event__desc">I studied information technology in college. I received a Cum Laude diploma. Our main thesis, which is a web application for a mini market, was primarily developed by me. For front-end development, we used Html, CSS, bootstrap, JavaScript, and jquery to create the web application. and PHP for back-end development, along with MySQL, SQL and XAMPP.</p>
                    </div>
                </div>

                <div className="event">
                    <div className="event__icon">
                        <FontAwesomeIcon icon={faBuilding} className="event__fa-icon fade" ref={addToRefs} data-transition-class="fadeInScale" />
                        <span className="event__line"></span>
                    </div>
                    <div className="event__info fadeRight" ref={addToRefs} data-transition-class="fadeInX">
                        <small className="event__date">September 23 2016 - January 15 2022</small>
                        <h2 className="event__company">Accenture</h2>
                        <p className="event__desc">My very first job was with Accenture. I've been a data analyst at Accenture for five years. I was part of both the front end and back end of the process. In the front end, it was my responsibility to make sure accurate data was entered into the system and to address any prompts encountered before releasing the claims. For the back-end process, we get requests from onshore, and we have to get the data they need and provide it back to them.</p>
                    </div>
                </div>

                <div className="event">
                    <div className="event__icon">
                        <FontAwesomeIcon icon={faLaptopCode} className="event__fa-icon fade" ref={addToRefs} data-transition-class="fadeInScale" /> 
                    </div>
                    <div className="event__info fadeRight" ref={addToRefs} data-transition-class="fadeInX">
                        <small className="event__date">January 25 2022 - July 25 2022</small>
                        <h2 className="event__company">Scrimba AS</h2>
                        <p className="event__desc">I signed up for Scrimba AS, an online coding program that offers a front-end developer career path. It consists of 1162 lessons covering HTML5, CSS3, JavaScript, React, API, Git, Ui Design Fundamentals, and responsive web design, with an estimated 80 hours of coursework. It also has more than 12 projects and 80 challenges. They provide code screencasts in a new video format. They refer to it as "scrims," and it produces an excellent learning experience.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
