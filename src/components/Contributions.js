import React from 'react';
import bug from '../svg/bug.svg';
import pencil from '../svg/pencil.svg';
import shield from '../svg/shield.svg';

const Contributions = () => {
    return (
        <div className="gallery-container">
            <h2>Contributions</h2>
            {/* TODO: refine the hr tag to be more minimalist */}
            <hr/>
            <div className="gallery">
            <ul className="gallery-list">
                    <li>
                        <div className="circle">
                            <img src={shield} alt="contribution"/>
                        </div>
                    </li>
                    <li>
                        <div className="circle">
                            <img src={bug} alt="contribution"/>
                        </div>
                        
                    </li>
                    <li>
                        <div className="circle">
                            <img src={pencil} alt="contribution"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contributions;