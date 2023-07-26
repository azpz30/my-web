import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import facebookLogo from './fb.svg'; // Import the Facebook logo image
import twitterLogo from './tw.svg'; // Import the Twitter logo image
import linkedinLogo from './lk.svg'; // Import the LinkedIn logo image
import githubLogo from './github.svg'; // Import the GitHub logo image

const FooterBar = () => {
  return (
    <>
      <Navbar fixed="bottom" bg="#999999" className='footerBar'>
        <div className='name-block'>Md Aziz Al Mehedi</div>
        <div className='get-in-touch'>
          <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" className="social-logo" />
          </a>
          <a href="https://www.twitter.com/your_username" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter" className="social-logo" />
          </a>
          <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
          </a>
          <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="social-logo" />
          </a>
        </div>
      </Navbar>
    </>
  );
}

export default FooterBar;
