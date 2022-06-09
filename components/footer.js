import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import {faSquareEnvelope, faSquarePhone} from '@fortawesome/free-solid-svg-icons';

import SiteTitle from "./title";

export default function Footer(props) {
    return (
        <footer className="serif">
            <div id="footerBanner">
                <SiteTitle id="footerTitle" />
                <span>
                    <a href="https://instagram.com/navarn_photos?igshid=YmMyMTA2M2Y=" target="_blank"><FontAwesomeIcon icon={faInstagramSquare}/> </a>
                    <a href="mailto:navarn.photos@gmail.com" target="_blank"><FontAwesomeIcon icon={faSquareEnvelope}/> </a>
                    <a href="tel:+17087334466"><FontAwesomeIcon icon={faSquarePhone}/></a>
                </span>
            </div>
            <div id="credit">Website by <a href="https://www.linkedin.com/in/kristinwiseman/" target="_blank">Kristin Wiseman</a></div>
        </footer>
    )
}

