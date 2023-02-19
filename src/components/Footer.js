import React from 'react';
import './../footer.css';
import download from '../images/download.svg';

const Footer = () => {
    return (
  <footer>

    <div class="footer-content">

      <h3>Download Resume</h3>
      <a href='#' className='download-anchor'>
        {/* <img src={download} alt="download resume" className='download-icon'/> */}
        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 15V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18L4 15M8 11L12 15M12 15L16 11M12 15V3" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className='download-icon'/>
</svg>
      </a>

      <p className='footer-text'>
      I find great joy in leveraging my security and coding skills to craft incredible and secure products. My approach involves taking a holistic view of the project and making informed architectural decisions that are aligned with the company's overall vision and goals. Whether working at a strategic level or as an individual contributor, I'm passionate about delivering elegant and effective solutions that exceed expectations.
      </p>

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