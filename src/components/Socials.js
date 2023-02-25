import '../css/App.css';
import '../css/socials.scss';

function Socials() {
    return(
        <div className="social-container">
            <ul className="social-icons">
                <li><a href="https://github.com/NikoRaisanen" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/niko-raisanen-6b8534171" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/chronodota/?hl=en" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
            </ul>
        </div>
    )
}

export default Socials;
