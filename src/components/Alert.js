import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle, faXmark} from '@fortawesome/free-solid-svg-icons'

export default function Alert() {
    return (
        <div className='alert'>
            <FontAwesomeIcon className='alert__check' icon={faCheckCircle} />
            <span className='alert__message'>Message sent. Thank you!</span>
            {/* <button className='alert__close-btn'>
                <FontAwesomeIcon className='alert__close' icon={faXmark} />
            </button> */}
        </div>
    )
}
