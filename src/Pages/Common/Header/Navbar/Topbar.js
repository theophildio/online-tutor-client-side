import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbar-container">
        <div className="top-left">
          <p><small>Call us today! +880 1712345678</small></p>
          <span>|</span>
          <p><small>info@onlinetutor.com</small></p>
        </div>
        <div className="top-right">
          <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://facebook.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://facebook.com"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;