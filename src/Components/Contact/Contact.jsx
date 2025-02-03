import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/img/Email Button.png'

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-kpi'>
            <h3>Send us a message <img src={msg_icon} alt='' /> </h3>
            <p>Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are 
            important to us we strive to porvide exceptional service to our 
            university community.</p>
            <ul>
                <li>Contact@Kinderpixel.de</li>            
                <li>+49 30 339 399 00</li>
                <li>Möllentordamm 10, 13597 Berlin <br/>
                </li>
            </ul>
        </div>
        <div className='contact-kpi'></div>
    </div>
  )
}

export default Contact