import './css/App.css';
import pfp from './images/pfp.png';
import Socials from './components/Socials';
import ParticlesBackground from './components/ParticlesBackground';
import Footer from './components/Footer';
import ContributionsList from './components/ContributionsList';
import ExperienceList from './components/ExperiencesList';

function App() {
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
        <ExperienceList />
        <ContributionsList/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
