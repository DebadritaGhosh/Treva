import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footerWrapper">
                    <div className="footerText">
                    {/* <NavLink exact to="/"><img src={require('../assets/logo.svg')} alt="NoImage" /></NavLink>  */}
                    <p className="footerP">&#169; 2020 Debadrita ghosh, All Rights Reserved | Terms and Conditions.</p>
                    </div>
                    <ul>
                        <li><a href="www.github.com"><img src={require('../assets/icons/github.svg')} alt="NoImage" className="footer__icon" /></a></li>
                        <li><a href="www.instagram.com"><img src={require('../assets/icons/instagram.svg')} alt="NoImage" className="footer__icon" /></a></li>
                        <li><a href="www.twitter.com"><img src={require('../assets/icons/twitter.svg')} alt="NoImage" className="footer__icon" /></a></li>
                        <li><a href="www.youtube.com"><img src={require('../assets/icons/youtube.svg')} alt="NoImage" className="footer__icon" /></a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;