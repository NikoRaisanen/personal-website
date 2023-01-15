import React from 'react';
import paper from '../svg/paper.png';
import fq from '../svg/fq.png';
import octocat from '../svg/octocat.png';

const Contributions = () => {
    return (
        <div className="gallery-container">
            <h2>Contributions</h2>
            <div className='underline'/>
            <div className="gallery">
            <ul className="gallery-list">
                <li>
                    <a href="https://github.com/advisories?query=credit%3ANikoRaisanen" target="_blank" rel="noreferrer">
                    <div className='overlay'/>
                        <div className="circle">
                            <span className="gallery-text">
                                Github Security Advisory
                            </span>
                            <img src={octocat} height="150" width="150" alt="project"/>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/NikoRaisanen/Portswigger-Labs" target="_blank" rel="noreferrer">
                    <div className='overlay'/>
                        <div className="circle">
                            <span className="gallery-text sw">
                                Offensive Security Writeups
                            </span>
                            <img src={paper} height="150" width="150" alt="project"/>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="https://floqast.com/engineering-blog/post/integrating-siem-with-ci-cd/" target="_blank" rel="noreferrer">
                    <div className='overlay'/>
                        <div className="circle">
                            <span className="gallery-text">
                                Engineering Blog Post
                            </span>
                            <img src={fq} height="150" width="150" alt="project"/>
                    </div>
                    </a>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Contributions;