import React from 'react';
import logo from '../logo.svg';
import group from '../svg/group.svg';
import play from '../svg/play.svg';
import smiley from '../svg/smiley.svg';
import rekognition from '../svg/rekognition.png';
import sentiment from '../svg/sentiment.png';

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
                        <div className='overlay gallery-layer'/>
                            <div className="circle gallery-layer">
                                <span className="gallery-text">
                                    ML Image Recognition
                                </span>
                                <img src={rekognition} height="150" width="150" alt="project"/>
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
                                <img src={play} alt="project"/>
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
                                <img src={sentiment} height="150" width="150" alt="project"/>
                        </div>
                        </a>
                    </li>
                </ul>
                    
            </div>
        </div>
    )
}

export default Projects;