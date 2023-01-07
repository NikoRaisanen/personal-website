import React from 'react';
import logo from '../logo.svg';
import group from '../svg/group.svg';
import play from '../svg/play.svg';
import smiley from '../svg/smiley.svg';

const Projects = () => {
    return (
        <div className="gallery-container">
            <h2>Projects</h2>
            {/* TODO: refine the hr tag to be more minimalist */}
            <div className="gallery">
                {/* TODO: Create first project here, then abstract out to component */}
                <ul className="gallery-list">
                    <li>
                        <div className="circle">
                            <img src={group} alt="project"/>
                        </div>
                    </li>
                    <li>
                        <div className="circle">
                            <img src={play} alt="project"/>
                        </div>
                        
                    </li>
                    <li>
                        <div className="circle">
                            <img src={smiley} alt="project"/>
                        </div>
                    </li>
                </ul>
                    
            </div>
        </div>
    )
}

export default Projects;