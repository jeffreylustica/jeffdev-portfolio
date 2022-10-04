import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <div className='contact' name="contact">
            <div className="container">
                <h2 className="sub-title">Let's connect.</h2>
                <p className="contact__message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo </p>
                <div className="contact__actions">
                    <div className="contact__left contact__form">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder='Email' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                        <button className='submit-btn' type="submit">
                            <FontAwesomeIcon icon={faPaperPlane}/> Send Message
                        </button>
                    </div>

                    <div className="contact__right contact__links">
                        <h3 className="contact__option">or email, call me at </h3>
                        <span><FontAwesomeIcon className='contact__icons' icon={faPhone} />0906 007 8013</span>
                        <span><FontAwesomeIcon className='contact__icons' icon={faEnvelope} />jefflustica2@gmail.com</span>

                        <FontAwesomeIcon className='social-icons' icon={faFacebookF} />
                        <FontAwesomeIcon className='social-icons' icon={faGithub} />
                        <FontAwesomeIcon className='social-icons' icon={faLinkedinIn} />
                    </div>

                </div>
            </div>
        </div>
    )
}
