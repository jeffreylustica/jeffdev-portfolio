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
                    <h3 className="featured__secondary-title">React App</h3>
                    <h2 className="featured__title">Movie Watchlist</h2>
                    <p className="featured__desc">Application that let you save your favorite movie to watch. This app was created using react library, I've used npm react router dom to make the app SPA.</p>
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
