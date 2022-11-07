import React from 'react'
import projectsData from '../utils/projectsData'
import ProjectItem from '../components/ProjectItem.js'

export default function Projects() {
    const projectItems = projectsData.map((data)=> {
        return <ProjectItem key={data.id} data={data} />
    }) 

    return (
        <div className='projects' name="projects">
            <div className="container">
                {projectItems}
            </div>
        </div>
    )
}


