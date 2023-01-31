import './App.css';
import pfp from './svg/pfp.png';
import Projects from './components/Projects';
import Socials from './components/Socials';
import ParticlesBackground from './components/ParticlesBackground';
import Contributions from './components/Contributions';
import { useEffect, useState, useRef } from 'react';

/*
TODO:

Can I make this like fullpage.js?
Sect 1 = Title page
Sect 2 = Projects
Sect 3 = Contributions
*/
function App() {
  const galleryHead = useRef(null);

  useEffect(() => {
    const el = document.getElementsByClassName('App')[0];
    el.style.height = '100vh';
    el.style.overflow = 'hidden';
    window.addEventListener('wheel', handleScroll, { once: true, passive: false });
  }, []);

  const handleScroll = (e) => {
    console.log('event', e)
    const el = document.getElementsByClassName('App')[0];
    el.style.removeProperty('height');
    el.style.removeProperty('overflow');
    galleryHead.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // const h = window.innerHeight;
    // window.scrollBy(0, h);
  }


  return (
    <div className="App">
    <ParticlesBackground/>
      {/* TODO: add slowly animated bg to header element */}
      {/* TODO: make text animated */}
      <header className="App-header">
        <div id="header-text">
            <h1 id="main-header">NIKO RAISANEN</h1>
            {/* <h5>Full-Stack Developer and AppSec Engineer</h5> */}
        </div>

        <img src={pfp} id="header-pic" alt="headshot"/>
        <Socials/>
        
        <div id="intro">
            <p className="headline">Full-Stack Developer and AppSec Engineer</p>
            <p>I have many titles - Software Engineer, AppSec Engineer, Fisherman, but first and foremost, I am a creative problem solver.</p>
        </div>
      </header>
      <div className="main-container">
        <div className="projects-section" ref={galleryHead}>
            <Projects className="projects"/>
        </div>
        <Contributions className="projects"/>
      </div>
    </div>
  );
}

export default App;
