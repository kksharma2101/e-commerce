import "./Footer.scss";
import React from "react";
import {FaLocationArrow,FaMobileAlt} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import Payment from '../../assets/payments.png';
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="about-content">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Dolore, quae.</p>
            </div>
            <div className="contact-content">
                <h3>Contact</h3>
                <div className="contact-list">
                    <FaLocationArrow /> 
                    <span>
                    New Delhi, India
                    </span>
                </div>
                <div className="contact-list">
                    <FaMobileAlt />
                    <span>
                  Phone: 6395799943
                    </span>
                </div>
                <div className="contact-list">
                    <AiOutlineMail />
                    <span>
                    Email: kamalbsr2101@gmail.com
                    </span>
                </div>
            </div>
            <div className="categories-content">
                <h3>Categories</h3>
                <p>Headphones</p>
                <p>Smart Watches</p>
                <p>Bluetooth Speakers</p>
                <p>Wireless Earbuds</p>
                <p>Home Theatre</p>
                <p>Projects</p>
            </div>
            <div className="pages-content">
                <h3>Pages</h3>
                <p>Home</p>
                <p>About</p>
                <p>Privacy Policy</p>
                <p>Returns</p>
                <p>Terms & Conditions</p>
                <p>Contact Us</p>
            </div>
        </div>
    </footer>;
};

export default Footer;
