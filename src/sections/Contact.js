import React, {useState, useRef, useEffect} from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'
import Alert from '../components/Alert'
import Modal from '../components/Modal'
import useBodyScrollLock from '../hooks/useBodyScrollLock'

export default function Contact() {
    const [modal, setModal] = useState(false)

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_7mms43l', 'template_t4518ph', form.current, 'LttAF_doS5X32BYJ3')
        .then((result) => {
            console.log(result.text)
            e.target.reset()  
            openModal()      
        }, (error) => {
            console.log(error.text)
        })

    }

    const {toggleScrollLock, scrollUnlock} = useBodyScrollLock()

    function openModal() {
        setModal(true)
        toggleScrollLock()
    }

    function closeModal() {
        setModal(false)
        scrollUnlock()
    }

    return (
        <div className='contact' name="contact">
            {modal && <Modal closeModal = {closeModal}/>}
            {/* <Modal /> */}
            <div className="container">
                <h2 className="sub-title">Let's connect.</h2>
                <p className="contact__message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo </p>
                <div className="contact__actions">
                    <form ref={form} onSubmit={sendEmail} className="contact__left contact__form">
                        <input type="text" placeholder="Name" name="user_name" required/>
                        <input type="email" placeholder='Email' name="user_email" required/>
                        <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
                        <button className='submit-btn' type="submit">
                            <FontAwesomeIcon icon={faPaperPlane}/> Send Message
                        </button>
                    </form>

                    <div className="contact__right contact__links">
                        <p className="contact__option">or call me at </p>
                        <span className='contact__info'><FontAwesomeIcon className='contact__icon' icon={faPhone} />0906 007 8013</span>
                        {/* <span><FontAwesomeIcon className='contact__icon' icon={faEnvelope} />jefflustica2@gmail.com</span> */}

                        <div className="social__icons">
                            <a href="#" className="social__links">
                                <FontAwesomeIcon className='social__icon' icon={faFacebookF} />
                            </a>
                            <a href="#" className="social__links">
                                <FontAwesomeIcon className='social__icon' icon={faLinkedinIn} />
                            </a>
                            <a href="#" className="social__links">
                                <FontAwesomeIcon className='social__icon' icon={faGithub} />
                            </a>
                            <a href="mailto:jefflustica@gmail.com" target={'_blank'} className="social__links">
                                <FontAwesomeIcon className='social__icon' icon={faEnvelope} />
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
