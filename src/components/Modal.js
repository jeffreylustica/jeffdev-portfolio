import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'

export default function Modal({closeModal}) {
    return (
        <div className='overlay'>
            <div className="modal">
                <FontAwesomeIcon className='modal__check-icon' icon={faCheck} />
                <span className="modal__sent">Thank you!</span>
                <span className='modal__message'>Your message has been successfully sent. I will contant you soon.</span>
                <button className='modal__close-btn' onClick={closeModal}>
                    <FontAwesomeIcon className='modal__close-icon' icon={faXmark} />
                </button>
            </div>
        </div>
    )
}
