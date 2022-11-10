import React from 'react'
import '../styles/Contact.css'
import {BsInstagram, BsSnapchat} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
function Contact () {
  return (
    <>
      <h1>Like my work, wanna Connect ?</h1>

      <div className="contact-flex">

        <img src="/images/contact-1.png" alt="" />
        <div className="contacts">

          <h3>Catch me up at !</h3>
          <div className="contact-icons-flex">
          <div className="contact-icons">
            <a href="https://instagram.com/belikeakash_?igshid=YmMyMTA2M2Y="><BsInstagram style={{color:'#fb3958'}} /></a>
          </div>
          <div className="contact-icons">
            <a href="https://www.snapchat.com/add/belikeakashh?share_id=1Cmg-UxuQcU&locale=en-GB"><BsSnapchat style={{color:'#FFFC00'}} /></a>
          </div>
          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/akash-sirohi-676b30202/"><FaLinkedin style={{color:'0077b5'}} /></a>
            
          </div>
          </div>
          <h3>
            Or Mail at
          </h3>
          <div className="contact-icons"> <a href="mailto: belikeavkash@gmail.com"></a> <SiGmail style={{color:'BB001B'}} /></div>
        </div>
        <img src="/images/contact-2.png" alt="" />
      </div>
    </>
  )
}

export default Contact