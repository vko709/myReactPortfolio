import './index.scss';
import { useState } from 'react'
import LogoS from '../../assets/images/v-logo.png'
import LogoSubtitle from '../../assets/images/vaibhav.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import { faLinkedin, faGithub, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoS} alt="Logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="vaibhav" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about" >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                {/* <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink> */}
                <NavLink activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon icon={faClose} color="#ffd700" size="3x" className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/vko709/" target="_blank" rel="noreferrer" >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/vko709" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@SoundandTunes" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" className="anchor-icon" />
                    </a>
                </li>
                <li>
                    {/* <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" className="anchor-icon" />
                    </a> */}
                </li>
            </ul>

        </div>
    );
}

export default Sidebar;