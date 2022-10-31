import React from 'react'
import projectsData from '../utils/projectsData'
import ProjectItem from '../components/ProjectItem.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

import images from '../images/index'

export default function Projects() {
    const projectItems = projectsData.map((data, idx )=> {
        return <ProjectItem key={data.id} data={data} idx={idx} />
    }) 

    return (
        <div className='projects' name="projects">
            {/* {projectItems} */}
            <div className="container">
                <div className="projects__item one column">
                    <div className="project__image-placeholder">
                        <img className='project__image' src={images.picSome} alt="" />
                        <a href="#" className="project__link">View Project <FontAwesomeIcon className="link__icon" icon={faArrowUpRightFromSquare}/></a>
                    </div>
                    <div className="content">
                        <p className="secondary-title">React App</p>
                        <h3 className="main-title">Pic Some</h3>
                        <p className="desc">
                            An e-commerce like website that is built with react libraries. It is a website where you choose images that you want to order and will go to the cart item to finally purchased the items.
                        </p>
                        {/* <a href="#" className="project__link">View Project </a> */}
                    </div>
                </div>
                <div className="projects__item two row">
                    <div className="project__image-placeholder">
                        <img className='project__image' src={images.quizzicalApp} alt="" />
                        <a href="#" className="project__link">View Project <FontAwesomeIcon className="link__icon" icon={faArrowUpRightFromSquare}/></a>
                    </div>
                    <div className="content">
                        <p className="secondary-title">React App</p>
                        <h3 className="main-title">Quizzical App</h3>
                        <p className="desc">
                           It is a game app that shows trivial questions. It uses basic React hooks, props and state.
                        </p>
                        {/* <a href="#" className="project__link">View Project </a> */}
                    </div>
                </div>
                <div className="projects__item three row">
                    <div className="project__image-placeholder">
                        <img className='project__image' src={images.passwordGenerator} alt="" />
                        <a href="#" className="project__link">View Project <FontAwesomeIcon className="link__icon" icon={faArrowUpRightFromSquare}/></a>
                    </div>
                    <div className="content">
                        <p className="secondary-title">React App</p>
                        <h3 className="main-title">Portfolio</h3>
                        <p className="desc">
                            My personal web portfolio. This is where I put all the skills that I've acquired from online bootcamp. I've used React hooks, custom hooks, react Context, react useRef, and some npm package.
                        </p>
                        {/* <a href="#" className="project__link">View Project </a> */}
                    </div>
                </div>
                <div className="projects__item four row">
                    <div className="project__image-placeholder">
                        <img className='project__image' src={images.mathWizardRpg} alt="" />
                        <a href="#" className="project__link">View Project <FontAwesomeIcon className="link__icon" icon={faArrowUpRightFromSquare}/></a>
                    </div>
                    <div className="content">
                        <p className="secondary-title">Vanilla JS App</p>
                        <h3 className="main-title">Math Wizard RPG</h3>
                        <p className="desc">
                            Built with Vanilla JS. It is a role playing game app. You have to finish all the challenge with the wizard as your hero.
                        </p>
                        {/* <a href="#" className="project__link">View Project </a> */}
                    </div>
                </div>
                <div className="projects__item five">
                    <div className="project__image-placeholder">
                        <img className='project__image' src={images.colorSchemeGenerator} alt="" />
                        <a href="#" className="project__link">View Project <FontAwesomeIcon className="link__icon" icon={faArrowUpRightFromSquare}/></a>
                    </div>
                    <div className="content">
                        <p className="secondary-title">Vanilla JS App</p>
                        <h3 className="main-title">Color-Scheme Generator</h3>
                        <p className="desc">
                            Web app works with API. In this app you will select color amd select the type of color scheme that you want to return.
                        </p>
                        {/* <a href="#" className="project__link">View Project </a> */}
                    </div>
                </div>
                <div className="projects__item six row">
                    <div className="project__image-placeholder">
                        <img className='project__image' src={images.passwordGenerator} alt="" />
                        <a href="#" className="project__link">View Project <FontAwesomeIcon className="link__icon" icon={faArrowUpRightFromSquare}/></a>
                    </div>
                    <div className="content">
                        <p className="secondary-title">Vanilla JS App</p>
                        <h3 className="main-title">Password generetor</h3>
                        <p className="desc">
                            Web app created with just Vanilla JS. It can generate random passwords based on criteria you put in the option section.
                        </p>
                        {/* <a href="#" className="project__link">View Project </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
