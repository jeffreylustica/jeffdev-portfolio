import React from 'react'
import tempBg from '../images/tempBg.jpg'

export default function Featured() {
    return (
        <div className='featured'>
            <div className="container">
                <h1 className="section-title">Featured</h1>

                <div className="left">
                    <h4 className="featured__secondary-title">React App</h4>
                    <h2 className="featured__title">Movie Watchlist</h2>
                    <p className="featured__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error?</p>
                </div>

                <div className="right">
                    <img className='featured__photo' src={tempBg} alt='my featured project'></img>
                </div>
            </div>
        </div>
    )
}
