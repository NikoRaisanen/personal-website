import React from 'react';
import rekognition from '../svg/rekognition.png';
import sentiment from '../svg/sentiment.png';
import youtube from '../svg/youtube-automation.png';
import whiteFolder from '../svg/whiteFolder.png';
import whiteYoutube from '../svg/whiteYoutube.png';
import WhiteTwitter from '../svg/whiteTwitter.png';

// TODO: Make gallery animations faster
const Projects = () => {
    return (
        <div className="gallery-container">
            <h2>Projects</h2>
            <div className='underline'/>
            {/* TODO: refine the hr tag to be more minimalist */}
            <div className="gallery">
                <ul className="gallery-list">
                    <li>
                        <a href="https://github.com/NikoRaisanen/AWS-Rekognition-App" target="_blank" rel="noreferrer">
                        <div className='overlay'/>
                            <div className="circle">
                                <span className="gallery-text">
                                    ML Image Recognition
                                </span>
                                <img src={whiteFolder} height="100" width="100" alt="project"/>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/NikoRaisanen/clip-captain" target="_blank" rel="noreferrer">
                        <div className='overlay'/>
                            <div className="circle">
                                <span className="gallery-text">
                                    Youtube Automation
                                </span>
                                <img src={whiteYoutube} alt="project" height="100" width="100" style={{'padding-top': '2px'}}/>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/NikoRaisanen/twitter-sentiment-analysis" target="_blank" rel="noreferrer">
                        <div className='overlay'/>
                            <div className="circle">
                                <span className="gallery-text">
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