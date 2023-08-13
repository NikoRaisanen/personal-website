import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (

    <footer>
      <div className="footer-content">
      <a href='https://niko-public.s3.amazonaws.com/NikoResumeAugust2023C.pdf' target='_blank' className='download-anchor' style={{
        marginBottom: '-30px'
      }} rel="noreferrer">
        <p className='download-header' style={{
          color: 'white',
          fontSize: '32px',
          paddingRight: '10px',
        }}>Download Resume</p>
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 15V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18L4 15M8 11L12 15M12 15L16 11M12 15V3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className='download-icon'/>
          </svg>
        </a>
        <a href="mailto:nikoraisanenbusiness@gmail.com" className='email-anchor' style={{'textDecoration': 'none'}}>
          <p style={{'color': 'rgb(148, 145, 248)'}}>
          <i className="fa fa-envelope" aria-hidden="true" style={{'paddingRight': '10px', 'color': 'white'}}></i>
            nikoraisanenbusiness@gmail.com
          </p>
        </a>
        <p className='footer-text'>
        I find great joy in leveraging my security and coding skills to craft secure products that users love. My approach involves taking a holistic view of the project and making informed architectural and code-level decisions that align with the company's overall vision and goals. Whether working at a strategic level or as an individual contributor, I'm passionate about delivering elegant and effective solutions that exceed expectations.
        </p>
      </div>
    </footer>

  )
}

export default Footer;