import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useObserver from '../hooks/useObserver'

export default function Card({item}) {
    const {brandName, classname, brandIcon, brandDesc} = item
    
    const [addToRefs] = useObserver({rootMargin: "0px 0px 50px 0px"})
    
    const [isReadmore, setIsReadMore] = useState(true)

    function toggleReadMore() {
        setIsReadMore(!isReadmore)
    }

    return (
        <div className={`card fadeBottom`} ref={addToRefs} data-transition-class="fadeInY">
            <div className="brand">
                <FontAwesomeIcon icon={brandIcon} className={`brand__icon ${classname}`} />
            </div>

            <h3 className="brand__name">{brandName}</h3>

            <p className={`brand__desc ${isReadmore && 'line-clamp'}`}>{brandDesc}</p>

            <span className='read-more' onClick={toggleReadMore}>{isReadmore ? "read more" : "read less"}</span>
           
        </div>
    )
}
