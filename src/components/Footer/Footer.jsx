import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Vernon</h1>

        <ul className="footer__list">
          <li>
            <a href="#about"
             className="footer__link">About</a>
          </li>

          <li>
            <a href="#skills"
             className="footer__link">Skills</a>
          </li>

          <li>
            <a href="#portfolio"
             className="footer__link">Projects</a>
          </li>
        </ul>

        <div className="footer__social">
          <a 
          href="https://www.linkedin.com/in/kiana-vernon-a05670184/" className="footer__social-link" 
          rel='noreferrer' 
          target="_blank"
          >
            <i class='bx bxl-linkedin' ></i>
          </a>

          <a 
          href="https://github.com/k-vernon" className="footer__social-link" 
          rel='noreferrer' 
          target="_blank"
          >
          <i class='bx bxl-github' ></i>
          </a>

          <a 
          href="mailto:kvernon908@gmail.com" className="footer__social-link" 
          rel='noreferrer' 
          target="_blank"
          >
            <i class='bx bx-envelope' ></i>
          </a>
        </div>

        <span className="footer__copy"> Inpired by CrypticalCoder<br/>&#169; Kiana Vernon. All Rights Reserved</span>
      </div>
    </footer>
  )
}

export default Footer