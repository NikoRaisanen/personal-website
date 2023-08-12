import React from 'react';
import whiteFolder from '../images/whiteFolder.png';
import whiteYoutube from '../images/whiteYoutube.png';
import WhiteTwitter from '../images/whiteTwitter.png';

const Projects = () => {
    return (
        <div className="gallery-container">
            <h2>Projects</h2>
            <div className='underline'/>
            <div className="gallery">
                <ul className="gallery-list">
                    <li>
                        <a href="https://instantcoverletter.dev/get-started" target="_blank" rel="noreferrer">
                        <div className='overlay'/>
                            <div className="circle">
                                <span className="gallery-text" style={{ paddingLeft: '4px', top: 10}}>
                                    Instant<br/>Cover Letter
                                </span>
                                <img src={whiteFolder} height="100" width="100" alt="project"/>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/NikoRaisanen/clip-captain" target="_blank" rel="noreferrer">
                        <div className='overlay'/>
                            <div className="circle">
                                <span className="gallery-text" style={{top: 10, left: -1}}>
                                    Youtube Automation
                                </span>
                                <img src={whiteYoutube} alt="project" height="100" width="100"/>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/NikoRaisanen/twitter-sentiment-analysis" target="_blank" rel="noreferrer">
                        <div className='overlay'/>
                            <div className="circle">
                                <span className="gallery-text" style={{ top: 10 }}>
                                    Sentiment Analysis
                                </span>
                                <img src={WhiteTwitter} height="100" width="100" alt="project"/>
                        </div>
                        </a>
                    </li>
                </ul>
                    
            </div>
        </div>
    )
}

export default Projects;