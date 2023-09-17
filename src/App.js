import './css/App.css';
import pfp from './images/pfp.png';
import Projects from './components/Projects';
import Socials from './components/Socials';
import ParticlesBackground from './components/ParticlesBackground';
import Contributions from './components/Contributions';
import { useEffect, useRef } from 'react';
import Footer from './components/Footer';

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
      <header className="App-header">
        <div className="header-text">
            <h1 className="main-header">NIKO RAISANEN</h1>
        </div>

        <img src={pfp} className="header-pic" alt="headshot"/>
        <Socials/>
        
        <div className="intro">
            <p>Hello, I'm Niko, a Software Engineer with a background in Application Security. With expertise in designing and implementing elegant solutions, I thrive on tackling complex problems that lack a clear path forward</p>
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
