import React from 'react'
import featuredImg from '../images/movie-watchlist-dark.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import useObserver from '../hooks/useObserver'

export default function Featured() {
    const [addToRefs] = useObserver({threshold: .325})

    return (
        <div className='featured' name="my-work">
            <div className="container">
                <span className='square-bg'></span>
                <div className={`left fadeLeft`} ref={addToRefs} data-transition-class="fadeInX">
                    <h2 className="featured__title">Movie Watchlist</h2>
                    <p className="featured__desc">React web application that allows you to save your watch list and favorite movies. An API server provides the data for it. Using React Router, this application was created as an SPA (Single-Page Application).</p>
                    <div className="featured__tags">
                        <span>React Js</span>
                        <span>React Context</span>
                        <span>Custom Hooks</span>
                        <span>Controlled Components</span>
                        <span>SPA</span>
                        <span>API</span>
                        <span>Git</span>
                    </div>
                    <a href="https://jeffnew1.github.io/react-movie-watchlist/" target={`_blank`} className="featured__link">View Project <FontAwesomeIcon className="link__icon" icon={faArrowUpRightFromSquare}/>
                    </a>
                </div>

                <div className={`right fadeBottom`} ref={addToRefs} data-transition-class="fadeInY">
                    <div className='photo-placeholder'>
                        <img className='featured__photo' src={featuredImg} alt='my featured project'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
