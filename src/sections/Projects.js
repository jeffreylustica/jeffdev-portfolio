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
                        <img className='project__image' src={images.quizzicalApp} alt="" />
                        <a href="#" className="project__link">View Project <FontAwesomeIcon className="link__icon" icon={faArrowUpRightFromSquare}/></a>
                    </div>
                    <div className="content">
                        <p className="secondary-title">React App</p>
                        <h3 className="main-title">Quizzical App</h3>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus reprehenderit, aut natus quos asperiores debitis ab cupiditate iusto harum.
                        </p>
                        {/* <a href="#" className="project__link">View Project </a> */}
                    </div>
                </div>
                <div className="projects__item two row">
                    <div className="project__image-placeholder">
                        <img className='project__image' src={images.colorSchemeGenerator} alt="" />
                        <a href="#" className="project__link">View Project <FontAwesomeIcon className="link__icon" icon={faArrowUpRightFromSquare}/></a>
                    </div>
                    <div className="content">
                        <p className="secondary-title">React App</p>
                        <h3 className="main-title">Quizzical App</h3>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus reprehenderit, aut natus quos asperiores debitis ab cupiditate iusto harum.
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
                        <h3 className="main-title">Quizzical App</h3>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus reprehenderit, aut natus quos asperiores debitis ab cupiditate iusto harum.
                        </p>
                        {/* <a href="#" className="project__link">View Project </a> */}
                    </div>
                </div>
                <div className="projects__item four row">
                    <div className="project__image-placeholder">
                        <img className='project__image' src={images.quizzicalApp} alt="" />
                        <a href="#" className="project__link">View Project <FontAwesomeIcon className="link__icon" icon={faArrowUpRightFromSquare}/></a>
                    </div>
                    <div className="content">
                        <p className="secondary-title">React App</p>
                        <h3 className="main-title">Quizzical App</h3>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus reprehenderit, aut natus quos asperiores debitis ab cupiditate iusto harum.
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
                        <p className="secondary-title">React App</p>
                        <h3 className="main-title">Quizzical App</h3>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus reprehenderit, aut natus quos asperiores debitis ab cupiditate iusto harum.
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
                        <p className="secondary-title">React App</p>
                        <h3 className="main-title">Quizzical App</h3>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus reprehenderit, aut natus quos asperiores debitis ab cupiditate iusto harum.
                        </p>
                        {/* <a href="#" className="project__link">View Project </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
