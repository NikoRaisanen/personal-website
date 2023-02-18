import React from 'react';
import './../footer.css';
import download from '../images/download.svg';

const Footer = () => {
    return (
  <footer>

    <div class="footer-content">

      <h3>Download Resume</h3>
      <a href='#'>
        <img src={download} alt="download resume" className='download-icon'/>
      </a>
      

      <p>blah blah blah a few more things about me here</p>

      {/* <ul class="socials">

        <li><a href="#"><i class="fa fa-facebook"></i></a></li>

        <li><a href="#"><i class="fa fa-twitter"></i></a></li>

        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>

        <li><a href="#"><i class="fa fa-youtube"></i></a></li>

        <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>

      </ul> */}

    </div>

  </footer>
    )
}

export default Footer;