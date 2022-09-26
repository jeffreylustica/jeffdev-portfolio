import React from 'react'
import featuredImg from '../images/movie-watchlist-dark2.png'

export default function Featured() {
    return (
        <div className='featured' name="my-work">
            <div className="container">
                <div className="left">
                    <h3 className="featured__secondary-title">React App</h3>
                    <h2 className="featured__title">Movie Watchlist</h2>
                    <p className="featured__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error?</p>
                    <a href="#" className="featured__link">View Project</a>
                </div>

                <div className="right">
                    <img className='featured__photo' src={featuredImg} alt='my featured project'></img>
                </div>
            </div>
        </div>
    )
}
