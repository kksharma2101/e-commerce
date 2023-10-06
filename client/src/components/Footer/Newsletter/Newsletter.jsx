import "./Newsletter.scss";
import React from "react";
import {FaFacebookF,FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

const Newsletter = () => {
    return <div className="newsLetter-section"> 
    <div className="newsLetter-content">
        <h3>Newsletter</h3>
        <span>sign up for latest updates and offers</span>
        <div className="input-section">
            <input type="text" placeholder="Write your email" />
            <button>Subscribe</button>
        </div>
        <p>will be used in accordance with our privacy policy</p>
        <div className="social-logo">
            <FaLinkedinIn className="fa"/>
            <FaFacebookF className="fa"/>
            <FaInstagram className="fa"/>
            <FaTwitter className="fa"/>
        </div>
    </div>
     </div>;
};

export default Newsletter;
