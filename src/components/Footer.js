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
      

      {/* <p>I enjoy combining my cybersecurity knowledge with technical engineering skills to create amazing and secure products. I like to look at the big picture and discuss architectural decisions. Beyond that, I enjoy being an individual contributor and getting into the weeds of technical implementations</p> */}

      {/* <p>
      I love combining my cybersecurity knoweldge with my technical coding skills to create awesome and secure products. I'm all about looking at the big picture and making informed architectural decisions that align with the company's goals. I'm passionate about securely solving technical problems at both the strategic and individual contributor levels
      </p> */}

      <p className='footer-text'>
      I find great joy in leveraging my security and coding skills to craft incredible and secure products. My approach involves taking a holistic view of the project and making informed architectural decisions that are aligned with the company's overall vision and goals. Whether working at a strategic level or as an individual contributor, I'm passionate about delivering elegant and effective solutions that exceed expectations.
      </p>

      {/* <p>
      "I derive immense joy from utilizing my expertise in cybersecurity and coding to develop incredible and secure products. My approach involves taking a holistic view of the project and making informed architectural decisions that are aligned with the company's overall vision and goals. Whether working at a strategic level or as an individual contributor, I'm passionate about delivering elegant and effective solutions that exceed expectations."
      </p> */}
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