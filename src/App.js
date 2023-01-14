import './App.css';
import pfp from './svg/pfp.png';
import Projects from './components/Projects';
import Socials from './components/Socials';
import ParticlesBackground from './components/ParticlesBackground';
import Contributions from './components/Contributions';

function App() {
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
            <p>More cool stuff here</p>
            <p>I like fishing</p>
        </div>
      </header>
      <div className="main-container">
        <Projects className="projects"/>
        <Contributions className="projects"/>
      </div>
      
    </div>
  );
}

export default App;
