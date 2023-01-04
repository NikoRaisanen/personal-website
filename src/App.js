import './App.css';
import logo from './logo.svg';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      {/* TODO: add slowly animated bg to header element */}
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
        <div id="socials-bar">
            <li className="social-icon">
                <a href='xyz.com'/>
            </li>
            <li className="social-icon">
                <a href='xyz.com'/>
            </li>
            <li className="social-icon">
                <a href='xyz.com'/>
            </li>
        </div>

      </header>
      <body>
        <Projects className="projects"/>
      </body>
      
    </div>
  );
}

export default App;
