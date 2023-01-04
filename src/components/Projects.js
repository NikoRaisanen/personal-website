import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../logo.svg'

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            {/* TODO: refine the hr tag to be more minimalist */}
            <hr/>
            <div className="projects">
                {/* TODO: Create first project here, then abstract out to component */}
                <div className="proj1">
                    <img src={logo} alt="project"/>
                </div>
            </div>
        </div>
    )
}

export default Projects;