import React from 'react'
import './FooterBar.css'
import { SocialIcon } from 'react-social-icons'

const FooterBar = () => {
  return (
    <>
    <footer>
        <div className='footer-container'>
            <div className='social-icons'>
                <SocialIcon href="www.github.com"/>
                <SocialIcon href="www.linkedin.com"/>
                <SocialIcon href="www.twitter.com"/>
                <SocialIcon href="www.facebook.com"/>
            </div>
        </div>
    </footer>
    </>
  )
}

export default FooterBar