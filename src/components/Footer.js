import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Import X (Twitter) icon from fa6

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Branding */}
        <div className="footer-brand">
          <h2>Flames & Fork</h2>
          <p>Discover, Cook & Enjoy!</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/categories">Categories</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="social-icon" />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">© 2025 Flames & Fork. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
