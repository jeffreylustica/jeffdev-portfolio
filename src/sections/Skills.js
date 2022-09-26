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
        <div className='skills' name="skills">
            <div className="container">
                <div className="cards-container">
                    {cards}
                </div>            
            </div>
        </div>
    )
}
