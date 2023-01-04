import React from 'react';
import logo from '../logo.svg'

const Contributions = () => {
    return (
        <div className="contributions-container">
            <h2>Contributions</h2>
            {/* TODO: refine the hr tag to be more minimalist */}
            <hr/>
            <div className="contributions">
                {/* TODO: Create first project here, then abstract out to component */}
                <div className="proj1">
                    <img src={logo} alt="project"/>
                </div>
            </div>
        </div>
    )
}

export default Contributions;