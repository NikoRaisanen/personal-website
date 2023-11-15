import './css/App.css';
import pfp from './images/pfp.png';
import Projects from './components/Projects';
import Socials from './components/Socials';
import ParticlesBackground from './components/ParticlesBackground';
import Contributions from './components/Contributions';
import { useRef } from 'react';
import Footer from './components/Footer';

function App() {
  const galleryHead = useRef(null);

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
            <p>Hello, I'm Niko, a Software Engineer with a background in Application Security. With expertise in designing and implementing impactful solutions, I thrive in tackling complex problems that require a unique attention to detail.</p>
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
