import './App.css';
import pfp from './images/pfp.png';
import Projects from './components/Projects';
import Socials from './components/Socials';
import ParticlesBackground from './components/ParticlesBackground';
import Contributions from './components/Contributions';
import { useEffect, useState, useRef } from 'react';
import Footer from './components/Footer';

/*
TODO:

Change element IDs to classes
Fill out footer with content
Upload resume to S3
Add email to footer
*/
function App() {
  const galleryHead = useRef(null);

  useEffect(() => {
    const el = document.getElementsByClassName('App')[0];
    el.style.height = '100vh';
    el.style.overflow = 'hidden';
    window.addEventListener('wheel', handleScroll, { passive: false });
  }, []);

  const handleScroll = (e) => {
    // if scrollwheel up, do nothing
    if (e.deltaY < 0) return;

    window.removeEventListener('wheel', handleScroll)
    const el = document.getElementsByClassName('App')[0];
    el.style.removeProperty('height');
    el.style.removeProperty('overflow');
    galleryHead.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  return (
    <div className="App">
    <ParticlesBackground/>
      {/* TODO: add slowly animated bg to header element */}
      {/* TODO: make text animated */}
      <header className="App-header">
        <div id="header-text">
            <h1 id="main-header">NIKO RAISANEN</h1>
        </div>

        <img src={pfp} id="header-pic" alt="headshot"/>
        <Socials/>
        
        <div id="intro">
            <p>Hello! I'm Niko, a software engineer with a background in security engineering. I have a passion for turning my ideas into tangible solutions through code and am always eager to dive into a new challenge.</p>
        </div>
      </header>
      <div className="main-container">
        <div className="projects-section" ref={galleryHead}>
            <Projects className="projects"/>
        </div>
        <Contributions className="projects"/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
