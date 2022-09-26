import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card({item}) {
    const {brandName, classname, brandIcon, brandDesc} = item
    return (
        <div className="card">
            <div className="brand">
                <FontAwesomeIcon icon={brandIcon} className={`brand__icon ${classname}`} />
            </div>

            <h3 className="brand__name">{brandName}</h3>

            <p className="brand__desc">{brandDesc}</p>
        </div>
    )
}
