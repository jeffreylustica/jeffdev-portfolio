import React from 'react'

export default function ProjectItem({data, idx}) {
    const {imgAreaClass, source, infoAreaClass, infoTextClass, secondaryTitle, mainTitle, desc, link} = data

    return (
        <div className="project-item">
            <div className={`container ${idx === 0 && "project-container-1"}`}>
                <div className={`project__image-container ${imgAreaClass}`}>
                    <div className="project__image-placeholder">
                        <img className='project__image' src={source} alt="project screenshot" />
                    </div>
                </div>
                <div className={`project__info ${infoAreaClass} ${infoTextClass}`}>
                    <h3 className="secondary-title">{secondaryTitle}</h3>
                    <h1 className="main-title">{mainTitle}</h1>
                    <p className="desc">
                       {desc}
                    </p>
                    <a href={`${link}`} target="_blank" className="project__link">View Project</a>
                </div>
            </div>
        </div>
    )
}

// project-container-1
