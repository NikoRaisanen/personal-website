import './App.css';
import logo from './logo.svg';
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
            <h1>Niko Raisanen</h1>
            <h2>Full-Stack Developer and AppSec Engineer</h2>
        </div>

        <img src={logo} id="header-pic" alt="headshot"/>
        
        <div id="intro">
            <p>My intro here</p>
            <p>My intro here</p>
            <p>My intro here</p>
        </div>
        {/*
        TODO: Add appropriate links to anchor tags
        TODO: Add svg element into each list item
        TODO: Remove bullet points from list items
        */}
      </header>
      {/* <div className="fade-container">fade</div> */}
      <div className="main-container">
        <Projects className="projects"/>
        <Contributions className="projects"/>
        <Socials/>
      </div>
      
    </div>
  );
}

export default App;
