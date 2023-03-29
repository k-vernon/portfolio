import React from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'


const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">See My Work</span>
      
      <div className='portfolio__container'>

        <div className="portfolio__content">
          <div className="portfolio__image-container">
    
          </div>

          <div className="portfolio__description">
            <div className="portfolio__blip ">
            Take a deep dive into my portfolio of open source projects, web apps, experimentals, and WIPS.
            </div>
            <Link to='/portfolio'>
              <button className="portfolio__button button--flex button">
                View Portfolio <i class='bx bx-landscape button__icon'></i>
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Portfolio