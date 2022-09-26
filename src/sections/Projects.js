import React from 'react'
import tempBg from '../images/tempBg.jpg'

export default function Projects() {
    return (
        <div className='projects' name="projects">
            <div className="container">
                <div className="project-item">
                    <div className="project__image-container left">
                        <a href="#" className="project__link">
                            <img className='project__image' src={tempBg} alt="project image" />
                        </a>
                    </div>
                    <div className="project__info right text-light">
                        <h3 className="secondary-title">React App</h3>
                        <h1 className="main-title">Movie Watchlist</h1>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? 
                        </p>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project__image-container right">
                        <a href="#" className="project__link">
                            <img className='project__image' src={tempBg} alt="project image" />
                        </a>
                    </div>
                    <div className="project__info left">
                        <h3 className="secondary-title">React App</h3>
                        <h1 className="main-title">Quizzical App</h1>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? 
                        </p>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project__image-container left">
                        <a href="#" className="project__link">
                            <img className='project__image' src={tempBg} alt="project image" />
                        </a>
                    </div>
                    <div className="project__info right">
                        <h3 className="secondary-title">Vanilla JS</h3>
                        <h1 className="main-title">RPG Math Wizard</h1>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
