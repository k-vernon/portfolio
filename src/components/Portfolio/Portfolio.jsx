import React from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'
import PortfolioImg from '../../assets/portfolioImg.jpeg'

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">See My Work</span>
      
      <div className='portfolio__container'>

        <div className="portfolio__content">
          <div className="portfolio__image-container">
            <img src={PortfolioImg} alt="portfolio-pictures" className='portfolio__images' /> 
          </div>

          <div className="portfolio__description">
            <div className="portfolio__blip ">
              Open source projects, web apps, experimentals and WIPS.
            </div>
            <Link to='/portfolio'>
              <button className="portfolio__button button">
                View Portfolio
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Portfolio