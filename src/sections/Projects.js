import React from 'react'
import projectsData from '../utils/projectsData'
import ProjectItem from '../components/ProjectItem.js'

export default function Projects() {
    const projectItems = projectsData.map((data, idx )=> {
        return <ProjectItem key={data.id} data={data} idx={idx} />
    }) 
    // console.log(projectsData)

    return (
        <div className='projects' name="projects">
            {projectItems}
        </div>
    )
}

{/* <div className="project-item">
                    <div className="container project-container-1">
                        <div className="project__image-container left">
                            <a href="#" className="project__image-placeholder">
                                <img className='project__image' src={images.quizzicalApp} alt="project screenshot" />
                            </a>
                        </div>
                        <div className="project__info right">
                            <h3 className="secondary-title">React App</h3>
                            <h1 className="main-title">Quizzical App</h1>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? 
                            </p>
                            <a href="#" className="project__link">View Project</a>
                        </div>
                    </div>
                </div>

                <div className="project-item">
                    <div className="container">
                        <div className="project__image-container right">
                            <a href="#" className="project__image-placeholder">
                                <img className='project__image' src={images.colorSchemeGenerator} alt="project image" />
                            </a>
                        </div>
                        <div className="project__info left text-light">
                            <h3 className="secondary-title">Vanilla JS</h3>
                            <h1 className="main-title">Color Scheme Generator</h1>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? 
                            </p>
                            <a href="#" className="project__link">View Project</a>
                        </div>
                    </div>
                </div>

                <div className="project-item">
                    <div className="container">
                        <div className="project__image-container left">
                            <a href="#" className="project__image-placeholder">
                                <img className='project__image' src={images.passwordGenerator} alt="project image" />
                            </a>
                        </div>
                        <div className="project__info right">
                            <h3 className="secondary-title">Vanilla JS</h3>
                            <h1 className="main-title">Password Generator</h1>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error? 
                            </p>
                            <a href="#" className="project__link">View Project</a>
                        </div>
                    </div>
                </div> */}
