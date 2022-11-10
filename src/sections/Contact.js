import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faPaperPlane, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'
import Modal from '../components/Modal'
import useBodyScrollLock from '../hooks/useBodyScrollLock'
import useObserver from '../hooks/useObserver'

export default function Contact() {
    const [modal, setModal] = useState(false)

    const [addToRefs] = useObserver({rootMargin: "0px 0px -100px 0px"})

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

    function mergeRefs(...inputRefs) {
        return (ref) => {
            inputRefs.forEach((inputRef) => {
            if (!inputRef) {
                return;
            }
        
            if (typeof inputRef === 'function') {
                inputRef(ref);
            } else {
                inputRef.current = ref;
            }
            });
        };
    }

    return (
        <div className='contact' name="contact">
            {modal && <Modal closeModal = {closeModal}/>}
            <div className="container">
                <p className="contact__message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo </p>
                <div className="contact__actions">
                    <form ref={mergeRefs(form, addToRefs)} onSubmit={sendEmail} className="contact__left contact__form fadeBottom" data-transition-class="fadeInY">
                        <input type="text" placeholder="Name" name="user_name" required/>
                        <input type="email" placeholder='Email' name="user_email" required/>
                        <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
                        <button className='submit-btn' type="submit">
                            <FontAwesomeIcon icon={faPaperPlane}/> Send Message
                        </button>
                    </form>

                    <div className="contact__right contact__links fadeRight" ref={addToRefs} data-transition-class="fadeInX" >
                        <p className="contact__option">or call me at </p>
                        <span className='contact__info'><FontAwesomeIcon className='contact__icon' icon={faPhone} />0906 007 8013</span>
                        <span className='contact__info'><FontAwesomeIcon className='contact__icon' icon={faLocationDot} />080 Tenejero, Candaba, Pampanga</span>
                        
                        <div className="social__icons">
                            <a href="https://www.facebook.com/jeffrey.lustica.9" target="_blank" className="social__links">
                                <FontAwesomeIcon className='social__icon' icon={faFacebookF} />
                            </a>
                            <a href="https://www.linkedin.com/in/jeffrey-lustica-8178b5229" target="_blank"  className="social__links">
                                <FontAwesomeIcon className='social__icon' icon={faLinkedinIn} />
                            </a>
                            <a href="https://github.com/jeffnew1" target="_blank" className="social__links">
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
