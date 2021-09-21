import React from "react";
import { connect } from "react-redux";
import '../assets/styles/components/Footer.scss'
import labLogo from '../assets/static/365LABLogo.jpg'

const Footer = () => {
  return (
    <div id='footer-wrap' className='footer-wrap'>
      <footer className="footer">
        <div className="footer-logo">
          <img src={labLogo} height="50px" alt="logo" />
        </div>
        <div className="footer-creator">
          <p>Created by <a href="https://twitter.com/VicGMD">@VicGMD</a></p>
        </div>
      </footer>
    </div>
  )
}

export default connect(null, null)(Footer);