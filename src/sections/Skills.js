import React from 'react'
import Card from '../components/Card'
import skillsData from '../utils/skillsData'

export default function Skills() {
    const cards = skillsData.map(item => {
        return (
            <Card 
            key = {item.id}
            item = {item}
            />
        )
    })

    return (
        <div className='skills'>
            <div className="container">
                <h1 className="section-title">Skills</h1>

                <div className="card-holder">
                    {cards}
                </div>            
            </div>
        </div>
    )
}
