import React from 'react';
import logo from '../logo.svg';
import group from '../svg/group.svg';
import play from '../svg/play.svg';
import smiley from '../svg/smiley.svg';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            {/* TODO: refine the hr tag to be more minimalist */}
            <div className="projects">
                {/* TODO: Create first project here, then abstract out to component */}
                <ul className="projects-list">
                    <li>
                        <img src={group} alt="project"/>
                    </li>
                    <li>
                        <img src={play} alt="project"/>
                    </li>
                    <li>
                        <img src={smiley} alt="project"/>
                    </li>
                </ul>
                    
            </div>
        </div>
    )
}

export default Projects;